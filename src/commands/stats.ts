import { Command } from '@sapphire/framework';
import { ChannelType, EmbedBuilder, MessageFlags, PermissionFlagsBits } from 'discord.js';
import { getPrismaClient } from '../lib/prisma';
import {
  ensureStatsChannels,
  scheduleStatsChannelUpdate,
  updateStatsChannels,
} from '../lib/stats/handlers/statsChannels';

const prisma = getPrismaClient();

/**
 * Server Statistics Command
 * Shows server stats and configured feature activity
 */
export class StatsCommand extends Command {
  public constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'stats',
      description: 'View server statistics and feature activity',
    });
  }

  public override registerApplicationCommands(registry: Command.Registry) {
    registry.registerChatInputCommand(builder =>
      builder
        .setName(this.name)
        .setDescription(this.description)
        .setDMPermission(false)
        .addSubcommandGroup(group =>
          group
            .setName('channels')
            .setDescription('Create or manage server stats channels')
            .addSubcommand(sub =>
              sub
                .setName('setup')
                .setDescription('Create stats channels (members, humans, bots, online)')
                .addChannelOption(option =>
                  option
                    .setName('category')
                    .setDescription('Category to place the stats channels')
                    .addChannelTypes(ChannelType.GuildCategory)
                    .setRequired(false)
                )
            )
            .addSubcommand(sub =>
              sub.setName('refresh').setDescription('Refresh stats channel names immediately')
            )
            .addSubcommand(sub =>
              sub.setName('remove').setDescription('Delete stats channels and remove configuration')
            )
        )
    );
  }

  public override async chatInputRun(interaction: Command.ChatInputCommandInteraction<'cached'>) {
    const guild = interaction.guild;

    if (!guild) {
      return void interaction.reply({
        content: '❌ This command can only be used in a server.',
        flags: MessageFlags.Ephemeral,
      });
    }

    const subcommandGroup = interaction.options.getSubcommandGroup(false);

    if (subcommandGroup === 'channels') {
      if (!interaction.member.permissions.has(PermissionFlagsBits.ManageChannels)) {
        return void interaction.reply({
          content: '❌ You need Manage Channels permission to use this command.',
          flags: MessageFlags.Ephemeral,
        });
      }

      const subcommand = interaction.options.getSubcommand(true);

      if (subcommand === 'setup') {
        return this.setupStatsChannels(interaction);
      }
      if (subcommand === 'refresh') {
        return this.refreshStatsChannels(interaction);
      }
      if (subcommand === 'remove') {
        return this.removeStatsChannels(interaction);
      }
    }

    await interaction.deferReply();

    try {
      const [owner, ticketCounts, levelStats, featureCounts] = await Promise.all([
        guild.fetchOwner(),
        this.getTicketStats(guild.id),
        this.getLevelStats(guild.id),
        this.getFeatureCounts(guild.id),
      ]);

      const channels = guild.channels.cache;
      const textChannels = channels.filter(
        c => c.type === ChannelType.GuildText || c.type === ChannelType.GuildAnnouncement
      ).size;
      const voiceChannels = channels.filter(
        c => c.type === ChannelType.GuildVoice || c.type === ChannelType.GuildStageVoice
      ).size;
      const categories = channels.filter(c => c.type === ChannelType.GuildCategory).size;
      const forums = channels.filter(c => c.type === ChannelType.GuildForum).size;
      const threads = channels.filter(
        c =>
          c.type === ChannelType.PublicThread ||
          c.type === ChannelType.PrivateThread ||
          c.type === ChannelType.AnnouncementThread
      ).size;

      const botCount = guild.members.cache.filter(m => m.user.bot).size;
      const humanCount = Math.max(0, guild.memberCount - botCount);

      const embed = new EmbedBuilder()
        .setTitle(`📊 ${guild.name} - Server Statistics`)
        .setThumbnail(guild.iconURL({ size: 256 }))
        .setColor(0x5865f2)
        .addFields(
          {
            name: '👥 Members',
            value: `Total: **${guild.memberCount.toLocaleString()}**\nHumans: **${humanCount.toLocaleString()}**\nBots (cached): **${botCount.toLocaleString()}**`,
            inline: true,
          },
          {
            name: '🧑‍💼 Owner',
            value: `${owner.user.tag}\nID: ${owner.id}`,
            inline: true,
          },
          {
            name: '📅 Created',
            value: `<t:${Math.floor(guild.createdTimestamp / 1000)}:F>`,
            inline: true,
          },
          {
            name: '🏷️ Channels',
            value:
              `Text: **${textChannels}**\n` +
              `Voice: **${voiceChannels}**\n` +
              `Categories: **${categories}**\n` +
              `Forums: **${forums}**\n` +
              `Threads: **${threads}**`,
            inline: true,
          },
          {
            name: '🎭 Roles',
            value: `Total: **${guild.roles.cache.size.toLocaleString()}**`,
            inline: true,
          },
          {
            name: '😊 Emojis & Stickers',
            value: `Emojis: **${guild.emojis.cache.size}**\nStickers: **${guild.stickers.cache.size}**`,
            inline: true,
          },
          {
            name: '🚀 Boosts',
            value: `Level: **${guild.premiumTier}**\nBoosts: **${guild.premiumSubscriptionCount || 0}**`,
            inline: true,
          },
          {
            name: '🎫 Tickets',
            value:
              `Total: **${ticketCounts.total}**\n` +
              `Open: **${ticketCounts.open}**\n` +
              `Claimed: **${ticketCounts.claimed}**\n` +
              `Closed: **${ticketCounts.closed}**`,
            inline: true,
          },
          {
            name: '📈 Levels',
            value:
              `Users: **${levelStats.totalUsers}**\n` +
              `Avg Level: **${levelStats.averageLevel}**\n` +
              `Avg XP: **${levelStats.averageXp}**\n` +
              `Active 7d: **${levelStats.activeUsers7Days}**`,
            inline: true,
          },
          {
            name: '⚙️ Features',
            value:
              `AutoRoles: **${featureCounts.autoroles}**\n` +
              `ReactionRoles: **${featureCounts.reactionroles}**\n` +
              `Verification: **${featureCounts.verificationEnabled ? 'Enabled' : 'Disabled'}**\n` +
              `Tickets: **${featureCounts.ticketsEnabled ? 'Enabled' : 'Disabled'}**\n` +
              `Levels: **${featureCounts.levelsEnabled ? 'Enabled' : 'Disabled'}**`,
            inline: true,
          }
        )
        .setFooter({ text: `Server ID: ${guild.id}` })
        .setTimestamp();

      await interaction.editReply({ embeds: [embed] });
    } catch (error) {
      console.error('Error fetching server stats:', error);
      await interaction.editReply({
        content: '❌ Failed to fetch server statistics.',
      });
    }
  }

  private async setupStatsChannels(interaction: Command.ChatInputCommandInteraction<'cached'>) {
    const category = interaction.options.getChannel('category');

    await interaction.deferReply({ flags: MessageFlags.Ephemeral });

    try {
      await ensureStatsChannels(interaction.guild!, category?.id || null);
      scheduleStatsChannelUpdate(interaction.guild!);

      await interaction.editReply({
        content: '✅ Stats channels created and configured successfully.',
      });
    } catch (error) {
      console.error('Error setting up stats channels:', error);
      await interaction.editReply({
        content: '❌ Failed to create stats channels. Check my permissions and try again.',
      });
    }
  }

  private async refreshStatsChannels(interaction: Command.ChatInputCommandInteraction<'cached'>) {
    await interaction.deferReply({ flags: MessageFlags.Ephemeral });

    try {
      await updateStatsChannels(interaction.guild!);
      await interaction.editReply({ content: '✅ Stats channels refreshed.' });
    } catch (error) {
      console.error('Error refreshing stats channels:', error);
      await interaction.editReply({ content: '❌ Failed to refresh stats channels.' });
    }
  }

  private async removeStatsChannels(interaction: Command.ChatInputCommandInteraction<'cached'>) {
    await interaction.deferReply({ flags: MessageFlags.Ephemeral });

    try {
      const config = await prisma.statsChannelConfig.findUnique({
        where: { guildId: interaction.guildId! },
      });

      if (!config) {
        return void interaction.editReply({ content: 'ℹ️ No stats channels configured.' });
      }

      const channelIds = [
        config.totalMembersChannelId,
        config.humanMembersChannelId,
        config.botMembersChannelId,
        config.onlineMembersChannelId,
      ].filter(Boolean) as string[];

      for (const channelId of channelIds) {
        const channel = interaction.guild!.channels.cache.get(channelId);
        if (channel) {
          try {
            await channel.delete();
          } catch (error) {
            console.error('Failed to delete stats channel:', error);
          }
        }
      }

      await prisma.statsChannelConfig.delete({
        where: { guildId: interaction.guildId! },
      });

      await interaction.editReply({ content: '✅ Stats channels removed.' });
    } catch (error) {
      console.error('Error removing stats channels:', error);
      await interaction.editReply({ content: '❌ Failed to remove stats channels.' });
    }
  }

  private async getTicketStats(guildId: string) {
    const [total, open, claimed, closed] = await Promise.all([
      prisma.ticket.count({ where: { guildId } }),
      prisma.ticket.count({ where: { guildId, status: 'OPEN' } }),
      prisma.ticket.count({ where: { guildId, status: 'CLAIMED' } }),
      prisma.ticket.count({ where: { guildId, status: 'CLOSED' } }),
    ]);

    return { total, open, claimed, closed };
  }

  private async getLevelStats(guildId: string) {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const [totalUsers, avgLevel, avgXp, activeUsers7Days] = await Promise.all([
      prisma.userLevel.count({ where: { guildId } }),
      prisma.userLevel.aggregate({ where: { guildId }, _avg: { level: true } }),
      prisma.userLevel.aggregate({ where: { guildId }, _avg: { xp: true } }),
      prisma.userLevel.count({
        where: {
          guildId,
          lastMessageAt: { gte: sevenDaysAgo },
        },
      }),
    ]);

    return {
      totalUsers,
      activeUsers7Days,
      averageLevel: Math.round((avgLevel._avg.level || 0) * 100) / 100,
      averageXp: Math.round((avgXp._avg.xp || 0) * 100) / 100,
    };
  }

  private async getFeatureCounts(guildId: string) {
    const [autoroles, reactionroles, verification, tickets, levels] = await Promise.all([
      prisma.autoRole.count({ where: { guildId } }),
      prisma.reactionRole.count({ where: { guildId } }),
      prisma.verificationConfig.findUnique({ where: { guildId } }),
      prisma.ticketConfig.findUnique({ where: { guildId } }),
      prisma.levelConfig.findUnique({ where: { guildId } }),
    ]);

    return {
      autoroles,
      reactionroles,
      verificationEnabled: !!verification,
      ticketsEnabled: !!tickets,
      levelsEnabled: !!levels,
    };
  }
}
