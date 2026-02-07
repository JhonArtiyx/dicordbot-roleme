import { z } from 'zod';

/**
 * Discord Snowflake ID validation
 * Discord IDs are 17-19 character strings of digits
 */
const snowflakeSchema = z.string().regex(/^\d{17,19}$/, 'Invalid Discord ID format');

/**
 * Emoji validation - supports Unicode emojis and Discord custom emoji format <:name:id>
 */
const emojiSchema = z.string().min(1, 'Emoji is required');

/**
 * Role mode enum
 */
const roleModeSchema = z.enum(['SINGLE', 'MULTIPLE']);

/**
 * Difficulty levels for verification
 */
const difficultySchema = z.enum(['EASY', 'MEDIUM', 'HARD']);

// ==================== AUTO ROLES ====================

export const createAutoRoleSchema = z.object({
  guildId: snowflakeSchema,
  roleId: snowflakeSchema,
});

export type CreateAutoRoleInput = z.infer<typeof createAutoRoleSchema>;

// ==================== REACTION ROLES ====================

export const createReactionRoleSchema = z.object({
  guildId: snowflakeSchema,
  channelId: snowflakeSchema,
  messageId: snowflakeSchema,
  emoji: emojiSchema,
  roleId: snowflakeSchema,
  mode: roleModeSchema.optional().default('MULTIPLE'),
  description: z.string().max(200).optional().nullable(),
});

export type CreateReactionRoleInput = z.infer<typeof createReactionRoleSchema>;

export const updateReactionRoleSchema = z
  .object({
    mode: roleModeSchema.optional(),
    description: z.string().max(200).optional().nullable(),
    roleId: snowflakeSchema.optional(),
  })
  .refine(data => Object.keys(data).length > 0, {
    message: 'At least one field must be provided for update',
  });

export type UpdateReactionRoleInput = z.infer<typeof updateReactionRoleSchema>;

export const updateReactionRoleModeSchema = z.object({
  mode: roleModeSchema,
});

export type UpdateReactionRoleModeInput = z.infer<typeof updateReactionRoleModeSchema>;

// ==================== VERIFICATION ====================

export const createVerificationConfigSchema = z.object({
  guildId: snowflakeSchema,
  roleId: snowflakeSchema.optional().nullable(),
  difficulty: difficultySchema.optional().default('MEDIUM'),
  question: z.string().min(1, 'Question is required').max(500, 'Question is too long'),
  answers: z.array(z.string().min(1)).min(1, 'At least one answer is required'),
});

export type CreateVerificationConfigInput = z.infer<typeof createVerificationConfigSchema>;

export const updateVerificationConfigSchema = z
  .object({
    roleId: snowflakeSchema.optional().nullable(),
    difficulty: difficultySchema.optional(),
    question: z.string().min(1).max(500).optional(),
    answers: z.array(z.string().min(1)).min(1).optional(),
  })
  .refine(data => Object.keys(data).length > 0, {
    message: 'At least one field must be provided for update',
  });

export type UpdateVerificationConfigInput = z.infer<typeof updateVerificationConfigSchema>;

// ==================== VALIDATION HELPER ====================

/**
 * Validates request body against a Zod schema
 * Returns parsed data or null if validation fails
 */
export async function validateBody<T>(
  req: Request,
  schema: z.ZodSchema<T>
): Promise<{ success: true; data: T } | { success: false; error: string }> {
  try {
    const body = await req.json();
    const result = schema.safeParse(body);

    if (!result.success) {
      const errors = result.error.issues
        .map((issue: z.ZodIssue) => {
          const path = issue.path.length > 0 ? `${issue.path.join('.')}: ` : '';
          return `${path}${issue.message}`;
        })
        .join(', ');
      return { success: false, error: errors };
    }

    return { success: true, data: result.data };
  } catch {
    return { success: false, error: 'Invalid JSON body' };
  }
}

/**
 * Validates a Discord Snowflake ID
 */
export function validateSnowflake(id: string | undefined): { valid: boolean; error?: string } {
  if (!id) {
    return { valid: false, error: 'ID is required' };
  }

  const result = snowflakeSchema.safeParse(id);
  if (!result.success) {
    return { valid: false, error: 'Invalid Discord ID format (must be 17-19 digits)' };
  }

  return { valid: true };
}

// ==================== TICKETS ====================

