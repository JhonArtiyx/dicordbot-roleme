import { route, json, error } from '../index';
import { getPrismaClient } from '../../lib/prisma';
import { createAutoRoleSchema, validateBody, validateSnowflake } from '../schemas';

const prisma = getPrismaClient();

/**
 * GET /api/autoroles/:guildId
 * List all auto roles for a guild
 */
route('GET', '/api/autoroles/:guildId', async req => {
  const url = new URL(req.url);
  const guildId = url.pathname.split('/').pop();

  const validation = validateSnowflake(guildId);
  if (!validation.valid) {
    return error(validation.error!);
  }

  const autoRoles = await prisma.autoRole.findMany({
    where: { guildId },
    orderBy: { createdAt: 'desc' },
  });

  return json({ success: true, data: autoRoles });
});

/**
 * POST /api/autoroles
 * Create a new auto role
 * Body: { guildId, roleId }
 */
route('POST', '/api/autoroles', async req => {
  const validation = await validateBody(req, createAutoRoleSchema);

  if (!validation.success) {
    return error(validation.error);
  }

  const { guildId, roleId } = validation.data;

  // Check if already exists
  const existing = await prisma.autoRole.findUnique({
    where: {
      guildId_roleId: { guildId, roleId },
    },
  });

  if (existing) {
    return error('Auto role already exists', 409);
  }

  const autoRole = await prisma.autoRole.create({
    data: { guildId, roleId },
  });

  return json({ success: true, data: autoRole }, 201);
});

/**
 * DELETE /api/autoroles/:id
 * Delete an auto role by ID
 */
route('DELETE', '/api/autoroles/:id', async req => {
  const url = new URL(req.url);
  const id = url.pathname.split('/').pop();

  if (!id || isNaN(Number(id))) {
    return error('Valid auto role ID is required');
  }

  try {
    await prisma.autoRole.delete({ where: { id } });
    return json({ success: true, message: 'Auto role deleted' });
  } catch (e: unknown) {
    if (e instanceof Error && e.message.includes('Record to delete does not exist')) {
      return error('Auto role not found', 404);
    }
    throw e;
  }
});

/**
 * DELETE /api/autoroles/guild/:guildId/role/:roleId
 * Delete an auto role by guild and role ID
 */
route('DELETE', '/api/autoroles/guild/:guildId/role/:roleId', async req => {
  const url = new URL(req.url);
  const parts = url.pathname.split('/');
  const guildId = parts[parts.length - 3];
  const roleId = parts[parts.length - 1];

  const guildValidation = validateSnowflake(guildId);
  const roleValidation = validateSnowflake(roleId);

  if (!guildValidation.valid) {
    return error(`Guild ID: ${guildValidation.error}`);
  }
  if (!roleValidation.valid) {
    return error(`Role ID: ${roleValidation.error}`);
  }

  try {
    await prisma.autoRole.delete({
      where: {
        guildId_roleId: { guildId, roleId },
      },
    });
    return json({ success: true, message: 'Auto role deleted' });
  } catch (e: unknown) {
    if (e instanceof Error && e.message.includes('Record to delete does not exist')) {
      return error('Auto role not found', 404);
    }
    throw e;
  }
});
