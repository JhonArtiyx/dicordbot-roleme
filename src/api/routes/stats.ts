import { route, json, error } from '../index';
import { getPrismaClient } from '../../lib/prisma';
import {
  validateSnowflake,
  validateBody,
  createStatsChannelConfigSchema,
  updateStatsChannelConfigSchema,
} from '../schemas';

const prisma = getPrismaClient();

// ==================== SERVER STATS ENDPOINTS ====================

/**
 * GET /api/stats/server/:guildId
 * Get aggregated server stats for dashboard
 */
route('GET', '/api/stats/server/:guildId', async req => {
  const url = new URL(req.url);
  const guildId = url.pathname.split('/').pop();

  const validation = validateSnowflake(guildId);
  if (!validation.valid) {
    return error(validation.error!);
  }

  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const [
    autoRoleCount,
    reactionRoleCount,
    verificationConfig,
    ticketConfig,
    levelConfig,
    totalTickets,
    openTickets,
    claimedTickets,
    closedTickets,
    ratingAgg,
    totalLevels,
    avgLevel,
    avgXp,
    topUser,
    activeUsers7Days,
  ] = await Promise.all([
    prisma.autoRole.count({ where: { guildId } }),
    prisma.reactionRole.count({ where: { guildId } }),
    prisma.verificationConfig.findUnique({ where: { guildId } }),
    prisma.ticketConfig.findUnique({ where: { guildId } }),
    prisma.levelConfig.findUnique({ where: { guildId } }),
    prisma.ticket.count({ where: { guildId } }),
    prisma.ticket.count({ where: { guildId, status: 'OPEN' } }),
    prisma.ticket.count({ where: { guildId, status: 'CLAIMED' } }),
    prisma.ticket.count({ where: { guildId, status: 'CLOSED' } }),
    prisma.ticketRating.aggregate({
      where: { ticket: { guildId } },
      _avg: { rating: true },
      _count: true,
    }),
    prisma.userLevel.count({ where: { guildId } }),
    prisma.userLevel.aggregate({ where: { guildId }, _avg: { level: true } }),
    prisma.userLevel.aggregate({ where: { guildId }, _avg: { xp: true } }),
    prisma.userLevel.findFirst({
      where: { guildId },
      orderBy: [{ level: 'desc' }, { xp: 'desc' }],
    }),
    prisma.userLevel.count({
      where: {
        guildId,
        lastMessageAt: { gte: sevenDaysAgo },
      },
    }),
  ]);

  return json({
    success: true,
    data: {
      features: {
        autoroles: autoRoleCount,
        reactionroles: reactionRoleCount,
        verificationEnabled: !!verificationConfig,
        ticketsEnabled: !!ticketConfig,
        levelsEnabled: !!levelConfig,
      },
      tickets: {
        total: totalTickets,
        open: openTickets,
        claimed: claimedTickets,
        closed: closedTickets,
        averageRating: ratingAgg._avg.rating || 0,
        totalRatings: ratingAgg._count,
      },
      levels: {
        totalUsers: totalLevels,
        activeUsers7Days,
        averageLevel: Math.round((avgLevel._avg.level || 0) * 100) / 100,
        averageXp: Math.round((avgXp._avg.xp || 0) * 100) / 100,
        topUser,
      },
    },
  });
});

// ==================== STATS CHANNEL CONFIG ====================

/**
 * GET /api/stats/channels/:guildId
 * Get stats channel configuration
 */
route('GET', '/api/stats/channels/:guildId', async req => {
  const url = new URL(req.url);
  const guildId = url.pathname.split('/').pop();

  const validation = validateSnowflake(guildId);
  if (!validation.valid) {
    return error(validation.error!);
  }

  const config = await prisma.statsChannelConfig.findUnique({
    where: { guildId },
  });

  return json({ success: true, data: config });
});

/**
 * POST /api/stats/channels
 * Create stats channel configuration
 */
route('POST', '/api/stats/channels', async req => {
  const validation = await validateBody(req, createStatsChannelConfigSchema);
  if (!validation.success) {
    return error(validation.error);
  }

  const data = validation.data;

  const existing = await prisma.statsChannelConfig.findUnique({
    where: { guildId: data.guildId },
  });

  if (existing) {
    return error('Stats channel config already exists for this guild. Use PUT to update.');
  }

  const config = await prisma.statsChannelConfig.create({
    data,
  });

  return json({ success: true, data: config }, 201);
});

/**
 * PUT /api/stats/channels/:guildId
 * Update stats channel configuration
 */
route('PUT', '/api/stats/channels/:guildId', async req => {
  const url = new URL(req.url);
  const guildId = url.pathname.split('/').pop();

  const validation = validateSnowflake(guildId);
  if (!validation.valid) {
    return error(validation.error!);
  }

  const bodyValidation = await validateBody(req, updateStatsChannelConfigSchema);
  if (!bodyValidation.success) {
    return error(bodyValidation.error);
  }

  const existing = await prisma.statsChannelConfig.findUnique({
    where: { guildId },
  });

  if (!existing) {
    return error('Stats channel config not found for this guild');
  }

  const config = await prisma.statsChannelConfig.update({
    where: { guildId },
    data: bodyValidation.data,
  });

  return json({ success: true, data: config });
});

/**
 * DELETE /api/stats/channels/:guildId
 * Remove stats channel configuration
 */
route('DELETE', '/api/stats/channels/:guildId', async req => {
  const url = new URL(req.url);
  const guildId = url.pathname.split('/').pop();

  const validation = validateSnowflake(guildId);
  if (!validation.valid) {
    return error(validation.error!);
  }

  await prisma.statsChannelConfig.delete({
    where: { guildId },
  });

  return json({ success: true, message: 'Stats channel config deleted' });
});
