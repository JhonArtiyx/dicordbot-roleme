import { route, json, error } from '../index';
import { getPrismaClient } from '../../lib/prisma';
import {
  createVerificationConfigSchema,
  updateVerificationConfigSchema,
  validateBody,
  validateSnowflake,
} from '../schemas';

const prisma = getPrismaClient();

/**
 * GET /api/verification/:guildId
 * Get verification config for a guild
 */
route('GET', '/api/verification/:guildId', async req => {
  const url = new URL(req.url);
  const guildId = url.pathname.split('/').pop();

  const validation = validateSnowflake(guildId);
  if (!validation.valid) {
    return error(validation.error!);
  }

  const config = await prisma.verificationConfig.findUnique({
    where: { guildId },
  });

  if (!config) {
    return error('Verification config not found for this guild', 404);
  }

  return json({ success: true, data: config });
});

/**
 * POST /api/verification
 * Create a new verification config
 * Body: { guildId, roleId?, difficulty?, question, answers[] }
 */
route('POST', '/api/verification', async req => {
  const validation = await validateBody(req, createVerificationConfigSchema);

  if (!validation.success) {
    return error(validation.error);
  }

  const { guildId, roleId, difficulty, question, answers } = validation.data;

  // Check if config already exists
  const existing = await prisma.verificationConfig.findUnique({
    where: { guildId },
  });

  if (existing) {
    return error('Verification config already exists for this guild. Use PATCH to update.', 409);
  }

  const config = await prisma.verificationConfig.create({
    data: {
      guildId,
      roleId: roleId || null,
      difficulty: difficulty || 'MEDIUM',
      question,
      answers,
    },
  });

  return json(
    { success: true, data: config, message: 'Verification config created successfully' },
    201
  );
});

/**
 * PATCH /api/verification/:guildId
 * Update verification config
 * Body: { roleId?, difficulty?, question?, answers[]? }
 */
route('PATCH', '/api/verification/:guildId', async req => {
  const url = new URL(req.url);
  const guildId = url.pathname.split('/').pop();

  const idValidation = validateSnowflake(guildId);
  if (!idValidation.valid) {
    return error(idValidation.error!);
  }

  const validation = await validateBody(req, updateVerificationConfigSchema);

  if (!validation.success) {
    return error(validation.error);
  }

  const { roleId, difficulty, question, answers } = validation.data;

  // Check if config exists
  const existing = await prisma.verificationConfig.findUnique({
    where: { guildId },
  });

  if (!existing) {
    return error('Verification config not found for this guild', 404);
  }

  // Build update data
  const updateData: Record<string, unknown> = {};
  if (roleId !== undefined) updateData.roleId = roleId;
  if (difficulty !== undefined) updateData.difficulty = difficulty;
  if (question !== undefined) updateData.question = question;
  if (answers !== undefined) updateData.answers = answers;

  const config = await prisma.verificationConfig.update({
    where: { guildId },
    data: updateData,
  });

  return json({ success: true, data: config, message: 'Verification config updated successfully' });
});

/**
 * DELETE /api/verification/:guildId
 * Delete verification config
 */
route('DELETE', '/api/verification/:guildId', async req => {
  const url = new URL(req.url);
  const guildId = url.pathname.split('/').pop();

  const validation = validateSnowflake(guildId);
  if (!validation.valid) {
    return error(validation.error!);
  }

  // Check if config exists
  const existing = await prisma.verificationConfig.findUnique({
    where: { guildId },
  });

  if (!existing) {
    return error('Verification config not found for this guild', 404);
  }

  await prisma.verificationConfig.delete({
    where: { guildId },
  });

  return json({ success: true, message: 'Verification config deleted successfully' });
});
