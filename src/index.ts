import 'dotenv/config';
import './lib/setup';
import { SapphireClient, LogLevel } from '@sapphire/framework';
import { GatewayIntentBits, Partials } from 'discord.js';

const client = new SapphireClient({
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Message, Partials.Channel, Partials.Reaction],
  defaultPrefix: '!',
  caseInsensitiveCommands: true,
  loadMessageCommandListeners: true,
  loadApplicationCommandRegistriesStatusListeners: true,
  logger: {
    level: process.env.NODE_ENV === 'production' ? LogLevel.Info : LogLevel.Debug,
  },
});

client.on('clientReady', () => {
  console.info(`✅ Bot logged in as ${client.user?.tag}`);
});

client.on('error', (error: Error) => {
  console.error('Discord.js error:', error);
});

process.on('unhandledRejection', (error: Error) => {
  console.error('Unhandled promise rejection:', error);
});

await client.login(process.env.DISCORD_TOKEN);
