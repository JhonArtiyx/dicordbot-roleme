import { Events, Listener } from '@sapphire/framework';
import type { GuildMember, PartialGuildMember } from 'discord.js';
import { scheduleStatsChannelUpdate } from '../lib/stats/handlers/statsChannels';

/**
 * Guild Member Remove Listener
 * Updates stats channels when a member leaves
 */
export class GuildMemberRemoveListener extends Listener<typeof Events.GuildMemberRemove> {
  public constructor(context: Listener.LoaderContext, options: Listener.Options) {
    super(context, { ...options, event: Events.GuildMemberRemove });
  }

  public async run(member: GuildMember | PartialGuildMember) {
    if (!member.guild) return;

    scheduleStatsChannelUpdate(member.guild);
  }
}
