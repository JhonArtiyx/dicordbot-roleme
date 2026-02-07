import {
  ChannelType,
  EmbedBuilder,
  Guild,
  PermissionFlagsBits,
  type ButtonInteraction,
  type TextChannel,
} from 'discord.js';
import { getPrismaClient } from '../../prisma';

const prisma = getPrismaClient();

/**
 * Create a ticket channel for a user
 */
export async function createTicketChannel(
  interaction: ButtonInteraction,
  categoryId?: string
): Promise<void> {
  if (!interaction.guild) {
    await interaction.reply({
      content: '❌ This command can only be used in a server.',
      ephemeral: true,
    });
    return;
  }

  await interaction.deferReply({ ephemeral: true });

  // Get or create config
  let config = await prisma.ticketConfig.findUnique({
    where: { guildId: interaction.guild.id },
    include: { categories: true },
  });

  if (!config) {
    config = await prisma.ticketConfig.create({
      data: { guildId: interaction.guild.id },
      include: { categories: true },
    });
  }

  // Check if user has reached max open tickets
  const openTicketsCount = await prisma.ticket.count({
    where: {
      guildId: interaction.guild.id,
      userId: interaction.user.id,
      status: { in: ['OPEN', 'CLAIMED'] },
    },
  });

  if (openTicketsCount >= config.maxOpenTickets) {
    await interaction.editReply({
      content: `❌ You have reached the maximum of ${config.maxOpenTickets} open tickets. Please close an existing ticket first.`,
    });
    return;
  }

  try {
    // Get category if provided
    let category = null;
    if (categoryId) {
      category = await prisma.ticketCategory.findUnique({
        where: { id: categoryId },
      });
    }

    // Create ticket channel
    const channelName = `ticket-${interaction.user.username.toLowerCase().replace(/[^a-z0-9]/g, '')}`;

    const permissionOverwrites = [
      {
        id: interaction.guild.id,
        deny: [PermissionFlagsBits.ViewChannel],
      },
      {
        id: interaction.user.id,
        allow: [
          PermissionFlagsBits.ViewChannel,
          PermissionFlagsBits.SendMessages,
          PermissionFlagsBits.ReadMessageHistory,
          PermissionFlagsBits.AttachFiles,
          PermissionFlagsBits.EmbedLinks,
        ],
      },
      {
        id: interaction.client.user.id,
        allow: [
          PermissionFlagsBits.ViewChannel,
          PermissionFlagsBits.SendMessages,
          PermissionFlagsBits.ManageChannels,
          PermissionFlagsBits.ReadMessageHistory,
        ],
      },
    ];

    // Add support roles permissions
    for (const roleId of config.supportRoleIds) {
      permissionOverwrites.push({
        id: roleId,
        allow: [
          PermissionFlagsBits.ViewChannel,
          PermissionFlagsBits.SendMessages,
          PermissionFlagsBits.ReadMessageHistory,
          PermissionFlagsBits.AttachFiles,
          PermissionFlagsBits.EmbedLinks,
        ],
      });
    }

    const ticketChannel = await interaction.guild.channels.create({
      name: channelName,
      type: ChannelType.GuildText,
      parent: config.categoryChannelId || undefined,
      permissionOverwrites,
      topic: `Ticket opened by ${interaction.user.tag} (${interaction.user.id})`,
    });

    // Create ticket in database
    const ticket = await prisma.ticket.create({
      data: {
        guildId: interaction.guild.id,
        channelId: ticketChannel.id,
        userId: interaction.user.id,
        username: interaction.user.tag,
        categoryId: category?.id,
        configId: config.id,
      },
      include: { category: true },
    });

    // Send welcome message
    const welcomeEmbed = new EmbedBuilder()
      .setTitle('🎫 Support Ticket')
      .setDescription(
        config.welcomeMessage ||
          'Thank you for contacting support! A staff member will be with you shortly.'
      )
      .setColor(category?.color ? parseInt(category.color.replace('#', ''), 16) : 0x5865f2)
      .addFields(
        { name: 'Ticket ID', value: `\`${ticket.id}\``, inline: true },
        { name: 'Category', value: category?.name || 'General', inline: true },
        { name: 'Opened by', value: `<@${interaction.user.id}>`, inline: true }
      )
      .setFooter({ text: 'Use /ticket close to close this ticket' })
      .setTimestamp();

    await ticketChannel.send({
      content: `<@${interaction.user.id}>${config.supportRoleIds.length > 0 ? ` ${config.supportRoleIds.map(id => `<@&${id}>`).join(' ')}` : ''}`,
      embeds: [welcomeEmbed],
    });

    // Reply to user
    await interaction.editReply({
      content: `✅ Ticket created! Head over to <#${ticketChannel.id}>`,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error creating ticket channel:', error);
    await interaction.editReply({
      content: '❌ Failed to create ticket. Please contact an administrator.',
    });
  }
}

/**
 * Close a ticket and generate transcript
 */
export async function closeTicket(
  guild: Guild,
  ticketId: string,
  closedBy: string,
  reason?: string
): Promise<void> {
  const ticket = await prisma.ticket.findUnique({
    where: { id: ticketId },
    include: { config: true, messages: true },
  });

  if (!ticket) {
    throw new Error('Ticket not found');
  }

  if (ticket.status === 'CLOSED') {
    throw new Error('Ticket is already closed');
  }

  // Update ticket status
  await prisma.ticket.update({
    where: { id: ticketId },
    data: {
      status: 'CLOSED',
      closedAt: new Date(),
      closedBy,
      closedReason: reason,
    },
  });

  // Generate transcript if enabled
  if (ticket.config.enableTranscripts && ticket.config.transcriptsChannelId) {
    try {
      const transcriptChannel = (await guild.channels.fetch(
        ticket.config.transcriptsChannelId
      )) as TextChannel;

      if (transcriptChannel) {
        const transcript = generateTranscriptEmbed(ticket);
        await transcriptChannel.send({ embeds: [transcript] });
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error sending transcript:', error);
    }
  }
}

/**
 * Generate a transcript embed
 */
function generateTranscriptEmbed(ticket: {
  id: string;
  username: string;
  userId: string;
  createdAt: Date;
  closedAt: Date | null;
  closedBy: string | null;
  closedReason: string | null;
  messages: { username: string; content: string; createdAt: Date }[];
}): EmbedBuilder {
  const embed = new EmbedBuilder()
    .setTitle('📜 Ticket Transcript')
    .setColor(0x5865f2)
    .addFields(
      { name: 'Ticket ID', value: `\`${ticket.id}\``, inline: true },
      { name: 'Created by', value: `<@${ticket.userId}>`, inline: true },
      {
        name: 'Opened at',
        value: `<t:${Math.floor(ticket.createdAt.getTime() / 1000)}:F>`,
        inline: true,
      },
      {
        name: 'Closed at',
        value: ticket.closedAt ? `<t:${Math.floor(ticket.closedAt.getTime() / 1000)}:F>` : 'N/A',
        inline: true,
      },
      { name: 'Closed by', value: ticket.closedBy ? `<@${ticket.closedBy}>` : 'N/A', inline: true },
      {
        name: 'Messages',
        value: ticket.messages.length.toString(),
        inline: true,
      }
    );

  if (ticket.closedReason) {
    embed.addFields({
      name: 'Close Reason',
      value: ticket.closedReason,
      inline: false,
    });
  }

  // Add message summary (last 5 messages)
  if (ticket.messages.length > 0) {
    const recentMessages = ticket.messages
      .slice(-5)
      .map(msg => {
        const content =
          msg.content.length > 100 ? msg.content.substring(0, 100) + '...' : msg.content;
        return `**${msg.username}**: ${content}`;
      })
      .join('\n\n');

    embed.addFields({
      name: 'Recent Messages',
      value: recentMessages || 'No messages',
      inline: false,
    });
  }

  return embed;
}

/**
 * Save a message to ticket transcript
 */
export async function saveTicketMessage(
  ticketId: string,
  userId: string,
  username: string,
  content: string,
  attachments: string[] = [],
  isStaff = false
): Promise<void> {
  await prisma.ticketMessage.create({
    data: {
      ticketId,
      userId,
      username,
      content,
      attachments,
      isStaff,
    },
  });
}
