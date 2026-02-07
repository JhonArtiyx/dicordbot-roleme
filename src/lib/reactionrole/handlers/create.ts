import type { Command } from '@sapphire/framework';
import { EmbedBuilder, MessageFlags, type TextChannel, type Message } from 'discord.js';
import type { RoleMode } from '../types';

/**
 * Create a new reaction role panel
 */
export async function handleCreate(interaction: Command.ChatInputCommandInteraction) {
  const title = interaction.options.getString('title', true);
  const description = interaction.options.getString('description', true);
  const mode = interaction.options.getString('mode', true) as RoleMode;

  if (!interaction.guild || !interaction.channel) {
    await interaction.reply({
      content: '❌ This command can only be used in a server channel.',
      flags: MessageFlags.Ephemeral,
    });
    return;
  }

  try {
    // Create embed for reaction role panel
    const panelEmbed = new EmbedBuilder()
      .setColor('#0099ff')
      .setTitle(title)
      .setDescription(
        `${description}\n\n` +
          `**Mode:** ${mode === 'SINGLE' ? '🔘 Single Role' : '☑️ Multiple Roles'}\n\n` +
          `React with the emojis below to get your roles!\n` +
          `*Remove your reaction to remove the role.*`
      )
      .setFooter({
        text:
          mode === 'SINGLE'
            ? 'You can only have one role from this panel'
            : 'You can have multiple roles from this panel',
      })
      .setTimestamp();

    if (!interaction.channel.isTextBased()) {
      await interaction.reply({
        content: '❌ This command can only be used in text channels.',
        flags: MessageFlags.Ephemeral,
      });
      return;
    }

    const message: Message = await (interaction.channel as TextChannel).send({
      embeds: [panelEmbed],
    });

    const successEmbed = new EmbedBuilder()
      .setColor('#00ff00')
      .setTitle('✅ Reaction Role Panel Created')
      .setDescription(
        `Panel created successfully!\n\n` +
          `**Message ID:** \`${message.id}\`\n\n` +
          `Use \`/reactionrole add message_id:${message.id}\` to add reaction roles to this panel.`
      )
      .setTimestamp();

    await interaction.reply({ embeds: [successEmbed], flags: MessageFlags.Ephemeral });
  } catch (error) {
    console.error('Error creating reaction role panel:', error);
    await interaction.reply({
      content: '❌ Failed to create reaction role panel. Please try again.',
      flags: MessageFlags.Ephemeral,
    });
  }
}
