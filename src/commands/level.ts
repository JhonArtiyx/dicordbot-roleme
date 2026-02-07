import { Command } from '@sapphire/framework';
import { ChannelType, EmbedBuilder, PermissionFlagsBits, MessageFlags } from 'discord.js';
import { getPrismaClient } from '../lib/prisma';
import {
  calculateLevel,
  calculateXpForLevel,
  calculateXpToNextLevel,
  calculateLevelProgress,
  formatXp,
  getLevelColor,
  generateProgressBar,
} from '../lib/level/helpers/levelCalculator';

const prisma = getPrismaClient();

/**
 * Level System Command
 * Commands for viewing and managing the leveling system
 */
export class LevelCommand extends Command {
  public constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'level',
      description: 'View and manage the server leveling system',
    });
  }

  public override registerApplicationCommands(registry: Command.Registry) {
    registry.registerChatInputCommand(
      builder =>
        builder
          .setName(this.name)
          .setDescription(this.description)
          .setDMPermission(false)
          .addSubcommand(sub =>
            sub
              .setName('view')
              .setDescription('View level information for a user')
              .addUserOption(option =>
                option
                  .setName('user')
                  .setDescription('The user to view (leave empty for yourself)')
                  .setRequired(false)
              )
          )
          .addSubcommand(sub =>
            sub.setName('leaderboard').setDescription('View the server leaderboard')
          )
          .addSubcommandGroup(group =>
            group
              .setName('config')
              .setDescription('Configure the leveling system (Admin only)')
              .addSubcommand(sub =>
                sub.setName('view').setDescription('View current leveling configuration')
              )
              .addSubcommand(sub =>
                sub
                  .setName('toggle')
                  .setDescription('Enable or disable the leveling system')
                  .addBooleanOption(option =>
                    option
                      .setName('enabled')
                      .setDescription('Enable or disable leveling')
                      .setRequired(true)
                  )
              )
              .addSubcommand(sub =>
                sub
                  .setName('xp')
                  .setDescription('Configure XP gain settings')
                  .addIntegerOption(option =>
                    option
                      .setName('min')
                      .setDescription('Minimum XP per message (1-100)')
                      .setMinValue(1)
                      .setMaxValue(100)
                      .setRequired(true)
                  )
                  .addIntegerOption(option =>
                    option
                      .setName('max')
                      .setDescription('Maximum XP per message (1-100)')
                      .setMinValue(1)
                      .setMaxValue(100)
                      .setRequired(true)
                  )
                  .addIntegerOption(option =>
                    option
                      .setName('cooldown')
                      .setDescription('Cooldown between XP gains in seconds (0-300)')
                      .setMinValue(0)
                      .setMaxValue(300)
                      .setRequired(false)
                  )
              )
              .addSubcommand(sub =>
                sub
                  .setName('channel')
                  .setDescription('Set the level up announcement channel')
                  .addChannelOption(option =>
                    option
                      .setName('channel')
                      .setDescription(
                        'The channel for level up messages (leave empty to announce in same channel)'
                      )
                      .addChannelTypes(ChannelType.GuildText, ChannelType.GuildAnnouncement)
                      .setRequired(false)
                  )
              )
              .addSubcommand(sub =>
                sub
                  .setName('message')
                  .setDescription('Set the level up message')
                  .addStringOption(option =>
                    option
                      .setName('message')
                      .setDescription(
                        'The message to send. Use {user}, {level}, {xp} as placeholders'
                      )
                      .setMaxLength(500)
                      .setRequired(true)
                  )
              )
              .addSubcommand(sub =>
                sub
                  .setName('ignore')
                  .setDescription('Add/remove ignored channels or roles')
                  .addStringOption(option =>
                    option
                      .setName('action')
                      .setDescription('Action to perform')
                      .addChoices(
                        { name: 'Add Channel', value: 'add_channel' },
                        { name: 'Remove Channel', value: 'remove_channel' },
                        { name: 'Add Role', value: 'add_role' },
                        { name: 'Remove Role', value: 'remove_role' },
                        { name: 'List', value: 'list' }
                      )
                      .setRequired(true)
                  )
                  .addChannelOption(option =>
                    option
                      .setName('channel')
                      .setDescription('The channel to add/remove')
                      .setRequired(false)
                  )
                  .addRoleOption(option =>
                    option
                      .setName('role')
                      .setDescription('The role to add/remove')
                      .setRequired(false)
                  )
              )
              .addSubcommand(sub =>
                sub
                  .setName('roles')
                  .setDescription('Configure role stacking behavior')
                  .addBooleanOption(option =>
                    option
                      .setName('stack')
                      .setDescription('Keep previous level roles when advancing')
                      .setRequired(true)
                  )
              )
              .addSubcommand(sub =>
                sub
                  .setName('dm')
                  .setDescription('Configure DM announcements')
                  .addBooleanOption(option =>
                    option
                      .setName('enabled')
                      .setDescription('Send level up messages in DM')
                      .setRequired(true)
                  )
              )
          )
          .addSubcommandGroup(group =>
            group
              .setName('reward')
              .setDescription('Manage level rewards (Admin only)')
              .addSubcommand(sub =>
                sub
                  .setName('add')
                  .setDescription('Add a role reward for reaching a level')
                  .addIntegerOption(option =>
                    option
                      .setName('level')
                      .setDescription('The level to unlock this reward')
                      .setMinValue(1)
                      .setMaxValue(1000)
                      .setRequired(true)
                  )
                  .addRoleOption(option =>
                    option.setName('role').setDescription('The role to give').setRequired(true)
                  )
              )
              .addSubcommand(sub => sub.setName('list').setDescription('List all level rewards'))
              .addSubcommand(sub =>
                sub
                  .setName('remove')
                  .setDescription('Remove a level reward')
                  .addIntegerOption(option =>
                    option
                      .setName('level')
                      .setDescription('The level of the reward to remove')
                      .setMinValue(1)
                      .setMaxValue(1000)
                      .setRequired(true)
                  )
                  .addRoleOption(option =>
                    option.setName('role').setDescription('The role to remove').setRequired(true)
                  )
              )
          )
          .addSubcommandGroup(group =>
            group
              .setName('admin')
              .setDescription('Admin level management commands')
              .addSubcommand(sub =>
                sub
                  .setName('set')
                  .setDescription("Set a user's level or XP")
                  .addUserOption(option =>
                    option.setName('user').setDescription('The user to modify').setRequired(true)
                  )
                  .addStringOption(option =>
                    option
                      .setName('type')
                      .setDescription('What to set')
                      .addChoices({ name: 'Level', value: 'level' }, { name: 'XP', value: 'xp' })
                      .setRequired(true)
                  )
                  .addIntegerOption(option =>
                    option
                      .setName('value')
                      .setDescription('The value to set')
                      .setMinValue(0)
                      .setRequired(true)
                  )
                  .addStringOption(option =>
                    option
                      .setName('action')
                      .setDescription('How to apply the value')
                      .addChoices(
                        { name: 'Set', value: 'set' },
                        { name: 'Add', value: 'add' },
                        { name: 'Remove', value: 'remove' }
                      )
                      .setRequired(false)
                  )
              )
              .addSubcommand(sub =>
                sub
                  .setName('reset')
                  .setDescription('Reset level data')
                  .addUserOption(option =>
                    option
                      .setName('user')
                      .setDescription('The user to reset (leave empty to reset ALL users)')
                      .setRequired(false)
                  )
              )
          ),
      {
        idHints: [],
      }
    );
  }

  public override async chatInputRun(interaction: Command.ChatInputCommandInteraction<'cached'>) {
    const subcommandGroup = interaction.options.getSubcommandGroup(false);
    const subcommand = interaction.options.getSubcommand(true);

    if (!subcommandGroup) {
      // Top-level subcommands
      if (subcommand === 'view') {
        return this.viewLevel(interaction);
      } else if (subcommand === 'leaderboard') {
        return this.viewLeaderboard(interaction);
      }
    } else if (subcommandGroup === 'config') {
      // Check admin permissions
      if (!interaction.member.permissions.has(PermissionFlagsBits.Administrator)) {
        return interaction.reply({
          content: '❌ You need Administrator permission to use this command.',
          flags: MessageFlags.Ephemeral,
        });
      }

      if (subcommand === 'view') return this.configView(interaction);
      else if (subcommand === 'toggle') return this.configToggle(interaction);
      else if (subcommand === 'xp') return this.configXp(interaction);
      else if (subcommand === 'channel') return this.configChannel(interaction);
      else if (subcommand === 'message') return this.configMessage(interaction);
      else if (subcommand === 'ignore') return this.configIgnore(interaction);
      else if (subcommand === 'roles') return this.configRoles(interaction);
      else if (subcommand === 'dm') return this.configDm(interaction);
    } else if (subcommandGroup === 'reward') {
      // Check admin permissions
      if (!interaction.member.permissions.has(PermissionFlagsBits.Administrator)) {
        return interaction.reply({
          content: '❌ You need Administrator permission to use this command.',
          flags: MessageFlags.Ephemeral,
        });
      }

      if (subcommand === 'add') return this.rewardAdd(interaction);
      else if (subcommand === 'list') return this.rewardList(interaction);
      else if (subcommand === 'remove') return this.rewardRemove(interaction);
    } else if (subcommandGroup === 'admin') {
      // Check admin permissions
      if (!interaction.member.permissions.has(PermissionFlagsBits.Administrator)) {
        return interaction.reply({
          content: '❌ You need Administrator permission to use this command.',
          flags: MessageFlags.Ephemeral,
        });
      }

      if (subcommand === 'set') return this.adminSet(interaction);
      else if (subcommand === 'reset') return this.adminReset(interaction);
    }

    return interaction.reply({
      content: '❌ Unknown subcommand.',
      flags: MessageFlags.Ephemeral,
    });
  }

  // ==================== VIEW LEVEL ====================

  private async viewLevel(interaction: Command.ChatInputCommandInteraction<'cached'>) {
    const targetUser = interaction.options.getUser('user') || interaction.user;
    const guildId = interaction.guildId!;

    try {
      const userLevel = await prisma.userLevel.findUnique({
        where: {
          guildId_userId: {
            guildId,
            userId: targetUser.id,
          },
        },
      });

      if (!userLevel) {
        const embed = new EmbedBuilder()
          .setTitle('📊 Level Information')
          .setDescription(
            `${targetUser} hasn't earned any XP yet!${
              targetUser.id === interaction.user.id
                ? '\n\nStart chatting to gain XP and level up!'
                : ''
            }`
          )
          .setColor(0x95a5a6)
          .setThumbnail(targetUser.displayAvatarURL({ size: 128 }))
          .setTimestamp();

        return void interaction.reply({ embeds: [embed] });
      }

      // Get user's rank
      const rank = await prisma.userLevel.count({
        where: {
          guildId,
          OR: [
            { level: { gt: userLevel.level } },
            {
              level: userLevel.level,
              xp: { gt: userLevel.xp },
            },
          ],
        },
      });

      const xpForNext = calculateXpToNextLevel(userLevel.xp);
      const progress = calculateLevelProgress(userLevel.xp);
      const progressBar = generateProgressBar(progress);

      const embed = new EmbedBuilder()
        .setTitle(`📊 ${targetUser.username}'s Level`)
        .setThumbnail(targetUser.displayAvatarURL({ size: 128 }))
        .setColor(getLevelColor(userLevel.level))
        .addFields(
          { name: '📈 Level', value: `**${userLevel.level}**`, inline: true },
          { name: '⭐ XP', value: `**${formatXp(userLevel.xp)}**`, inline: true },
          { name: '🏆 Rank', value: `**#${rank + 1}**`, inline: true },
          {
            name: '💬 Messages',
            value: `**${formatXp(userLevel.totalMessages)}**`,
            inline: true,
          },
          {
            name: '⬆️ Next Level',
            value: `**${formatXp(xpForNext)} XP** needed`,
            inline: true,
          },
          {
            name: '📊 Progress',
            value: `${progressBar} **${progress.toFixed(1)}%**`,
            inline: false,
          }
        )
        .setTimestamp();

      await interaction.reply({ embeds: [embed] });
    } catch (error) {
      console.error('Error viewing level:', error);
      await interaction.reply({
        content: '❌ Failed to fetch level information.',
        flags: MessageFlags.Ephemeral,
      });
    }
  }

  // ==================== LEADERBOARD ====================

  private async viewLeaderboard(interaction: Command.ChatInputCommandInteraction<'cached'>) {
    const guildId = interaction.guildId!;

    try {
      const topUsers = await prisma.userLevel.findMany({
        where: { guildId },
        orderBy: [{ level: 'desc' }, { xp: 'desc' }],
        take: 10,
      });

      if (topUsers.length === 0) {
        return void interaction.reply({
          content:
            '📊 No one has earned XP yet! Start chatting to be the first on the leaderboard!',
          flags: MessageFlags.Ephemeral,
        });
      }

      const leaderboardText = topUsers
        .map((user, index) => {
          const medal =
            index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `${index + 1}.`;
          return `${medal} <@${user.userId}> - **Level ${user.level}** (${formatXp(user.xp)} XP)`;
        })
        .join('\n');

      const embed = new EmbedBuilder()
        .setTitle('🏆 Server Leaderboard')
        .setDescription(leaderboardText)
        .setColor(0xf1c40f)
        .setFooter({ text: `${topUsers.length} users ranked` })
        .setTimestamp();

      await interaction.reply({ embeds: [embed] });
    } catch (error) {
      console.error('Error viewing leaderboard:', error);
      await interaction.reply({
        content: '❌ Failed to fetch leaderboard.',
        flags: MessageFlags.Ephemeral,
      });
    }
  }

  // ==================== CONFIG COMMANDS ====================

  private async getOrCreateConfig(guildId: string) {
    let config = await prisma.levelConfig.findUnique({
      where: { guildId },
      include: { rewards: true },
    });

    if (!config) {
      config = await prisma.levelConfig.create({
        data: { guildId },
        include: { rewards: true },
      });
    }

    return config;
  }

  private async configView(interaction: Command.ChatInputCommandInteraction<'cached'>) {
    try {
      const config = await this.getOrCreateConfig(interaction.guildId!);

      const embed = new EmbedBuilder()
        .setTitle('⚙️ Leveling Configuration')
        .setColor(config.enabled ? 0x2ecc71 : 0xe74c3c)
        .addFields(
          {
            name: 'Status',
            value: config.enabled ? '✅ Enabled' : '❌ Disabled',
            inline: true,
          },
          {
            name: 'XP Range',
            value: `${config.xpMin}-${config.xpMax} per message`,
            inline: true,
          },
          {
            name: 'Cooldown',
            value: `${config.xpCooldown / 1000}s`,
            inline: true,
          },
          {
            name: 'Level Up Channel',
            value: config.levelUpChannelId ? `<#${config.levelUpChannelId}>` : 'Same channel',
            inline: true,
          },
          {
            name: 'Stack Roles',
            value: config.stackRoles ? 'Yes' : 'No',
            inline: true,
          },
          {
            name: 'DM Announcements',
            value: config.announceInDm ? 'Yes' : 'No',
            inline: true,
          },
          {
            name: 'Level Up Message',
            value: `\`${config.levelUpMessage}\``,
            inline: false,
          },
          {
            name: 'Ignored Channels',
            value:
              config.ignoredChannelIds.length > 0
                ? config.ignoredChannelIds.map(id => `<#${id}>`).join(', ')
                : 'None',
            inline: false,
          },
          {
            name: 'Ignored Roles',
            value:
              config.ignoredRoleIds.length > 0
                ? config.ignoredRoleIds.map(id => `<@&${id}>`).join(', ')
                : 'None',
            inline: false,
          },
          {
            name: 'Rewards',
            value: config.rewards.length > 0 ? `${config.rewards.length} configured` : 'None',
            inline: false,
          }
        )
        .setTimestamp();

      await interaction.reply({ embeds: [embed], flags: MessageFlags.Ephemeral });
    } catch (error) {
      console.error('Error viewing config:', error);
      await interaction.reply({
        content: '❌ Failed to fetch configuration.',
        flags: MessageFlags.Ephemeral,
      });
    }
  }

  private async configToggle(interaction: Command.ChatInputCommandInteraction<'cached'>) {
    const enabled = interaction.options.getBoolean('enabled', true);

    try {
      const config = await this.getOrCreateConfig(interaction.guildId!);

      await prisma.levelConfig.update({
        where: { id: config.id },
        data: { enabled },
      });

      const embed = new EmbedBuilder()
        .setTitle('✅ Configuration Updated')
        .setDescription(`Leveling system has been **${enabled ? 'enabled' : 'disabled'}**.`)
        .setColor(enabled ? 0x2ecc71 : 0xe74c3c)
        .setTimestamp();

      await interaction.reply({ embeds: [embed], flags: MessageFlags.Ephemeral });
    } catch (error) {
      console.error('Error toggling system:', error);
      await interaction.reply({
        content: '❌ Failed to update configuration.',
        flags: MessageFlags.Ephemeral,
      });
    }
  }

  private async configXp(interaction: Command.ChatInputCommandInteraction<'cached'>) {
    const min = interaction.options.getInteger('min', true);
    const max = interaction.options.getInteger('max', true);
    const cooldown = interaction.options.getInteger('cooldown') || undefined;

    if (min > max) {
      return void interaction.reply({
        content: '❌ Minimum XP cannot be greater than maximum XP.',
        flags: MessageFlags.Ephemeral,
      });
    }

    try {
      const config = await this.getOrCreateConfig(interaction.guildId!);

      await prisma.levelConfig.update({
        where: { id: config.id },
        data: {
          xpMin: min,
          xpMax: max,
          ...(cooldown !== undefined && { xpCooldown: cooldown * 1000 }),
        },
      });

      const embed = new EmbedBuilder()
        .setTitle('✅ XP Settings Updated')
        .setDescription(
          `**XP Range:** ${min}-${max} per message\n` +
            (cooldown !== undefined ? `**Cooldown:** ${cooldown} seconds` : '')
        )
        .setColor(0x2ecc71)
        .setTimestamp();

      await interaction.reply({ embeds: [embed], flags: MessageFlags.Ephemeral });
    } catch (error) {
      console.error('Error updating XP settings:', error);
      await interaction.reply({
        content: '❌ Failed to update XP settings.',
        flags: MessageFlags.Ephemeral,
      });
    }
  }

  private async configChannel(interaction: Command.ChatInputCommandInteraction<'cached'>) {
    const channel = interaction.options.getChannel('channel');

    try {
      const config = await this.getOrCreateConfig(interaction.guildId!);

      await prisma.levelConfig.update({
        where: { id: config.id },
        data: { levelUpChannelId: channel?.id || null },
      });

      const embed = new EmbedBuilder()
        .setTitle('✅ Level Up Channel Updated')
        .setDescription(
          channel
            ? `Level up messages will now be sent to ${channel}.`
            : 'Level up messages will be sent in the same channel as the user.'
        )
        .setColor(0x2ecc71)
        .setTimestamp();

      await interaction.reply({ embeds: [embed], flags: MessageFlags.Ephemeral });
    } catch (error) {
      console.error('Error updating channel:', error);
      await interaction.reply({
        content: '❌ Failed to update level up channel.',
        flags: MessageFlags.Ephemeral,
      });
    }
  }

  private async configMessage(interaction: Command.ChatInputCommandInteraction<'cached'>) {
    const message = interaction.options.getString('message', true);

    try {
      const config = await this.getOrCreateConfig(interaction.guildId!);

      await prisma.levelConfig.update({
        where: { id: config.id },
        data: { levelUpMessage: message },
      });

      const embed = new EmbedBuilder()
        .setTitle('✅ Level Up Message Updated')
        .setDescription(`**New Message:**\n${message}`)
        .setColor(0x2ecc71)
        .setFooter({ text: 'Use {user}, {level}, {xp} as placeholders' })
        .setTimestamp();

      await interaction.reply({ embeds: [embed], flags: MessageFlags.Ephemeral });
    } catch (error) {
      console.error('Error updating message:', error);
      await interaction.reply({
        content: '❌ Failed to update level up message.',
        flags: MessageFlags.Ephemeral,
      });
    }
  }

  private async configIgnore(interaction: Command.ChatInputCommandInteraction<'cached'>) {
    const action = interaction.options.getString('action', true);
    const channel = interaction.options.getChannel('channel');
    const role = interaction.options.getRole('role');

    try {
      const config = await this.getOrCreateConfig(interaction.guildId!);

      if (action === 'list') {
        const embed = new EmbedBuilder()
          .setTitle('🚫 Ignored Channels & Roles')
          .setColor(0x95a5a6)
          .addFields(
            {
              name: 'Channels',
              value:
                config.ignoredChannelIds.length > 0
                  ? config.ignoredChannelIds.map(id => `<#${id}>`).join(', ')
                  : 'None',
            },
            {
              name: 'Roles',
              value:
                config.ignoredRoleIds.length > 0
                  ? config.ignoredRoleIds.map(id => `<@&${id}>`).join(', ')
                  : 'None',
            }
          )
          .setTimestamp();

        return void interaction.reply({ embeds: [embed], flags: MessageFlags.Ephemeral });
      }

      if (action === 'add_channel' && channel) {
        if (config.ignoredChannelIds.includes(channel.id)) {
          return void interaction.reply({
            content: '❌ This channel is already ignored.',
            flags: MessageFlags.Ephemeral,
          });
        }

        await prisma.levelConfig.update({
          where: { id: config.id },
          data: { ignoredChannelIds: { push: channel.id } },
        });

        return void interaction.reply({
          content: `✅ XP will no longer be gained in ${channel}.`,
          flags: MessageFlags.Ephemeral,
        });
      } else if (action === 'remove_channel' && channel) {
        await prisma.levelConfig.update({
          where: { id: config.id },
          data: {
            ignoredChannelIds: config.ignoredChannelIds.filter(id => id !== channel.id),
          },
        });

        return void interaction.reply({
          content: `✅ XP will now be gained in ${channel}.`,
          flags: MessageFlags.Ephemeral,
        });
      } else if (action === 'add_role' && role) {
        if (config.ignoredRoleIds.includes(role.id)) {
          return void interaction.reply({
            content: '❌ This role is already ignored.',
            flags: MessageFlags.Ephemeral,
          });
        }

        await prisma.levelConfig.update({
          where: { id: config.id },
          data: { ignoredRoleIds: { push: role.id } },
        });

        return void interaction.reply({
          content: `✅ Users with ${role} will no longer gain XP.`,
          flags: MessageFlags.Ephemeral,
        });
      } else if (action === 'remove_role' && role) {
        await prisma.levelConfig.update({
          where: { id: config.id },
          data: {
            ignoredRoleIds: config.ignoredRoleIds.filter(id => id !== role.id),
          },
        });

        return void interaction.reply({
          content: `✅ Users with ${role} will now gain XP.`,
          flags: MessageFlags.Ephemeral,
        });
      }

      return void interaction.reply({
        content: '❌ Please provide a channel or role for this action.',
        flags: MessageFlags.Ephemeral,
      });
    } catch (error) {
      console.error('Error updating ignore settings:', error);
      await interaction.reply({
        content: '❌ Failed to update ignore settings.',
        flags: MessageFlags.Ephemeral,
      });
    }
  }

  private async configRoles(interaction: Command.ChatInputCommandInteraction<'cached'>) {
    const stack = interaction.options.getBoolean('stack', true);

    try {
      const config = await this.getOrCreateConfig(interaction.guildId!);

      await prisma.levelConfig.update({
        where: { id: config.id },
        data: { stackRoles: stack },
      });

      const embed = new EmbedBuilder()
        .setTitle('✅ Role Stacking Updated')
        .setDescription(
          stack
            ? 'Users will **keep** previous level roles when advancing.'
            : 'Users will **lose** previous level roles when advancing.'
        )
        .setColor(0x2ecc71)
        .setTimestamp();

      await interaction.reply({ embeds: [embed], flags: MessageFlags.Ephemeral });
    } catch (error) {
      console.error('Error updating role settings:', error);
      await interaction.reply({
        content: '❌ Failed to update role settings.',
        flags: MessageFlags.Ephemeral,
      });
    }
  }

  private async configDm(interaction: Command.ChatInputCommandInteraction<'cached'>) {
    const enabled = interaction.options.getBoolean('enabled', true);

    try {
      const config = await this.getOrCreateConfig(interaction.guildId!);

      await prisma.levelConfig.update({
        where: { id: config.id },
        data: { announceInDm: enabled },
      });

      const embed = new EmbedBuilder()
        .setTitle('✅ DM Announcements Updated')
        .setDescription(
          enabled
            ? 'Level up messages will be sent in DM.'
            : 'Level up messages will be sent in the server.'
        )
        .setColor(0x2ecc71)
        .setTimestamp();

      await interaction.reply({ embeds: [embed], flags: MessageFlags.Ephemeral });
    } catch (error) {
      console.error('Error updating DM settings:', error);
      await interaction.reply({
        content: '❌ Failed to update DM settings.',
        flags: MessageFlags.Ephemeral,
      });
    }
  }

  // ==================== REWARD COMMANDS ====================

  private async rewardAdd(interaction: Command.ChatInputCommandInteraction<'cached'>) {
    const level = interaction.options.getInteger('level', true);
    const role = interaction.options.getRole('role', true);

    try {
      const config = await this.getOrCreateConfig(interaction.guildId!);

      // Check if reward already exists
      const existing = await prisma.levelReward.findUnique({
        where: {
          configId_level_roleId: {
            configId: config.id,
            level,
            roleId: role.id,
          },
        },
      });

      if (existing) {
        return void interaction.reply({
          content: `❌ A reward already exists for level ${level} with role ${role}.`,
          flags: MessageFlags.Ephemeral,
        });
      }

      await prisma.levelReward.create({
        data: {
          guildId: interaction.guildId!,
          level,
          roleId: role.id,
          configId: config.id,
        },
      });

      const embed = new EmbedBuilder()
        .setTitle('✅ Reward Added')
        .setDescription(`${role} will be given when users reach **Level ${level}**.`)
        .setColor(0x2ecc71)
        .setTimestamp();

      await interaction.reply({ embeds: [embed], flags: MessageFlags.Ephemeral });
    } catch (error) {
      console.error('Error adding reward:', error);
      await interaction.reply({
        content: '❌ Failed to add level reward.',
        flags: MessageFlags.Ephemeral,
      });
    }
  }

  private async rewardList(interaction: Command.ChatInputCommandInteraction<'cached'>) {
    try {
      const config = await this.getOrCreateConfig(interaction.guildId!);

      const rewards = await prisma.levelReward.findMany({
        where: { configId: config.id },
        orderBy: { level: 'asc' },
      });

      if (rewards.length === 0) {
        return void interaction.reply({
          content: '📊 No level rewards configured yet. Use `/level reward add` to add some!',
          flags: MessageFlags.Ephemeral,
        });
      }

      const rewardText = rewards
        .map(reward => `**Level ${reward.level}:** <@&${reward.roleId}>`)
        .join('\n');

      const embed = new EmbedBuilder()
        .setTitle('🎁 Level Rewards')
        .setDescription(rewardText)
        .setColor(0xf1c40f)
        .setFooter({ text: `${rewards.length} rewards configured` })
        .setTimestamp();

      await interaction.reply({ embeds: [embed], flags: MessageFlags.Ephemeral });
    } catch (error) {
      console.error('Error listing rewards:', error);
      await interaction.reply({
        content: '❌ Failed to fetch level rewards.',
        flags: MessageFlags.Ephemeral,
      });
    }
  }

  private async rewardRemove(interaction: Command.ChatInputCommandInteraction<'cached'>) {
    const level = interaction.options.getInteger('level', true);
    const role = interaction.options.getRole('role', true);

    try {
      const config = await this.getOrCreateConfig(interaction.guildId!);

      const reward = await prisma.levelReward.findUnique({
        where: {
          configId_level_roleId: {
            configId: config.id,
            level,
            roleId: role.id,
          },
        },
      });

      if (!reward) {
        return void interaction.reply({
          content: `❌ No reward found for level ${level} with role ${role}.`,
          flags: MessageFlags.Ephemeral,
        });
      }

      await prisma.levelReward.delete({
        where: { id: reward.id },
      });

      const embed = new EmbedBuilder()
        .setTitle('✅ Reward Removed')
        .setDescription(`${role} will no longer be given at **Level ${level}**.`)
        .setColor(0xe74c3c)
        .setTimestamp();

      await interaction.reply({ embeds: [embed], flags: MessageFlags.Ephemeral });
    } catch (error) {
      console.error('Error removing reward:', error);
      await interaction.reply({
        content: '❌ Failed to remove level reward.',
        flags: MessageFlags.Ephemeral,
      });
    }
  }

  // ==================== ADMIN COMMANDS ====================

  private async adminSet(interaction: Command.ChatInputCommandInteraction<'cached'>) {
    const user = interaction.options.getUser('user', true);
    const type = interaction.options.getString('type', true);
    const value = interaction.options.getInteger('value', true);
    const action = interaction.options.getString('action') || 'set';

    try {
      // Find or create user level
      let userLevel = await prisma.userLevel.findUnique({
        where: {
          guildId_userId: {
            guildId: interaction.guildId!,
            userId: user.id,
          },
        },
      });

      if (!userLevel) {
        userLevel = await prisma.userLevel.create({
          data: {
            guildId: interaction.guildId!,
            userId: user.id,
            xp: 0,
            level: 0,
          },
        });
      }

      // Calculate new values
      let newXp = userLevel.xp;
      let newLevel = userLevel.level;

      if (type === 'xp') {
        if (action === 'set') newXp = value;
        else if (action === 'add') newXp += value;
        else if (action === 'remove') newXp = Math.max(0, newXp - value);
        // Recalculate level from XP
        newLevel = calculateLevel(newXp);
      } else if (type === 'level') {
        if (action === 'set') newLevel = value;
        else if (action === 'add') newLevel += value;
        else if (action === 'remove') newLevel = Math.max(0, newLevel - value);
        // Recalculate XP from level
        newXp = calculateXpForLevel(newLevel);
      }

      await prisma.userLevel.update({
        where: {
          guildId_userId: {
            guildId: interaction.guildId!,
            userId: user.id,
          },
        },
        data: { xp: newXp, level: newLevel },
      });

      const embed = new EmbedBuilder()
        .setTitle('✅ User Level Updated')
        .setDescription(
          `${user}'s progress has been updated.\n\n` +
            `**New Level:** ${newLevel}\n` +
            `**New XP:** ${formatXp(newXp)}`
        )
        .setColor(0x2ecc71)
        .setTimestamp();

      await interaction.reply({ embeds: [embed], flags: MessageFlags.Ephemeral });
    } catch (error) {
      console.error('Error setting user level:', error);
      await interaction.reply({
        content: '❌ Failed to update user level.',
        flags: MessageFlags.Ephemeral,
      });
    }
  }

  private async adminReset(interaction: Command.ChatInputCommandInteraction<'cached'>) {
    const user = interaction.options.getUser('user');

    // Confirm if resetting all users
    if (!user) {
      await interaction.reply({
        content:
          '⚠️ **WARNING:** This will reset ALL user levels in this server!\n\n' +
          'Please run the command again with a specific user to reset only that user, or confirm by running `/level admin reset` without options again within 30 seconds.',
        flags: MessageFlags.Ephemeral,
      });
      return;
    }

    try {
      await prisma.userLevel.delete({
        where: {
          guildId_userId: {
            guildId: interaction.guildId!,
            userId: user.id,
          },
        },
      });

      const embed = new EmbedBuilder()
        .setTitle('✅ User Level Reset')
        .setDescription(`${user}'s level data has been reset.`)
        .setColor(0xe74c3c)
        .setTimestamp();

      await interaction.reply({ embeds: [embed], flags: MessageFlags.Ephemeral });
    } catch (error) {
      console.error('Error resetting user level:', error);
      await interaction.reply({
        content: '❌ Failed to reset user level.',
        flags: MessageFlags.Ephemeral,
      });
    }
  }
}
