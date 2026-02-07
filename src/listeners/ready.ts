import { Events, Listener } from '@sapphire/framework';
import type { Client } from 'discord.js';
import { updateStatsChannels } from '../lib/stats/handlers/statsChannels';

/**
 * Ready Listener
 * Refresh stats channels on startup
 */
export class ReadyListener extends Listener<typeof Events.ClientReady> {
  public constructor(context: Listener.LoaderContext, options: Listener.Options) {
    super(context, { ...options, event: Events.ClientReady, once: true });
  }

  public async run(client: Client<true>) {
    for (const [, guild] of client.guilds.cache) {
      try {
        await updateStatsChannels(guild);
        await this.sleep(500);
      } catch (error) {
        console.error('Error refreshing stats channels on ready:', error);
      }
    }
  }

  private sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
