import { route, json, error } from '../index';
import { getPrismaClient } from '../../lib/prisma';
import {
  createLevelConfigSchema,
  updateLevelConfigSchema,
  updateUserLevelSchema,
  createLevelRewardSchema,
  validateBody,
  validateSnowflake,
} from '../schemas';

const prisma = getPrismaClient();

// ==================== CONFIG ENDPOINTS ====================

/**
 * GET /api/levels/config/:guildId
 * Get level configuration for a guild
 */
route('GET', '/api/levels/config/:guildId', async req => {
  const url = new URL(req.url);
  const guildId = url.pathname.split('/').pop();

  const validation = validateSnowflake(guildId);
  if (!validation.valid) {
    return error(validation.error!);
  }

  const config = await prisma.levelConfig.findUnique({
    where: { guildId },
    include: {
      rewards: {
        orderBy: { level: 'asc' },
      },
    },
  });

  return json({ success: true, data: config });
});

/**
 * POST /api/levels/config
 * Create level configuration for a guild
 */
route('POST', '/api/levels/config', async req => {
  const validation = await validateBody(req, createLevelConfigSchema);
  if (!validation.success) {
    return error(validation.error);
  }

  const data = validation.data;

  // Check if config already exists
  const existing = await prisma.levelConfig.findUnique({
    where: { guildId: data.guildId },
  });

  if (existing) {
    return error('Level config already exists for this guild. Use PUT to update.');
  }

  // Validate xpMin <= xpMax
  if (data.xpMin && data.xpMax && data.xpMin > data.xpMax) {
    return error('xpMin must be less than or equal to xpMax');
  }

  const config = await prisma.levelConfig.create({
    data,
  });

  return json({ success: true, data: config });
});

/**
 * PUT /api/levels/config/:guildId
 * Update level configuration
 */
route('PUT', '/api/levels/config/:guildId', async req => {
  const url = new URL(req.url);
  const guildId = url.pathname.split('/').pop();

  const validation = validateSnowflake(guildId);
  if (!validation.valid) {
    return error(validation.error!);
  }

  const bodyValidation = await validateBody(req, updateLevelConfigSchema);
  if (!bodyValidation.success) {
    return error(bodyValidation.error);
  }

  const data = bodyValidation.data;

  // Check if config exists
  const existing = await prisma.levelConfig.findUnique({
    where: { guildId },
  });

  if (!existing) {
    return error('Level config not found for this guild');
  }

  const config = await prisma.levelConfig.update({
    where: { guildId },
    data,
  });

  return json({ success: true, data: config });
});

// ==================== LEADERBOARD ENDPOINTS ====================

/**
 * GET /api/levels/leaderboard/:guildId
 * Get leaderboard for a guild
 * Query params: limit (default 10), offset (default 0)
 */
route('GET', '/api/levels/leaderboard/:guildId', async req => {
  const url = new URL(req.url);
  const guildId = url.pathname.split('/').pop();

  const validation = validateSnowflake(guildId);
  if (!validation.valid) {
    return error(validation.error!);
  }

  const limit = Math.min(parseInt(url.searchParams.get('limit') || '10'), 100);
  const offset = parseInt(url.searchParams.get('offset') || '0');

  const [users, total] = await Promise.all([
    prisma.userLevel.findMany({
      where: { guildId },
      orderBy: [{ level: 'desc' }, { xp: 'desc' }],
      take: limit,
      skip: offset,
    }),
    prisma.userLevel.count({
      where: { guildId },
    }),
  ]);

  return json({
    success: true,
    data: {
      users,
      total,
      limit,
      offset,
      hasMore: offset + limit < total,
    },
  });
});

// ==================== USER LEVEL ENDPOINTS ====================

/**
 * GET /api/levels/user/:guildId/:userId
 * Get level data for a specific user
 */
