import { route, json, error } from '../index';
import { getPrismaClient } from '../../lib/prisma';
import type { RoleMode } from '../../lib/reactionrole/types';
import {
  createReactionRoleSchema,
  updateReactionRoleSchema,
  updateReactionRoleModeSchema,
  validateBody,
  validateSnowflake,
} from '../schemas';

const prisma = getPrismaClient();

/**
 * GET /api/reactionroles/:guildId
 * List all reaction roles for a guild
 */
route('GET', '/api/reactionroles/:guildId', async req => {
  const url = new URL(req.url);
  const guildId = url.pathname.split('/').pop();

  const validation = validateSnowflake(guildId);
  if (!validation.valid) {
    return error(validation.error!);
  }

  const reactionRoles = await prisma.reactionRole.findMany({
    where: { guildId },
    orderBy: { createdAt: 'desc' },
  });

  return json({ success: true, data: reactionRoles });
});

/**
 * GET /api/reactionroles/message/:messageId
 * Get all reaction roles for a specific message
 */
route('GET', '/api/reactionroles/message/:messageId', async req => {
  const url = new URL(req.url);
  const messageId = url.pathname.split('/').pop();

  const validation = validateSnowflake(messageId);
  if (!validation.valid) {
    return error(validation.error!);
  }

  const reactionRoles = await prisma.reactionRole.findMany({
    where: { messageId },
    orderBy: { createdAt: 'asc' },
  });

  return json({ success: true, data: reactionRoles });
});

/**
 * POST /api/reactionroles
 * Create a new reaction role
 * Body: { guildId, channelId, messageId, emoji, roleId, mode?, description? }
 */
route('POST', '/api/reactionroles', async req => {
  const validation = await validateBody(req, createReactionRoleSchema);

  if (!validation.success) {
    return error(validation.error);
  }

  const { guildId, channelId, messageId, emoji, roleId, mode, description } = validation.data;

  // Check if already exists
  const existing = await prisma.reactionRole.findUnique({
    where: {
      messageId_emoji: { messageId, emoji },
    },
  });

  if (existing) {
    return error('Reaction role with this emoji already exists for this message', 409);
  }

  const reactionRole = await prisma.reactionRole.create({
    data: {
      guildId,
      channelId,
      messageId,
      emoji,
      roleId,
      mode: (mode as RoleMode) || 'MULTIPLE',
      description: description || null,
    },
  });

  return json({ success: true, data: reactionRole }, 201);
});

/**
 * PATCH /api/reactionroles/:id
 * Update a reaction role
 * Body: { mode?, description?, roleId? }
 */
route('PATCH', '/api/reactionroles/:id', async req => {
  const url = new URL(req.url);
  const id = url.pathname.split('/').pop();

  if (!id || isNaN(Number(id))) {
    return error('Valid reaction role ID is required');
  }

  const validation = await validateBody(req, updateReactionRoleSchema);

  if (!validation.success) {
    return error(validation.error);
  }

  const { mode, description, roleId } = validation.data;

  try {
    const reactionRole = await prisma.reactionRole.update({
      where: { id },
      data: {
        ...(mode && { mode: mode as RoleMode }),
        ...(description !== undefined && { description }),
        ...(roleId && { roleId }),
      },
    });

    return json({ success: true, data: reactionRole });
  } catch (e: unknown) {
    if (e instanceof Error && e.message.includes('Record to update does not exist')) {
      return error('Reaction role not found', 404);
    }
    throw e;
  }
});

/**
 * PATCH /api/reactionroles/message/:messageId/mode
 * Change mode for all reaction roles on a message
 * Body: { mode: 'SINGLE' | 'MULTIPLE' }
 */
route('PATCH', '/api/reactionroles/message/:messageId/mode', async req => {
  const url = new URL(req.url);
  const messageId = url.pathname.split('/')[4];

  const validation = validateSnowflake(messageId);
  if (!validation.valid) {
    return error(validation.error!);
  }

  const bodyValidation = await validateBody(req, updateReactionRoleModeSchema);

  if (!bodyValidation.success) {
    return error(bodyValidation.error);
  }

  const { mode } = bodyValidation.data;

  const result = await prisma.reactionRole.updateMany({
    where: { messageId },
    data: { mode: mode as RoleMode },
  });

  return json({
    success: true,
    message: `Updated ${result.count} reaction role(s) to ${mode} mode`,
    count: result.count,
  });
});

/**
 * DELETE /api/reactionroles/:id
 * Delete a reaction role by ID
 */
route('DELETE', '/api/reactionroles/:id', async req => {
  const url = new URL(req.url);
  const id = url.pathname.split('/').pop();

  if (!id || isNaN(Number(id))) {
    return error('Valid reaction role ID is required');
  }

  try {
    await prisma.reactionRole.delete({ where: { id } });
    return json({ success: true, message: 'Reaction role deleted' });
  } catch (e: unknown) {
    if (e instanceof Error && e.message.includes('Record to delete does not exist')) {
      return error('Reaction role not found', 404);
    }
    throw e;
  }
});

/**
 * DELETE /api/reactionroles/message/:messageId
 * Delete all reaction roles for a message
 */
route('DELETE', '/api/reactionroles/message/:messageId', async req => {
  const url = new URL(req.url);
  const messageId = url.pathname.split('/')[4];

  const validation = validateSnowflake(messageId);
  if (!validation.valid) {
    return error(validation.error!);
  }

  const result = await prisma.reactionRole.deleteMany({
    where: { messageId },
  });

  return json({
    success: true,
    message: `Deleted ${result.count} reaction role(s)`,
    count: result.count,
  });
});
