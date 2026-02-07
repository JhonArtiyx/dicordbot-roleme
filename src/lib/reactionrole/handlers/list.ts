import type { Command } from '@sapphire/framework';
import { EmbedBuilder, MessageFlags } from 'discord.js';
import { getPrismaClient } from '../../prisma';

const prisma = getPrismaClient();

/**
 * List all reaction roles
 */
export async function handleList(interaction: Command.ChatInputCommandInteraction) {
  if (!interaction.guild) {
    await interaction.reply({
      content: '❌ This command can only be used in a server.',
      flags: MessageFlags.Ephemeral,
    });
    return;
  }

  try {
    const reactionRoles = await prisma.reactionRole.findMany({
      where: { guildId: interaction.guild.id },
      orderBy: { messageId: 'asc' },
    });

    if (reactionRoles.length === 0) {
      await interaction.reply({
        content: '📋 No reaction roles configured. Use `/reactionrole create` to create a panel.',
        flags: MessageFlags.Ephemeral,
      });
      return;
    }

    // Group by message
    const byMessage = reactionRoles.reduce<Record<string, typeof reactionRoles>>((acc, rr) => {
      if (!acc[rr.messageId]) {
        acc[rr.messageId] = [];
      }
      acc[rr.messageId].push(rr);
      return acc;
    }, {});

    const messagesList = Object.entries(byMessage).map(([messageId, roles]) => {
      const rolesList = roles
        .map((rr: { emoji: string; roleId: string }) => {
          const role = interaction.guild!.roles.cache.get(rr.roleId);
          return `  ${rr.emoji} → ${role || `<@&${rr.roleId}>`}`;
        })
        .join('\n');

      const mode = roles[0].mode === 'SINGLE' ? '🔘 Single' : '☑️ Multiple';
      return `**Message:** \`${messageId}\` (${mode})\n${rolesList}`;
    });

    const listEmbed = new EmbedBuilder()
      .setColor('#0099ff')
      .setTitle('📋 Reaction Roles Configuration')
      .setDescription(messagesList.join('\n\n'))
      .setFooter({ text: `Total: ${reactionRoles.length} reaction role(s)` })
      .setTimestamp();

    await interaction.reply({ embeds: [listEmbed], flags: MessageFlags.Ephemeral });
  } catch (error) {
    console.error('Error listing reaction roles:', error);
    await interaction.reply({
      content: '❌ Failed to retrieve reaction roles. Please try again.',
      flags: MessageFlags.Ephemeral,
    });
  }
}
