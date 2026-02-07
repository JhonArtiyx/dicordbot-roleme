import type { Command } from '@sapphire/framework';
import { EmbedBuilder, MessageFlags } from 'discord.js';
import { getPrismaClient } from '../../prisma';
import type { RoleMode } from '../types';

const prisma = getPrismaClient();

/**
 * Change the mode of a reaction role message
 */
export async function handleMode(interaction: Command.ChatInputCommandInteraction) {
  const messageId = interaction.options.getString('message_id', true);
  const newMode = interaction.options.getString('mode', true) as RoleMode;

  if (!interaction.guild) {
    await interaction.reply({
      content: '❌ This command can only be used in a server.',
      flags: MessageFlags.Ephemeral,
    });
    return;
  }

  try {
    // Update all reaction roles for this message
    const updated = await prisma.reactionRole.updateMany({
      where: { messageId },
      data: { mode: newMode },
    });

    if (updated.count === 0) {
      await interaction.reply({
        content: '❌ No reaction roles found for this message.',
        flags: MessageFlags.Ephemeral,
      });
      return;
    }

    const successEmbed = new EmbedBuilder()
      .setColor('#00ff00')
      .setTitle('✅ Mode Updated')
      .setDescription(
        `Reaction role mode changed to **${newMode === 'SINGLE' ? 'Single' : 'Multiple'}** for message \`${messageId}\`.\n\n` +
          `${newMode === 'SINGLE' ? 'Users can now only have one role from this message.' : 'Users can now have multiple roles from this message.'}`
      )
      .setTimestamp();

    await interaction.reply({ embeds: [successEmbed], flags: MessageFlags.Ephemeral });
  } catch (error) {
    console.error('Error changing mode:', error);
    await interaction.reply({
      content: '❌ Failed to change mode. Please try again.',
      flags: MessageFlags.Ephemeral,
    });
  }
}
