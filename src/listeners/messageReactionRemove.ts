import { Events, Listener } from '@sapphire/framework';
import type { MessageReaction, PartialMessageReaction, PartialUser, User } from 'discord.js';
import { getPrismaClient } from '../lib/prisma';

const prisma = getPrismaClient();

/**
 * Message Reaction Remove Listener
 * Handles role removal when users remove their reactions
 */
export class MessageReactionRemoveListener extends Listener<typeof Events.MessageReactionRemove> {
  public constructor(context: Listener.LoaderContext, options: Listener.Options) {
    super(context, { ...options, event: Events.MessageReactionRemove });
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

      // Remove role from user
      if (member.roles.cache.has(role.id)) {
        await member.roles.remove(role);
        // eslint-disable-next-line no-console
        console.log(
          `Removed role ${role.name} from ${member.user.tag} via reaction removal on message ${message.id}`
        );
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error handling reaction remove:', error);
    }
  }
}
