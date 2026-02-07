import { Command } from '@sapphire/framework';
import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  ChannelType,
  EmbedBuilder,
  PermissionFlagsBits,
} from 'discord.js';
import { getPrismaClient } from '../lib/prisma';

const prisma = getPrismaClient();

export class TicketCommand extends Command {
  public constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'ticket',
      description: 'Manage ticket system',
    });
  }

  public override registerApplicationCommands(registry: Command.Registry) {
    registry.registerChatInputCommand(builder =>
      builder
        .setName(this.name)
        .setDescription(this.description)
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false)
        .addSubcommand(subcommand =>
          subcommand
            .setName('setup')
            .setDescription('Setup ticket system in this channel')
            .addStringOption(option =>
              option.setName('title').setDescription('Title of the panel').setRequired(false)
            )
            .addStringOption(option =>
              option
                .setName('description')
                .setDescription('Description for the panel')
                .setRequired(false)
            )
        )
        .addSubcommand(subcommand =>
          subcommand
            .setName('config')
            .setDescription('Configure ticket system settings')
            .addChannelOption(option =>
              option
                .setName('category')
                .setDescription('Category channel where tickets will be created')
                .addChannelTypes(ChannelType.GuildCategory)
                .setRequired(false)
            )
            .addChannelOption(option =>
              option
                .setName('transcripts')
                .setDescription('Channel to send ticket transcripts')
                .addChannelTypes(ChannelType.GuildText)
                .setRequired(false)
            )
            .addRoleOption(option =>
              option
                .setName('support_role')
                .setDescription('Role that can view and manage tickets')
                .setRequired(false)
            )
            .addIntegerOption(option =>
              option
                .setName('max_tickets')
                .setDescription('Max open tickets per user (1-10)')
                .setMinValue(1)
                .setMaxValue(10)
                .setRequired(false)
            )
            .addBooleanOption(option =>
              option
                .setName('enable_ratings')
                .setDescription('Enable ticket ratings after closure')
                .setRequired(false)
            )
        )
        .addSubcommand(subcommand =>
          subcommand
            .setName('close')
            .setDescription('Close the current ticket')
            .addStringOption(option =>
              option.setName('reason').setDescription('Reason for closing').setRequired(false)
            )
        )
        .addSubcommand(subcommand =>
          subcommand
            .setName('add')
            .setDescription('Add a user to the current ticket')
            .addUserOption(option =>
              option.setName('user').setDescription('User to add').setRequired(true)
            )
        )
        .addSubcommand(subcommand =>
          subcommand
            .setName('remove')
            .setDescription('Remove a user from the current ticket')
            .addUserOption(option =>
              option.setName('user').setDescription('User to remove').setRequired(true)
            )
        )
        .addSubcommand(subcommand =>
          subcommand.setName('claim').setDescription('Claim the current ticket to handle it')
        )
        .addSubcommand(subcommand =>
          subcommand.setName('stats').setDescription('View ticket statistics for this server')
        )
        .addSubcommandGroup(group =>
          group
            .setName('category')
            .setDescription('Manage ticket categories')
            .addSubcommand(subcommand =>
              subcommand
                .setName('add')
                .setDescription('Add a ticket category')
                .addStringOption(option =>
                  option.setName('name').setDescription('Category name').setRequired(true)
                )
                .addStringOption(option =>
                  option
                    .setName('emoji')
                    .setDescription('Emoji for the category')
                    .setRequired(false)
                )
                .addStringOption(option =>
                  option
                    .setName('description')
                    .setDescription('Description of the category')
                    .setRequired(false)
                )
            )
            .addSubcommand(subcommand =>
              subcommand.setName('list').setDescription('List all ticket categories')
            )
            .addSubcommand(subcommand =>
              subcommand
                .setName('remove')
                .setDescription('Remove a ticket category')
                .addStringOption(option =>
                  option
                    .setName('name')
                    .setDescription('Name of the category to remove')
                    .setRequired(true)
                    .setAutocomplete(true)
                )
            )
        )
    );
  }

  public override async chatInputRun(interaction: Command.ChatInputCommandInteraction) {
    if (!interaction.guild) {
      await interaction.reply({
        content: '❌ This command can only be used in a server.',
        ephemeral: true,
      });
      return;
    }

    const subcommandGroup = interaction.options.getSubcommandGroup(false);
    const subcommand = interaction.options.getSubcommand();

    if (subcommandGroup === 'category') {
      if (subcommand === 'add') {
        await this.addCategory(interaction);
      } else if (subcommand === 'list') {
        await this.listCategories(interaction);
      } else if (subcommand === 'remove') {
        await this.removeCategory(interaction);
      }
    } else if (subcommand === 'setup') {
      await this.setup(interaction);
    } else if (subcommand === 'config') {
      await this.config(interaction);
    } else if (subcommand === 'close') {
      await this.close(interaction);
    } else if (subcommand === 'add') {
      await this.addUser(interaction);
    } else if (subcommand === 'remove') {
      await this.removeUser(interaction);
    } else if (subcommand === 'claim') {
      await this.claim(interaction);
    } else if (subcommand === 'stats') {
      await this.stats(interaction);
    }
  }

  /**
   * Setup ticket panel in current channel
   */
  private async setup(interaction: Command.ChatInputCommandInteraction) {
    const title = interaction.options.getString('title') || '🎫 Support Tickets';
    const description =
      interaction.options.getString('description') ||
      'Need help? Click the button below to create a support ticket.\n\nOur staff team will assist you as soon as possible.';

    // Get or create config
    let config = await prisma.ticketConfig.findUnique({
      where: { guildId: interaction.guild!.id },
      include: { categories: true },
    });

    if (!config) {
      config = await prisma.ticketConfig.create({
        data: { guildId: interaction.guild!.id },
        include: { categories: true },
      });
    }

    const embed = new EmbedBuilder()
      .setTitle(title)
      .setDescription(description)
      .setColor(0x5865f2)
      .setFooter({ text: 'Click the button below to open a ticket' })
      .setTimestamp();

    const button = new ButtonBuilder()
      .setCustomId('ticket_create')
      .setLabel('Create Ticket')
      .setEmoji('🎫')
      .setStyle(ButtonStyle.Primary);

    const row = new ActionRowBuilder<ButtonBuilder>().addComponents(button);

    const channel = interaction.channel;
    if (!channel || !('send' in channel)) {
      await interaction.reply({
        content: '❌ Unable to post the ticket panel in this channel.',
        ephemeral: true,
      });
      return;
    }

    await channel.send({
      embeds: [embed],
      components: [row],
    });

    await interaction.reply({
      content: '✅ Ticket panel has been set up successfully!',
      ephemeral: true,
    });
  }

  /**
   * Configure ticket system
   */
  private async config(interaction: Command.ChatInputCommandInteraction) {
    const category = interaction.options.getChannel('category');
    const transcripts = interaction.options.getChannel('transcripts');
    const supportRole = interaction.options.getRole('support_role');
    const maxTickets = interaction.options.getInteger('max_tickets');
    const enableRatings = interaction.options.getBoolean('enable_ratings');

    // Get or create config
    let config = await prisma.ticketConfig.findUnique({
      where: { guildId: interaction.guild!.id },
    });

    if (!config) {
      config = await prisma.ticketConfig.create({
        data: { guildId: interaction.guild!.id },
      });
    }

    // Prepare update data
    const updateData: Record<string, unknown> = {};

    if (category) {
      updateData.categoryChannelId = category.id;
    }
    if (transcripts) {
      updateData.transcriptsChannelId = transcripts.id;
    }
    if (supportRole) {
      // Add to existing support roles
      const currentRoles = config.supportRoleIds || [];
      if (!currentRoles.includes(supportRole.id)) {
        updateData.supportRoleIds = [...currentRoles, supportRole.id];
      }
    }
    if (maxTickets !== null) {
      updateData.maxOpenTickets = maxTickets;
    }
    if (enableRatings !== null) {
      updateData.enableRatings = enableRatings;
    }

    // Update if we have changes
    if (Object.keys(updateData).length > 0) {
      config = await prisma.ticketConfig.update({
        where: { guildId: interaction.guild!.id },
        data: updateData,
      });
    }

    const embed = new EmbedBuilder()
      .setTitle('⚙️ Ticket Configuration Updated')
      .setColor(0x00ff00)
      .setDescription('Your ticket system configuration has been updated.')
      .addFields(
        {
          name: 'Category Channel',
          value: config.categoryChannelId ? `<#${config.categoryChannelId}>` : 'Not set',
          inline: true,
        },
        {
          name: 'Transcripts Channel',
          value: config.transcriptsChannelId ? `<#${config.transcriptsChannelId}>` : 'Not set',
          inline: true,
        },
        {
          name: 'Max Open Tickets',
          value: config.maxOpenTickets.toString(),
          inline: true,
        },
        {
          name: 'Support Roles',
          value:
            config.supportRoleIds.length > 0
              ? config.supportRoleIds.map(id => `<@&${id}>`).join(', ')
              : 'None',
          inline: false,
        },
        {
          name: 'Ratings Enabled',
          value: config.enableRatings ? '✅ Yes' : '❌ No',
          inline: true,
        },
        {
          name: 'Transcripts Enabled',
          value: config.enableTranscripts ? '✅ Yes' : '❌ No',
          inline: true,
        }
      );

    await interaction.reply({ embeds: [embed], ephemeral: true });
  }

  /**
   * Close current ticket
   */
  private async close(interaction: Command.ChatInputCommandInteraction) {
    const reason = interaction.options.getString('reason');

    // Check if this is a ticket channel
    const ticket = await prisma.ticket.findUnique({
      where: { channelId: interaction.channel!.id },
      include: { config: true },
    });

    if (!ticket) {
      await interaction.reply({
        content: '❌ This is not a ticket channel.',
        ephemeral: true,
      });
      return;
    }

    if (ticket.status === 'CLOSED') {
      await interaction.reply({
        content: '❌ This ticket is already closed.',
        ephemeral: true,
      });
      return;
    }

    await interaction.deferReply();

    // Update ticket status
    await prisma.ticket.update({
      where: { id: ticket.id },
      data: {
        status: 'CLOSED',
        closedAt: new Date(),
        closedBy: interaction.user.id,
        closedReason: reason,
      },
    });

    const closeEmbed = new EmbedBuilder()
      .setTitle('🔒 Ticket Closed')
      .setDescription(reason || 'No reason provided')
      .setColor(0xff0000)
      .addFields(
        { name: 'Closed by', value: `<@${interaction.user.id}>`, inline: true },
        { name: 'Closed at', value: `<t:${Math.floor(Date.now() / 1000)}:F>`, inline: true }
      )
      .setTimestamp();

    await interaction.editReply({ embeds: [closeEmbed] });

    // Ask for rating if enabled
    if (ticket.config.enableRatings) {
      const ratingButton = new ButtonBuilder()
        .setCustomId(`ticket_rate_${ticket.id}`)
        .setLabel('Rate Support')
        .setEmoji('⭐')
        .setStyle(ButtonStyle.Secondary);

      const row = new ActionRowBuilder<ButtonBuilder>().addComponents(ratingButton);

      await interaction.followUp({
        content: `<@${ticket.userId}> How was your support experience?`,
        components: [row],
      });
    }

    // Delete channel after 10 seconds
    setTimeout(async () => {
      try {
        await interaction.channel!.delete();
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error deleting ticket channel:', error);
      }
    }, 10000);
  }

  /**
   * Add user to ticket
   */
  private async addUser(interaction: Command.ChatInputCommandInteraction) {
    const user = interaction.options.getUser('user', true);

    // Check if this is a ticket channel
    const ticket = await prisma.ticket.findUnique({
      where: { channelId: interaction.channel!.id },
    });

    if (!ticket) {
      await interaction.reply({
        content: '❌ This is not a ticket channel.',
        ephemeral: true,
      });
      return;
    }

    if (interaction.channel!.type !== ChannelType.GuildText) {
      await interaction.reply({
        content: '❌ Cannot modify permissions in this channel type.',
        ephemeral: true,
      });
      return;
    }

    try {
      await interaction.channel!.permissionOverwrites.create(user.id, {
        ViewChannel: true,
        SendMessages: true,
        ReadMessageHistory: true,
      });

      await interaction.reply({
        content: `✅ Added <@${user.id}> to this ticket.`,
        ephemeral: true,
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error adding user to ticket:', error);
      await interaction.reply({
        content: '❌ Failed to add user to ticket. Check bot permissions.',
        ephemeral: true,
      });
    }
  }

  /**
   * Remove user from ticket
   */
  private async removeUser(interaction: Command.ChatInputCommandInteraction) {
    const user = interaction.options.getUser('user', true);

    // Check if this is a ticket channel
    const ticket = await prisma.ticket.findUnique({
      where: { channelId: interaction.channel!.id },
    });

    if (!ticket) {
      await interaction.reply({
        content: '❌ This is not a ticket channel.',
        ephemeral: true,
      });
      return;
    }

    // Prevent removing ticket owner
    if (user.id === ticket.userId) {
      await interaction.reply({
        content: '❌ You cannot remove the ticket owner.',
        ephemeral: true,
      });
      return;
    }

    if (interaction.channel!.type !== ChannelType.GuildText) {
      await interaction.reply({
        content: '❌ Cannot modify permissions in this channel type.',
        ephemeral: true,
      });
      return;
    }

    try {
      await interaction.channel!.permissionOverwrites.delete(user.id);

      await interaction.reply({
        content: `✅ Removed <@${user.id}> from this ticket.`,
        ephemeral: true,
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error removing user from ticket:', error);
      await interaction.reply({
        content: '❌ Failed to remove user from ticket. Check bot permissions.',
        ephemeral: true,
      });
    }
  }

  /**
   * Claim a ticket
   */
  private async claim(interaction: Command.ChatInputCommandInteraction) {
    // Check if this is a ticket channel
    const ticket = await prisma.ticket.findUnique({
      where: { channelId: interaction.channel!.id },
    });

    if (!ticket) {
      await interaction.reply({
        content: '❌ This is not a ticket channel.',
        ephemeral: true,
      });
      return;
    }

    if (ticket.status === 'CLOSED') {
      await interaction.reply({
        content: '❌ Cannot claim a closed ticket.',
        ephemeral: true,
      });
      return;
    }

    if (ticket.claimedBy) {
      await interaction.reply({
        content: `❌ This ticket has already been claimed by <@${ticket.claimedBy}>.`,
        ephemeral: true,
      });
      return;
    }

    // Update ticket
    await prisma.ticket.update({
      where: { id: ticket.id },
      data: {
        status: 'CLAIMED',
        claimedBy: interaction.user.id,
      },
    });

    const embed = new EmbedBuilder()
      .setTitle('✋ Ticket Claimed')
      .setDescription(`This ticket has been claimed by <@${interaction.user.id}>`)
      .setColor(0xffa500)
      .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  }

  /**
   * Show ticket statistics
   */
  private async stats(interaction: Command.ChatInputCommandInteraction) {
    await interaction.deferReply({ ephemeral: true });

    const [totalTickets, openTickets, claimedTickets, closedTickets, avgRating] = await Promise.all(
      [
        prisma.ticket.count({ where: { guildId: interaction.guild!.id } }),
        prisma.ticket.count({ where: { guildId: interaction.guild!.id, status: 'OPEN' } }),
        prisma.ticket.count({ where: { guildId: interaction.guild!.id, status: 'CLAIMED' } }),
        prisma.ticket.count({ where: { guildId: interaction.guild!.id, status: 'CLOSED' } }),
        prisma.ticketRating.aggregate({
          where: {
            ticket: { guildId: interaction.guild!.id },
          },
          _avg: { rating: true },
          _count: true,
        }),
      ]
    );

    const embed = new EmbedBuilder()
      .setTitle('📊 Ticket Statistics')
      .setColor(0x5865f2)
      .addFields(
        { name: 'Total Tickets', value: totalTickets.toString(), inline: true },
        { name: 'Open', value: openTickets.toString(), inline: true },
        { name: 'Claimed', value: claimedTickets.toString(), inline: true },
        { name: 'Closed', value: closedTickets.toString(), inline: true },
        {
          name: 'Average Rating',
          value:
            avgRating._count > 0
              ? `⭐ ${(avgRating._avg.rating || 0).toFixed(1)} (${avgRating._count} ratings)`
              : 'No ratings yet',
          inline: true,
        }
      )
      .setTimestamp();

    await interaction.editReply({ embeds: [embed] });
  }

  /**
   * Add a ticket category
   */
  private async addCategory(interaction: Command.ChatInputCommandInteraction) {
    const name = interaction.options.getString('name', true);
    const emoji = interaction.options.getString('emoji');
    const description = interaction.options.getString('description');

    // Get or create config
    let config = await prisma.ticketConfig.findUnique({
      where: { guildId: interaction.guild!.id },
    });

    if (!config) {
      config = await prisma.ticketConfig.create({
        data: { guildId: interaction.guild!.id },
      });
    }

    // Check if category already exists
    const existing = await prisma.ticketCategory.findFirst({
      where: {
        configId: config.id,
        name: name,
      },
    });

    if (existing) {
      await interaction.reply({
        content: '❌ A category with this name already exists.',
        ephemeral: true,
      });
      return;
    }

    await prisma.ticketCategory.create({
      data: {
        guildId: interaction.guild!.id,
        configId: config.id,
        name,
        emoji,
        description,
      },
    });

    await interaction.reply({
      content: `✅ Created ticket category: **${emoji || ''} ${name}**`,
      ephemeral: true,
    });
  }

  /**
   * List ticket categories
   */
  private async listCategories(interaction: Command.ChatInputCommandInteraction) {
    const config = await prisma.ticketConfig.findUnique({
      where: { guildId: interaction.guild!.id },
      include: {
        categories: {
          include: {
            _count: {
              select: { tickets: true },
            },
          },
        },
      },
    });

    if (!config || config.categories.length === 0) {
      await interaction.reply({
        content: '❌ No ticket categories have been created yet.',
        ephemeral: true,
      });
      return;
    }

    const embed = new EmbedBuilder()
      .setTitle('📋 Ticket Categories')
      .setColor(0x5865f2)
      .setDescription(
        config.categories
          .map(
            cat =>
              `${cat.emoji || '📌'} **${cat.name}**\n${cat.description || 'No description'}\n*${cat._count.tickets} tickets*`
          )
          .join('\n\n')
      );

    await interaction.reply({ embeds: [embed], ephemeral: true });
  }

  /**
   * Remove a ticket category
   */
  private async removeCategory(interaction: Command.ChatInputCommandInteraction) {
    const name = interaction.options.getString('name', true);

    const config = await prisma.ticketConfig.findUnique({
      where: { guildId: interaction.guild!.id },
    });

    if (!config) {
      await interaction.reply({
        content: '❌ No ticket configuration found.',
        ephemeral: true,
      });
      return;
    }

    const category = await prisma.ticketCategory.findFirst({
      where: {
        configId: config.id,
        name: name,
      },
    });

    if (!category) {
      await interaction.reply({
        content: '❌ Category not found.',
        ephemeral: true,
      });
      return;
    }

    await prisma.ticketCategory.delete({
      where: { id: category.id },
    });

    await interaction.reply({
      content: `✅ Removed ticket category: **${name}**`,
      ephemeral: true,
    });
  }
}