/**
 * Ticket status enum
 */
const ticketStatusSchema = z.enum(['OPEN', 'CLAIMED', 'CLOSED']);

/**
 * Hex color validation
 */
const hexColorSchema = z
  .string()
  .regex(/^#[0-9A-Fa-f]{6}$/, 'Invalid hex color format (must be #RRGGBB)');

/**
 * Create ticket category
 */
export const createTicketCategorySchema = z.object({
  guildId: snowflakeSchema,
  name: z.string().min(1, 'Name is required').max(100, 'Name is too long'),
  emoji: emojiSchema.optional().nullable(),
  description: z.string().max(200, 'Description is too long').optional().nullable(),
  color: hexColorSchema.optional().default('#5865F2'),
});

export type CreateTicketCategoryInput = z.infer<typeof createTicketCategorySchema>;

/**
 * Create/Update ticket configuration
 */
export const createTicketConfigSchema = z.object({
  guildId: snowflakeSchema,
  categoryChannelId: snowflakeSchema.optional().nullable(),
  transcriptsChannelId: snowflakeSchema.optional().nullable(),
  supportRoleIds: z.array(snowflakeSchema).optional().default([]),
  maxOpenTickets: z.number().int().min(1).max(10).optional().default(3),
  autoCloseTime: z.number().int().positive().optional().nullable(),
  welcomeMessage: z.string().max(1000).optional().nullable(),
  closeMessage: z.string().max(1000).optional().nullable(),
  enableRatings: z.boolean().optional().default(true),
  enableTranscripts: z.boolean().optional().default(true),
});

export type CreateTicketConfigInput = z.infer<typeof createTicketConfigSchema>;

export const updateTicketConfigSchema = z
  .object({
    categoryChannelId: snowflakeSchema.optional().nullable(),
    transcriptsChannelId: snowflakeSchema.optional().nullable(),
    supportRoleIds: z.array(snowflakeSchema).optional(),
    maxOpenTickets: z.number().int().min(1).max(10).optional(),
    autoCloseTime: z.number().int().positive().optional().nullable(),
    welcomeMessage: z.string().max(1000).optional().nullable(),
    closeMessage: z.string().max(1000).optional().nullable(),
    enableRatings: z.boolean().optional(),
    enableTranscripts: z.boolean().optional(),
  })
  .refine(data => Object.keys(data).length > 0, {
    message: 'At least one field must be provided for update',
  });

export type UpdateTicketConfigInput = z.infer<typeof updateTicketConfigSchema>;

/**
 * Create ticket
 */
export const createTicketSchema = z.object({
  guildId: snowflakeSchema,
  userId: snowflakeSchema,
  username: z.string().min(1).max(100),
  subject: z.string().max(200).optional().nullable(),
  categoryId: z.string().cuid().optional().nullable(),
});

export type CreateTicketInput = z.infer<typeof createTicketSchema>;

/**
 * Update ticket
 */
export const updateTicketSchema = z
  .object({
    status: ticketStatusSchema.optional(),
    claimedBy: snowflakeSchema.optional().nullable(),
    closedReason: z.string().max(500).optional().nullable(),
  })
  .refine(data => Object.keys(data).length > 0, {
    message: 'At least one field must be provided for update',
  });

export type UpdateTicketInput = z.infer<typeof updateTicketSchema>;

/**
 * Close ticket
 */
export const closeTicketSchema = z.object({
  closedBy: snowflakeSchema,
  reason: z.string().max(500).optional().nullable(),
});

export type CloseTicketInput = z.infer<typeof closeTicketSchema>;

/**
 * Rate ticket
 */
export const rateTicketSchema = z.object({
  rating: z.number().int().min(1, 'Rating must be at least 1').max(5, 'Rating must be at most 5'),
  feedback: z.string().max(1000).optional().nullable(),
});

export type RateTicketInput = z.infer<typeof rateTicketSchema>;

/**
 * Add ticket message (for transcript)
 */
export const addTicketMessageSchema = z.object({
  userId: snowflakeSchema,
  username: z.string().min(1).max(100),
  content: z.string().min(1, 'Content is required'),
  attachments: z.array(z.string().url()).optional().default([]),
  isStaff: z.boolean().optional().default(false),
});

export type AddTicketMessageInput = z.infer<typeof addTicketMessageSchema>;

// ==================== LEVEL SYSTEM ====================

/**
 * Create level config
 */
export const createLevelConfigSchema = z.object({
  guildId: snowflakeSchema,
  enabled: z.boolean().optional().default(true),
  xpMin: z.number().int().min(1).max(100).optional().default(15),
  xpMax: z.number().int().min(1).max(100).optional().default(25),
  xpCooldown: z.number().int().min(0).max(300000).optional().default(60000), // Max 5 minutes
  levelUpChannelId: snowflakeSchema.optional().nullable(),
  levelUpMessage: z
    .string()
    .max(500)
    .optional()
    .default("🎉 Congratulations {user}! You've reached **Level {level}**!"),
  ignoredChannelIds: z.array(snowflakeSchema).optional().default([]),
  ignoredRoleIds: z.array(snowflakeSchema).optional().default([]),
  stackRoles: z.boolean().optional().default(true),
  announceInDm: z.boolean().optional().default(false),
});

export type CreateLevelConfigInput = z.infer<typeof createLevelConfigSchema>;

/**
 * Update level config
 */
export const updateLevelConfigSchema = z
  .object({
    enabled: z.boolean().optional(),
    xpMin: z.number().int().min(1).max(100).optional(),
    xpMax: z.number().int().min(1).max(100).optional(),
    xpCooldown: z.number().int().min(0).max(300000).optional(),
    levelUpChannelId: snowflakeSchema.optional().nullable(),
    levelUpMessage: z.string().max(500).optional(),
    ignoredChannelIds: z.array(snowflakeSchema).optional(),
    ignoredRoleIds: z.array(snowflakeSchema).optional(),
    stackRoles: z.boolean().optional(),
    announceInDm: z.boolean().optional(),
  })
  .refine(data => Object.keys(data).length > 0, {
    message: 'At least one field must be provided for update',
  })
  .refine(
    data => {
      if (data.xpMin !== undefined && data.xpMax !== undefined) {
        return data.xpMin <= data.xpMax;
      }
      return true;
    },
    {
      message: 'xpMin must be less than or equal to xpMax',
    }
  );

export type UpdateLevelConfigInput = z.infer<typeof updateLevelConfigSchema>;

/**
 * Update user level (admin action)
 */
export const updateUserLevelSchema = z
  .object({
    guildId: snowflakeSchema,
    userId: snowflakeSchema,
    xp: z.number().int().min(0).optional(),
    level: z.number().int().min(0).optional(),
    action: z.enum(['set', 'add', 'remove']).optional().default('set'),
  })
  .refine(data => data.xp !== undefined || data.level !== undefined, {
    message: 'Either xp or level must be provided',
  });

export type UpdateUserLevelInput = z.infer<typeof updateUserLevelSchema>;

/**
 * Create level reward
 */
export const createLevelRewardSchema = z.object({
  guildId: snowflakeSchema,
  level: z.number().int().min(1).max(1000),
  roleId: snowflakeSchema,
});

export type CreateLevelRewardInput = z.infer<typeof createLevelRewardSchema>;

// ==================== SERVER STATS CHANNELS ====================

/**
 * Create stats channel config
 */
export const createStatsChannelConfigSchema = z.object({
  guildId: snowflakeSchema,
  categoryId: snowflakeSchema.optional().nullable(),
  totalMembersChannelId: snowflakeSchema.optional().nullable(),
  humanMembersChannelId: snowflakeSchema.optional().nullable(),
  botMembersChannelId: snowflakeSchema.optional().nullable(),
  onlineMembersChannelId: snowflakeSchema.optional().nullable(),
});

export type CreateStatsChannelConfigInput = z.infer<typeof createStatsChannelConfigSchema>;

/**
 * Update stats channel config
 */
export const updateStatsChannelConfigSchema = z
  .object({
    categoryId: snowflakeSchema.optional().nullable(),
    totalMembersChannelId: snowflakeSchema.optional().nullable(),
    humanMembersChannelId: snowflakeSchema.optional().nullable(),
    botMembersChannelId: snowflakeSchema.optional().nullable(),
    onlineMembersChannelId: snowflakeSchema.optional().nullable(),
  })
  .refine(data => Object.keys(data).length > 0, {
    message: 'At least one field must be provided for update',
  });

export type UpdateStatsChannelConfigInput = z.infer<typeof updateStatsChannelConfigSchema>;
