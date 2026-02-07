import { Events, Listener } from '@sapphire/framework';
import type { MessageReaction, PartialMessageReaction, PartialUser, User } from 'discord.js';
import { getPrismaClient } from '../lib/prisma';

const prisma = getPrismaClient();

/**
 * Message Reaction Add Listener
 * Handles role assignment when users react to messages
 */
export class MessageReactionAddListener extends Listener<typeof Events.MessageReactionAdd> {
  public constructor(context: Listener.LoaderContext, options: Listener.Options) {
    super(context, { ...options, event: Events.MessageReactionAdd });
  }

  public async run(reaction: MessageReaction | PartialMessageReaction, user: User | PartialUser) {
    // Ignore bot reactions
    if (user.bot) return;

    // Fetch partial data if needed
    if (reaction.partial) {
      try {
        await reaction.fetch();
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching reaction:', error);
        return;
      }
    }

    const { message } = reaction;
    const emoji = reaction.emoji.id || reaction.emoji.name;

    if (!emoji || !message.guild) return;

    try {
      // Find reaction role configuration
      const reactionRole = await prisma.reactionRole.findUnique({
        where: {
          messageId_emoji: {
            messageId: message.id,
            emoji,
          },
        },
      });

      if (!reactionRole) return;

      // Get member
      const member = await message.guild.members.fetch(user.id);
      if (!member) return;

      // Get role
      const role = message.guild.roles.cache.get(reactionRole.roleId);
      if (!role) {
        // eslint-disable-next-line no-console
        console.error(`Role ${reactionRole.roleId} not found in guild ${message.guild.id}`);
        return;
      }

      // Handle SINGLE mode - remove other roles and reactions from the same message
      if (reactionRole.mode === 'SINGLE') {
        const allReactionRoles = await prisma.reactionRole.findMany({
          where: { messageId: message.id },
        });

        // Remove all OTHER roles from this message and their reactions
        for (const rr of allReactionRoles) {
          if (rr.roleId !== reactionRole.roleId) {
            // Remove role if user has it
            if (member.roles.cache.has(rr.roleId)) {
              const roleToRemove = message.guild.roles.cache.get(rr.roleId);
              if (roleToRemove) {
                await member.roles.remove(roleToRemove);
                // eslint-disable-next-line no-console
                console.log(
                  `Removed role ${roleToRemove.name} from ${member.user.tag} (SINGLE mode - keeping only latest selection)`
                );
              }
            }

            // Remove user's reaction for this role
            const otherReaction = message.reactions.cache.find(r => {
              const reactionEmoji = r.emoji.id || r.emoji.name;
              return reactionEmoji === rr.emoji;
            });

            if (otherReaction) {
              const users = await otherReaction.users.fetch();
              if (users.has(user.id)) {
                await otherReaction.users.remove(user.id);
              }
            }
          }
        }
      }

      // Add role to user
      if (!member.roles.cache.has(role.id)) {
        await member.roles.add(role);
        // eslint-disable-next-line no-console
        console.log(
          `Added role ${role.name} to ${member.user.tag} via reaction role on message ${message.id}`
        );
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error handling reaction add:', error);
    }
  }
}
