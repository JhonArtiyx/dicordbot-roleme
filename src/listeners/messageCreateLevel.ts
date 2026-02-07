import { Events, Listener } from '@sapphire/framework';
import type { Message } from 'discord.js';
import type { LevelConfig, LevelReward, UserLevel } from '../generated/prisma';
import { getPrismaClient } from '../lib/prisma';
import { calculateLevel, generateXp, getLevelColor } from '../lib/level/helpers/levelCalculator';

const prisma = getPrismaClient();

// Cache for user cooldowns (userId+guildId -> timestamp)
const cooldownCache = new Map<string, number>();

/**
 * Message Create Listener for XP System
 * Awards XP to users who send messages
 */
export class MessageCreateLevelListener extends Listener<typeof Events.MessageCreate> {
  public constructor(context: Listener.LoaderContext, options: Listener.Options) {
    super(context, {
      ...options,
      event: Events.MessageCreate,
    });
  }

  public async run(message: Message) {
    // Ignore DMs, bots, system messages, and webhooks
    if (
      !message.guild ||
      message.author.bot ||
      message.system ||
      message.webhookId ||
      !message.member
    ) {
      return;
    }

    try {
      // Get level config
      const config = await prisma.levelConfig.findUnique({
        where: { guildId: message.guild.id },
        include: {
          rewards: {
            orderBy: { level: 'asc' },
          },
        },
      });

      // If no config or system disabled, skip
      if (!config || !config.enabled) {
        return;
      }

      // Check if channel is ignored
      if (config.ignoredChannelIds.includes(message.channel.id)) {
        return;
      }

      // Check if user has an ignored role
      const hasIgnoredRole = message.member.roles.cache.some(role =>
        config.ignoredRoleIds.includes(role.id)
      );
      if (hasIgnoredRole) {
        return;
      }

      // Check cooldown
      const cooldownKey = `${message.author.id}-${message.guild.id}`;
      const lastMessageTime = cooldownCache.get(cooldownKey) || 0;
      const now = Date.now();

      if (now - lastMessageTime < config.xpCooldown) {
        return; // User is on cooldown
      }

      // Update cooldown
      cooldownCache.set(cooldownKey, now);

      // Get or create user level
      let userLevel = await prisma.userLevel.findUnique({
        where: {
          guildId_userId: {
            guildId: message.guild.id,
            userId: message.author.id,
          },
        },
      });

      if (!userLevel) {
        userLevel = await prisma.userLevel.create({
          data: {
            guildId: message.guild.id,
            userId: message.author.id,
            xp: 0,
            level: 0,
            totalMessages: 0,
          },
        });
      }

      // Generate random XP
      const xpGain = generateXp(config.xpMin, config.xpMax);
      const newXp = userLevel.xp + xpGain;
      const oldLevel = userLevel.level;
      const newLevel = calculateLevel(newXp);

      // Update user level
      const updated = await prisma.userLevel.update({
        where: {
          guildId_userId: {
            guildId: message.guild.id,
            userId: message.author.id,
          },
        },
        data: {
          xp: newXp,
          level: newLevel,
          totalMessages: { increment: 1 },
          lastMessageAt: new Date(),
        },
      });

      // Check if user leveled up
      if (newLevel > oldLevel) {
        await this.handleLevelUp(message, config, updated, newLevel);
      }
    } catch (error) {
      console.error('Error processing message for XP:', error);
    }
  }

  /**
   * Handle level up event
   */
  private async handleLevelUp(
    message: Message,
    config: LevelConfig & { rewards: LevelReward[] },
    userLevel: UserLevel,
    newLevel: number
  ) {
    try {
      // Get rewards for the new level
      const rewards = config.rewards.filter(reward => reward.level === newLevel);

      // Assign role rewards
      if (rewards.length > 0 && message.member) {
        for (const reward of rewards) {
          try {
            const role = message.guild!.roles.cache.get(reward.roleId);
            if (role) {
              await message.member.roles.add(role);

              // If not stacking roles, remove lower level rewards
              if (!config.stackRoles) {
                const lowerRewards = config.rewards.filter(
                  lowerReward =>
                    lowerReward.level < newLevel && lowerReward.roleId !== reward.roleId
                );
                for (const lowerReward of lowerRewards) {
                  const lowerRole = message.guild!.roles.cache.get(lowerReward.roleId);
                  if (lowerRole && message.member.roles.cache.has(lowerRole.id)) {
                    await message.member.roles.remove(lowerRole);
                  }
                }
              }
            }
          } catch (error) {
            console.error('Error assigning role reward:', error);
          }
        }
      }

      // Format level up message
      let levelUpMessage = config.levelUpMessage
        .replace('{user}', `<@${message.author.id}>`)
        .replace('{level}', newLevel.toString())
        .replace('{xp}', userLevel.xp.toString());

      // Add reward information
      if (rewards.length > 0) {
        const rewardText = rewards.map(reward => `<@&${reward.roleId}>`).join(', ');
        levelUpMessage += `\n\n🎁 **Rewards:** ${rewardText}`;
      }

      const embed = {
        color: getLevelColor(newLevel),
        description: levelUpMessage,
        thumbnail: {
          url: message.author.displayAvatarURL({ size: 128 }),
        },
        timestamp: new Date().toISOString(),
      };

      // Send level up message
      if (config.announceInDm) {
        // Send in DM
        try {
          await message.author.send({ embeds: [embed] });
        } catch (error) {
          console.error('Failed to send level up DM:', error);
          // Fallback to channel if DM fails
          if (config.levelUpChannelId) {
            const channel = message.guild!.channels.cache.get(config.levelUpChannelId);
            if (channel && channel.isTextBased()) {
              await channel.send({ embeds: [embed] });
            }
          } else if ('send' in message.channel) {
            await message.channel.send({ embeds: [embed] });
          }
        }
      } else {
        // Send in configured channel or same channel
        if (config.levelUpChannelId) {
          const channel = message.guild!.channels.cache.get(config.levelUpChannelId);
          if (channel && channel.isTextBased()) {
            await channel.send({ embeds: [embed] });
          } else {
            // Fallback to same channel if configured channel not found
            if ('send' in message.channel) {
              await message.channel.send({ embeds: [embed] });
            }
          }
        } else {
          if ('send' in message.channel) {
            await message.channel.send({ embeds: [embed] });
          }
        }
      }
    } catch (error) {
      console.error('Error handling level up:', error);
    }
  }
}
