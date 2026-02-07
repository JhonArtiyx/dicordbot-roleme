import { Events, Listener } from '@sapphire/framework';
import type { Presence } from 'discord.js';
import { scheduleStatsChannelUpdate } from '../lib/stats/handlers/statsChannels';

/**
 * Presence Update Listener
 * Updates stats channels when online counts change
 */
export class PresenceUpdateListener extends Listener<typeof Events.PresenceUpdate> {
  public constructor(context: Listener.LoaderContext, options: Listener.Options) {
    super(context, { ...options, event: Events.PresenceUpdate });
  }

  public async run(_oldPresence: Presence | null, newPresence: Presence) {
    if (!newPresence.guild) return;

    scheduleStatsChannelUpdate(newPresence.guild);
  }
}