route('GET', '/api/levels/user/:guildId/:userId', async req => {
  const url = new URL(req.url);
  const pathParts = url.pathname.split('/');
  const userId = pathParts.pop();
  const guildId = pathParts.pop();

  const guildValidation = validateSnowflake(guildId);
  if (!guildValidation.valid) {
    return error(guildValidation.error!);
  }

  const userValidation = validateSnowflake(userId);
  if (!userValidation.valid) {
    return error(userValidation.error!);
  }

  const userLevel = await prisma.userLevel.findUnique({
    where: {
      guildId_userId: {
        guildId: guildId!,
        userId: userId!,
      },
    },
  });

  if (!userLevel) {
    return error('User level data not found', 404);
  }

  // Get user's rank
  const rank = await prisma.userLevel.count({
    where: {
      guildId: guildId!,
      OR: [
        { level: { gt: userLevel.level } },
        {
          level: userLevel.level,
          xp: { gt: userLevel.xp },
        },
      ],
    },
  });

  return json({
    success: true,
    data: {
      ...userLevel,
      rank: rank + 1,
    },
  });
});

/**
 * PUT /api/levels/user
 * Update user level/XP (admin action)
 */
route('PUT', '/api/levels/user', async req => {
  const validation = await validateBody(req, updateUserLevelSchema);
  if (!validation.success) {
    return error(validation.error);
  }

  const { guildId, userId, xp, level, action } = validation.data;

  // Find or create user level
  let userLevel = await prisma.userLevel.findUnique({
    where: {
      guildId_userId: {
        guildId,
        userId,
      },
    },
  });

  if (!userLevel) {
    userLevel = await prisma.userLevel.create({
      data: {
        guildId,
        userId,
        xp: 0,
        level: 0,
      },
    });
  }

  // Calculate new values based on action
  let newXp = userLevel.xp;
  let newLevel = userLevel.level;

  if (xp !== undefined) {
    if (action === 'set') {
      newXp = xp;
    } else if (action === 'add') {
      newXp = userLevel.xp + xp;
    } else if (action === 'remove') {
      newXp = Math.max(0, userLevel.xp - xp);
    }
  }

  if (level !== undefined) {
    if (action === 'set') {
      newLevel = level;
    } else if (action === 'add') {
      newLevel = userLevel.level + level;
    } else if (action === 'remove') {
      newLevel = Math.max(0, userLevel.level - level);
    }
  }

  // Update user level
  const updated = await prisma.userLevel.update({
    where: {
      guildId_userId: {
        guildId,
        userId,
      },
    },
    data: {
      xp: newXp,
      level: newLevel,
    },
  });

  return json({
    success: true,
    data: updated,
  });
});

/**
 * DELETE /api/levels/user/:guildId/:userId
 * Reset user level data
 */
route('DELETE', '/api/levels/user/:guildId/:userId', async req => {
  const url = new URL(req.url);
  const pathParts = url.pathname.split('/');
  const userId = pathParts.pop();
  const guildId = pathParts.pop();

  const guildValidation = validateSnowflake(guildId);
  if (!guildValidation.valid) {
    return error(guildValidation.error!);
  }

  const userValidation = validateSnowflake(userId);
  if (!userValidation.valid) {
    return error(userValidation.error!);
  }

  await prisma.userLevel.delete({
    where: {
      guildId_userId: {
        guildId: guildId!,
        userId: userId!,
      },
    },
  });

  return json({
    success: true,
    message: 'User level data reset successfully',
  });
});

/**
 * DELETE /api/levels/reset/:guildId
 * Reset all user levels in a guild
 */
route('DELETE', '/api/levels/reset/:guildId', async req => {
  const url = new URL(req.url);
  const guildId = url.pathname.split('/').pop();

  const validation = validateSnowflake(guildId);
  if (!validation.valid) {
    return error(validation.error!);
  }

  const result = await prisma.userLevel.deleteMany({
    where: { guildId },
  });

  return json({
    success: true,
    message: `Reset ${result.count} user level records`,
    count: result.count,
  });
});

