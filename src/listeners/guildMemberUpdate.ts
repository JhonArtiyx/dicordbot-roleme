import { Events, Listener } from '@sapphire/framework';
import type { GuildMember, PartialGuildMember } from 'discord.js';
import { getPrismaClient } from '../lib/prisma';

const prisma = getPrismaClient();

/**
 * Guild Member Update Listener
 * Syncs reaction roles when an admin manually removes a role
 * If a role that's part of a reaction role is removed, the reaction is also removed
 */
export class GuildMemberUpdateListener extends Listener<typeof Events.GuildMemberUpdate> {
  public constructor(context: Listener.LoaderContext, options: Listener.Options) {
    super(context, { ...options, event: Events.GuildMemberUpdate });
  }

  public async run(oldMember: GuildMember | PartialGuildMember, newMember: GuildMember) {
    try {
      // Fetch partial data if needed
      if (oldMember.partial) {
        try {
          await oldMember.fetch();
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('Error fetching old member:', error);
          return;
        }
      }

      // Get roles that were removed
      const removedRoles = oldMember.roles.cache.filter(
        role => !newMember.roles.cache.has(role.id)
      );

      if (removedRoles.size === 0) return;

      // Check if any of the removed roles are reaction roles
      for (const [, role] of removedRoles) {
        const reactionRoles = await prisma.reactionRole.findMany({
          where: {
            guildId: newMember.guild.id,
            roleId: role.id,
          },
        });

        // Remove reactions for each reaction role configuration
        for (const reactionRole of reactionRoles) {
          try {
            // Fetch the channel
            const channel = await newMember.guild.channels.fetch(reactionRole.channelId);
            if (!channel || !channel.isTextBased()) continue;

            // Fetch the message
            const message = await channel.messages.fetch(reactionRole.messageId);
            if (!message) continue;

            // Find the reaction that matches the emoji
            const reaction = message.reactions.cache.find(r => {
              const reactionEmoji = r.emoji.id || r.emoji.name;
              return reactionEmoji === reactionRole.emoji;
            });

            if (!reaction) continue;

            // Check if user has this reaction
            const users = await reaction.users.fetch();
            if (users.has(newMember.id)) {
              // Remove the user's reaction
              await reaction.users.remove(newMember.id);
              // eslint-disable-next-line no-console
              console.log(
                `Removed reaction ${reactionRole.emoji} from ${newMember.user.tag} because role ${role.name} was removed by admin`
              );
            }
          } catch (error) {
            // eslint-disable-next-line no-console
            console.error(
              `Error removing reaction for role ${role.name} on message ${reactionRole.messageId}:`,
              error
            );
            // Continue with other reaction roles even if one fails
          }
        }
      }
    } catch (error) {
      console.error('Error in guildMemberUpdate listener:', error);
    }
  }
}
