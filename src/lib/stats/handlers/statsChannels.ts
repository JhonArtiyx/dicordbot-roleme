import {
  ChannelType,
  PermissionFlagsBits,
  type Guild,
  type GuildChannel,
  type OverwriteResolvable,
} from 'discord.js';
import { getPrismaClient } from '../../prisma';

const prisma = getPrismaClient();

const updateQueue = new Map<string, NodeJS.Timeout>();

export async function ensureStatsChannels(guild: Guild, categoryId?: string | null): Promise<void> {
  const config = await prisma.statsChannelConfig.findUnique({
    where: { guildId: guild.id },
  });

  const category = categoryId
    ? guild.channels.cache.get(categoryId)
    : config?.categoryId
      ? guild.channels.cache.get(config.categoryId)
      : null;

  const resolvedCategoryId = category?.id || config?.categoryId || null;

  const channels = await createOrReuseChannels(guild, config, resolvedCategoryId);

  await prisma.statsChannelConfig.upsert({
    where: { guildId: guild.id },
    update: {
      categoryId: resolvedCategoryId,
      totalMembersChannelId: channels.totalMembersChannelId,
      humanMembersChannelId: channels.humanMembersChannelId,
      botMembersChannelId: channels.botMembersChannelId,
      onlineMembersChannelId: channels.onlineMembersChannelId,
    },
    create: {
      guildId: guild.id,
      categoryId: resolvedCategoryId,
      totalMembersChannelId: channels.totalMembersChannelId,
      humanMembersChannelId: channels.humanMembersChannelId,
      botMembersChannelId: channels.botMembersChannelId,
      onlineMembersChannelId: channels.onlineMembersChannelId,
    },
  });

  await updateStatsChannels(guild);
}

export function scheduleStatsChannelUpdate(guild: Guild, delayMs = 5000) {
  const existing = updateQueue.get(guild.id);
  if (existing) {
    clearTimeout(existing);
  }

  const timeout = setTimeout(async () => {
    try {
      await updateStatsChannels(guild);
    } catch (error) {
      console.error('Error updating stats channels:', error);
    }
  }, delayMs);

  updateQueue.set(guild.id, timeout);
}

export async function updateStatsChannels(guild: Guild) {
  const config = await prisma.statsChannelConfig.findUnique({
    where: { guildId: guild.id },
  });

  if (!config) return;

  const memberCount = guild.memberCount;
  const botCount = guild.members.cache.filter(m => m.user.bot).size;
  const humanCount = Math.max(0, memberCount - botCount);
  const onlineCount = guild.members.cache.filter(
    m => m.presence?.status && m.presence.status !== 'offline'
  ).size;

  const updates: Array<Promise<GuildChannel | null>> = [];

  if (config.totalMembersChannelId) {
    updates.push(
      updateChannelName(guild, config.totalMembersChannelId, `👥 Members: ${memberCount}`)
    );
  }
  if (config.humanMembersChannelId) {
    updates.push(
      updateChannelName(guild, config.humanMembersChannelId, `🧑 Humans: ${humanCount}`)
    );
  }
  if (config.botMembersChannelId) {
    updates.push(updateChannelName(guild, config.botMembersChannelId, `🤖 Bots: ${botCount}`));
  }
  if (config.onlineMembersChannelId) {
    updates.push(
      updateChannelName(guild, config.onlineMembersChannelId, `🟢 Online: ${onlineCount}`)
    );
  }

  await Promise.allSettled(updates);
}

async function createOrReuseChannels(
  guild: Guild,
  config: {
    totalMembersChannelId?: string | null;
    humanMembersChannelId?: string | null;
    botMembersChannelId?: string | null;
    onlineMembersChannelId?: string | null;
  } | null,
  categoryId: string | null
) {
  const basePermissions: OverwriteResolvable[] = [
    {
      id: guild.id,
      deny: [PermissionFlagsBits.Connect],
      allow: [PermissionFlagsBits.ViewChannel],
    },
  ];

  const totalMembersChannelId = await createOrReuseChannel(
    guild,
    config?.totalMembersChannelId,
    `👥 Members: ${guild.memberCount}`,
    categoryId,
    basePermissions
  );

  const botCount = guild.members.cache.filter(m => m.user.bot).size;
  const humanCount = Math.max(0, guild.memberCount - botCount);
  const onlineCount = guild.members.cache.filter(
    m => m.presence?.status && m.presence.status !== 'offline'
  ).size;

  const humanMembersChannelId = await createOrReuseChannel(
    guild,
    config?.humanMembersChannelId,
    `🧑 Humans: ${humanCount}`,
    categoryId,
    basePermissions
  );

  const botMembersChannelId = await createOrReuseChannel(
    guild,
    config?.botMembersChannelId,
    `🤖 Bots: ${botCount}`,
    categoryId,
    basePermissions
  );

  const onlineMembersChannelId = await createOrReuseChannel(
    guild,
    config?.onlineMembersChannelId,
    `🟢 Online: ${onlineCount}`,
    categoryId,
    basePermissions
  );

  return {
    totalMembersChannelId,
    humanMembersChannelId,
    botMembersChannelId,
    onlineMembersChannelId,
  };
}

async function createOrReuseChannel(
  guild: Guild,
  existingId: string | null | undefined,
  name: string,
  categoryId: string | null,
  permissionOverwrites: OverwriteResolvable[]
): Promise<string | null> {
  if (existingId) {
    const existing = guild.channels.cache.get(existingId);
    if (existing && existing.isVoiceBased()) {
      await existing.setName(name);
      return existing.id;
    }
  }

  const channel = await guild.channels.create({
    name,
    type: ChannelType.GuildVoice,
    parent: categoryId || undefined,
    permissionOverwrites,
  });

  return channel.id;
}

async function updateChannelName(
  guild: Guild,
  channelId: string,
  name: string
): Promise<GuildChannel | null> {
  const channel = guild.channels.cache.get(channelId);
  if (!channel || !channel.isVoiceBased()) return null;

  if (channel.name === name) return channel;

  return channel.setName(name);
}
