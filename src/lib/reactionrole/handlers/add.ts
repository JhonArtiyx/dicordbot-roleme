import type { Command } from '@sapphire/framework';
import { EmbedBuilder, MessageFlags } from 'discord.js';
import { getPrismaClient } from '../../prisma';
import { processEmoji } from '../utils/processEmoji';
import type { RoleMode } from '../types';

const prisma = getPrismaClient();

/**
 * Add a reaction role to an existing message
 */
export async function handleAdd(interaction: Command.ChatInputCommandInteraction) {
  const messageId = interaction.options.getString('message_id', true);
  const emoji = interaction.options.getString('emoji', true);
  const role = interaction.options.getRole('role', true);
  const description = interaction.options.getString('description');

  if (!interaction.guild || !interaction.channel) {
    await interaction.reply({
      content: '❌ This command can only be used in a server channel.',
      flags: MessageFlags.Ephemeral,
    });
    return;
  }

  // Defer reply immediately to prevent timeout (we have 3 seconds to respond)
  await interaction.deferReply({ flags: MessageFlags.Ephemeral });

  try {
    // Check if message exists
    if (!interaction.channel.isTextBased()) {
      await interaction.editReply({
        content: '❌ This command can only be used in text channels.',
      });
      return;
    }

    let message;
    try {
      message = await interaction.channel.messages.fetch(messageId);
    } catch (fetchError: unknown) {
      // Handle Discord API errors
      if (fetchError instanceof Error && 'code' in fetchError && fetchError.code === 10008) {
        // Unknown Message
        await interaction.editReply({
          content: `❌ **Message not found!**\n\nThe message with ID \`${messageId}\` does not exist in this channel.\n\n**Steps to fix:**\n1. Run \`/reactionrole create\` to create a new reaction role panel in this channel\n2. Copy the message ID from the success message\n3. Use that ID with \`/reactionrole add\``,
        });
        return;
      }
      if (fetchError instanceof Error && 'code' in fetchError && fetchError.code === 50001) {
        // Missing Access
        await interaction.editReply({
          content:
            '❌ I do not have permission to access that message. Make sure the message is in this channel and I have permission to read it.',
        });
        return;
      }
      throw fetchError;
    }

    if (!message) {
      await interaction.editReply({
        content: '❌ Message not found. Make sure the message is in this channel.',
      });
      return;
    }

    // Process emoji to handle different formats
    const processedEmoji = processEmoji(emoji, interaction.guild);

    if (!processedEmoji) {
      await interaction.editReply({
        content:
          '❌ Invalid emoji format. Use:\n' +
          '• Unicode emoji: 🇲🇽\n' +
          '• Custom emoji: <:name:id>\n' +
          '• Custom emoji ID only: 123456789\n\n' +
          "ℹ️ For flag emojis, copy the emoji directly. Don't use :flag_mx: format.",
      });
      return;
    }

    // Add reaction to message
    await message.react(processedEmoji);

    // Get the mode from existing reaction roles or default to MULTIPLE
    const existingRoles = await prisma.reactionRole.findMany({
      where: { messageId },
      take: 1,
    });

    const mode: RoleMode = existingRoles.length > 0 ? existingRoles[0].mode : 'MULTIPLE';

    // Check if reaction role already exists
    const existing = await prisma.reactionRole.findUnique({
      where: {
        messageId_emoji: {
          messageId,
          emoji: processedEmoji,
        },
      },
    });

    if (existing) {
      await interaction.editReply({
        content: `❌ A reaction role with emoji ${processedEmoji} already exists for this message.`,
      });
      return;
    }

    // Create reaction role
    await prisma.reactionRole.create({
      data: {
        guildId: interaction.guild.id,
        channelId: interaction.channel.id,
        messageId,
        emoji: processedEmoji,
        roleId: role.id,
        mode,
        description: description || null,
      },
    });

    // Update message embed to include the new role (optional - only if bot can edit)
    const embed = message.embeds[0];
    let embedException = null;
    if (embed) {
      try {
        const currentDescription = embed.description || '';
        const rolesSection = currentDescription.includes('**Roles:**')
          ? currentDescription
          : currentDescription + '\n\n**Roles:**';

        const newDescription =
          rolesSection + `\n${processedEmoji} → ${role}${description ? ` - ${description}` : ''}`;

        const updatedEmbed = EmbedBuilder.from(embed).setDescription(newDescription);
        await message.edit({ embeds: [updatedEmbed] });
      } catch (editError: unknown) {
        // eslint-disable-next-line no-console
        console.log(
          'Could not edit message embed (not authored by bot):',
          editError instanceof Error && 'code' in editError ? editError.code : editError
        );
        embedException = editError;
        // Continue anyway - the reaction role still works
      }
    }

    const successDescription =
      `Reaction role added successfully!\n\n` +
      `**Emoji:** ${processedEmoji}\n` +
      `**Role:** ${role}\n` +
      `**Mode:** ${mode === 'SINGLE' ? '🔘 Single' : '☑️ Multiple'}`;

    const successEmbed = new EmbedBuilder()
      .setColor('#00ff00')
      .setTitle('✅ Reaction Role Added')
      .setDescription(
        embedException
          ? successDescription +
              `\n\n⚠️ *Note: I couldn't update the original message embed (it wasn't authored by me), but the reaction role is set up and working!*`
          : successDescription
      )
      .setTimestamp();

    await interaction.editReply({ embeds: [successEmbed] });
  } catch (error: unknown) {
    // eslint-disable-next-line no-console
    console.error('Error adding reaction role:', error);

    // Handle specific errors
    if (error instanceof Error && 'code' in error && error.code === 10008) {
      await interaction.editReply({
        content: `❌ **Message not found!** The message with that ID does not exist or has been deleted.`,
      });
    } else if (error instanceof Error && 'code' in error && error.code === 50005) {
      await interaction.editReply({
        content:
          '❌ **Cannot edit message!**\n\n' +
          'This message was not created by me, so I cannot add the reaction.\n\n' +
          '**Solution:** Use `/reactionrole create` to create a new panel in this channel, then add the reaction.',
      });
    } else if (
      error instanceof Error &&
      'message' in error &&
      typeof error.message === 'string' &&
      error.message.includes('Invalid Form Body')
    ) {
      await interaction.editReply({
        content: "❌ The emoji format is invalid. Make sure you're using a valid emoji.",
      });
    } else {
      await interaction.editReply({
        content:
          '❌ Failed to add reaction role. Make sure:\n' +
          '• The message ID is correct and in this channel\n' +
          '• The emoji is valid\n' +
          '• The role exists',
      });
    }
  }
}
