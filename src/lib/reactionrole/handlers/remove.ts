import type { Command } from '@sapphire/framework';
import { EmbedBuilder, MessageFlags } from 'discord.js';
import { getPrismaClient } from '../../prisma';
import { processEmoji } from '../utils/processEmoji';

const prisma = getPrismaClient();

/**
 * Remove a reaction role from a message
 */
export async function handleRemove(interaction: Command.ChatInputCommandInteraction) {
  const messageId = interaction.options.getString('message_id', true);
  const emoji = interaction.options.getString('emoji', true);

  if (!interaction.guild || !interaction.channel) {
    await interaction.reply({
      content: '❌ This command can only be used in a server channel.',
      flags: MessageFlags.Ephemeral,
    });
    return;
  }

  try {
    // Process emoji to handle different formats
    const processedEmoji = processEmoji(emoji, interaction.guild);

    if (!processedEmoji) {
      await interaction.reply({
        content:
          '❌ Invalid emoji format. Use:\n' +
          '• Unicode emoji: 🇲🇽\n' +
          '• Custom emoji: <:name:id>\n' +
          '• Custom emoji ID only: 123456789\n\n' +
          "ℹ️ For flag emojis, copy the emoji directly. Don't use :flag_mx: format.",
        flags: MessageFlags.Ephemeral,
      });
      return;
    }

    const deleted = await prisma.reactionRole.delete({
      where: {
        messageId_emoji: {
          messageId,
          emoji: processedEmoji,
        },
      },
    });

    if (!deleted) {
      await interaction.reply({
        content: '❌ Reaction role not found for this message and emoji.',
        flags: MessageFlags.Ephemeral,
      });
      return;
    }

    // Try to remove reaction from message
    try {
      if (!interaction.channel.isTextBased()) {
        await interaction.reply({
          content: '❌ This command can only be used in text channels.',
          flags: MessageFlags.Ephemeral,
        });
        return;
      }

      const message = await interaction.channel.messages.fetch(messageId);
      const reaction = message.reactions.cache.find(
        r => r.emoji.name === processedEmoji || r.emoji.id === processedEmoji
      );
      if (reaction) {
        await reaction.remove();
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('Could not remove reaction from message:', error);
    }

    const successEmbed = new EmbedBuilder()
      .setColor('#00ff00')
      .setTitle('✅ Reaction Role Removed')
      .setDescription(
        `Reaction role with emoji ${processedEmoji} has been removed from the message.`
      )
      .setTimestamp();

    await interaction.reply({ embeds: [successEmbed], flags: MessageFlags.Ephemeral });
  } catch (error) {
    console.error('Error removing reaction role:', error);
    await interaction.reply({
      content: '❌ Failed to remove reaction role. Please try again.',
      flags: MessageFlags.Ephemeral,
    });
  }
}