// ==================== REWARD ENDPOINTS ====================

/**
 * GET /api/levels/rewards/:guildId
 * Get all level rewards for a guild
 */
route('GET', '/api/levels/rewards/:guildId', async req => {
  const url = new URL(req.url);
  const guildId = url.pathname.split('/').pop();

  const validation = validateSnowflake(guildId);
  if (!validation.valid) {
    return error(validation.error!);
  }

  // First get the config
  const config = await prisma.levelConfig.findUnique({
    where: { guildId },
  });

  if (!config) {
    return error('Level config not found for this guild', 404);
  }

  const rewards = await prisma.levelReward.findMany({
    where: { configId: config.id },
    orderBy: { level: 'asc' },
  });

  return json({
    success: true,
    data: rewards,
  });
});

/**
 * POST /api/levels/rewards
 * Create a level reward
 */
route('POST', '/api/levels/rewards', async req => {
  const validation = await validateBody(req, createLevelRewardSchema);
  if (!validation.success) {
    return error(validation.error);
  }

  const { guildId, level, roleId } = validation.data;

  // Get config
  const config = await prisma.levelConfig.findUnique({
    where: { guildId },
  });

  if (!config) {
    return error('Level config not found. Create config first.', 404);
  }

  // Check if reward already exists for this level and role
  const existing = await prisma.levelReward.findUnique({
    where: {
      configId_level_roleId: {
        configId: config.id,
        level,
        roleId,
      },
    },
  });

  if (existing) {
    return error('A reward already exists for this level and role');
  }

  const reward = await prisma.levelReward.create({
    data: {
      guildId,
      level,
      roleId,
      configId: config.id,
    },
  });

  return json({
    success: true,
    data: reward,
  });
});

/**
 * DELETE /api/levels/rewards/:rewardId
 * Delete a level reward
 */
route('DELETE', '/api/levels/rewards/:rewardId', async req => {
  const url = new URL(req.url);
  const rewardId = url.pathname.split('/').pop();

  if (!rewardId) {
    return error('Reward ID is required');
  }

  await prisma.levelReward.delete({
    where: { id: rewardId },
  });

  return json({
    success: true,
    message: 'Level reward deleted successfully',
  });
});

// ==================== STATS ENDPOINTS ====================

/**
 * GET /api/levels/stats/:guildId
 * Get level statistics for a guild
 */
route('GET', '/api/levels/stats/:guildId', async req => {
  const url = new URL(req.url);
  const guildId = url.pathname.split('/').pop();

  const validation = validateSnowflake(guildId);
  if (!validation.valid) {
    return error(validation.error!);
  }

  const [totalUsers, avgLevel, avgXp, topUser] = await Promise.all([
    prisma.userLevel.count({
      where: { guildId },
    }),
    prisma.userLevel.aggregate({
      where: { guildId },
      _avg: { level: true },
    }),
    prisma.userLevel.aggregate({
      where: { guildId },
      _avg: { xp: true },
    }),
    prisma.userLevel.findFirst({
      where: { guildId },
      orderBy: [{ level: 'desc' }, { xp: 'desc' }],
    }),
  ]);

  // Get level distribution
  const levelDistribution = await prisma.$queryRaw<Array<{ level: number; count: bigint }>>`
    SELECT level, COUNT(*) as count
    FROM user_levels
    WHERE "guildId" = ${guildId}
    GROUP BY level
    ORDER BY level ASC
  `;

  return json({
    success: true,
    data: {
      totalUsers,
      averageLevel: Math.round((avgLevel._avg.level || 0) * 100) / 100,
      averageXp: Math.round((avgXp._avg.xp || 0) * 100) / 100,
      topUser,
      levelDistribution: levelDistribution.map(item => ({
        level: item.level,
        count: Number(item.count),
      })),
    },
  });
});
