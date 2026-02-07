import { route, json, error } from '../index';
import { getPrismaClient } from '../../lib/prisma';
import {
  createTicketConfigSchema,
  updateTicketConfigSchema,
  createTicketCategorySchema,
  createTicketSchema,
  updateTicketSchema,
  closeTicketSchema,
  rateTicketSchema,
  addTicketMessageSchema,
  validateBody,
  validateSnowflake,
} from '../schemas';

const prisma = getPrismaClient();

// ==================== CONFIG ENDPOINTS ====================

/**
 * GET /api/tickets/config/:guildId
 * Get ticket configuration for a guild
 */
route('GET', '/api/tickets/config/:guildId', async req => {
  const url = new URL(req.url);
  const guildId = url.pathname.split('/').pop();

  const validation = validateSnowflake(guildId);
  if (!validation.valid) {
    return error(validation.error!);
  }

  const config = await prisma.ticketConfig.findUnique({
    where: { guildId },
    include: {
      categories: {
        orderBy: { createdAt: 'asc' },
      },
    },
  });

  return json({ success: true, data: config });
});

/**
 * POST /api/tickets/config
 * Create ticket configuration for a guild
 */
route('POST', '/api/tickets/config', async req => {
  const validation = await validateBody(req, createTicketConfigSchema);
  if (!validation.success) {
    return error(validation.error);
  }

  const { guildId, ...data } = validation.data;

  // Check if config already exists
  const existing = await prisma.ticketConfig.findUnique({
    where: { guildId },
  });

  if (existing) {
    return error('Ticket configuration already exists for this guild. Use PUT to update.');
  }

  const config = await prisma.ticketConfig.create({
    data: {
      guildId,
      ...data,
    },
    include: {
      categories: true,
    },
  });

  return json({ success: true, data: config });
});

/**
 * PUT /api/tickets/config/:guildId
 * Update ticket configuration
 */
route('PUT', '/api/tickets/config/:guildId', async req => {
  const url = new URL(req.url);
  const guildId = url.pathname.split('/').pop();

  const idValidation = validateSnowflake(guildId);
  if (!idValidation.valid) {
    return error(idValidation.error!);
  }

  const validation = await validateBody(req, updateTicketConfigSchema);
  if (!validation.success) {
    return error(validation.error);
  }

  // Check if config exists
  const existing = await prisma.ticketConfig.findUnique({
    where: { guildId },
  });

  if (!existing) {
    return error('Ticket configuration not found for this guild');
  }

  const config = await prisma.ticketConfig.update({
    where: { guildId },
    data: validation.data,
    include: {
      categories: true,
    },
  });

  return json({ success: true, data: config });
});

// ==================== CATEGORY ENDPOINTS ====================

/**
 * GET /api/tickets/categories/:guildId
 * Get all ticket categories for a guild
 */
route('GET', '/api/tickets/categories/:guildId', async req => {
  const url = new URL(req.url);
  const guildId = url.pathname.split('/').pop();

  const validation = validateSnowflake(guildId);
  if (!validation.valid) {
    return error(validation.error!);
  }

  const categories = await prisma.ticketCategory.findMany({
    where: { guildId },
    orderBy: { createdAt: 'asc' },
    include: {
      _count: {
        select: { tickets: true },
      },
    },
  });

  return json({ success: true, data: categories });
});

/**
 * POST /api/tickets/categories
 * Create a ticket category
 */
route('POST', '/api/tickets/categories', async req => {
  const validation = await validateBody(req, createTicketCategorySchema);
  if (!validation.success) {
    return error(validation.error);
  }

  const { guildId, ...data } = validation.data;

  // Get or create config
  let config = await prisma.ticketConfig.findUnique({ where: { guildId } });

  if (!config) {
    config = await prisma.ticketConfig.create({
      data: { guildId },
    });
  }

  const category = await prisma.ticketCategory.create({
    data: {
      guildId,
      configId: config.id,
      ...data,
    },
  });

  return json({ success: true, data: category });
});

/**
 * DELETE /api/tickets/categories/:categoryId
 * Delete a ticket category
 */
route('DELETE', '/api/tickets/categories/:categoryId', async req => {
  const url = new URL(req.url);
  const categoryId = url.pathname.split('/').pop();

  if (!categoryId) {
    return error('Category ID is required');
  }

  // Check if category exists
  const category = await prisma.ticketCategory.findUnique({
    where: { id: categoryId },
  });

  if (!category) {
    return error('Category not found');
  }

  await prisma.ticketCategory.delete({
    where: { id: categoryId },
  });

  return json({ success: true, message: 'Category deleted successfully' });
});

// ==================== TICKET ENDPOINTS ====================

/**
 * GET /api/tickets/:guildId
 * List all tickets for a guild with optional filters
 */
route('GET', '/api/tickets/:guildId', async req => {
  const url = new URL(req.url);
  const guildId = url.pathname.split('/')[3]; // /api/tickets/:guildId

  const validation = validateSnowflake(guildId);
  if (!validation.valid) {
    return error(validation.error!);
  }

  // Parse query parameters
  const status = url.searchParams.get('status');
  const userId = url.searchParams.get('userId');
  const categoryId = url.searchParams.get('categoryId');

  const where: Record<string, unknown> = { guildId };

  if (status) {
    where.status = status;
  }
  if (userId) {
    where.userId = userId;
  }
  if (categoryId) {
    where.categoryId = categoryId;
  }

  const tickets = await prisma.ticket.findMany({
    where,
    orderBy: { createdAt: 'desc' },
    include: {
      category: true,
      rating: true,
      _count: {
        select: { messages: true },
      },
    },
  });

  return json({ success: true, data: tickets });
});

/**
 * GET /api/tickets/detail/:ticketId
 * Get a specific ticket with full details
 */
route('GET', '/api/tickets/detail/:ticketId', async req => {
  const url = new URL(req.url);
  const ticketId = url.pathname.split('/').pop();

  if (!ticketId) {
    return error('Ticket ID is required');
  }

  const ticket = await prisma.ticket.findUnique({
    where: { id: ticketId },
    include: {
      category: true,
      rating: true,
      messages: {
        orderBy: { createdAt: 'asc' },
      },
    },
  });

  if (!ticket) {
    return error('Ticket not found');
  }

  return json({ success: true, data: ticket });
});

/**
 * POST /api/tickets
 * Create a new ticket
 */
route('POST', '/api/tickets', async req => {
  const validation = await validateBody(req, createTicketSchema);
  if (!validation.success) {
    return error(validation.error);
  }

  const { guildId, categoryId, ...ticketData } = validation.data;

  // Get or create config
  let config = await prisma.ticketConfig.findUnique({ where: { guildId } });

  if (!config) {
    config = await prisma.ticketConfig.create({
      data: { guildId },
    });
  }

  // Check max open tickets
  const openTicketsCount = await prisma.ticket.count({
    where: {
      guildId,
      userId: ticketData.userId,
      status: { in: ['OPEN', 'CLAIMED'] },
    },
  });

  if (openTicketsCount >= config.maxOpenTickets) {
    return error(
      `User has reached the maximum of ${config.maxOpenTickets} open tickets. Please close an existing ticket first.`
    );
  }

  // Verify category if provided
  if (categoryId) {
    const category = await prisma.ticketCategory.findUnique({
      where: { id: categoryId },
    });

    if (!category || category.guildId !== guildId) {
      return error('Invalid ticket category');
    }
  }

  const ticket = await prisma.ticket.create({
    data: {
      guildId,
      configId: config.id,
      categoryId: categoryId || null,
      channelId: '', // Will be set when channel is created in Discord
      ...ticketData,
    },
    include: {
      category: true,
    },
  });

  return json({ success: true, data: ticket });
});

/**
 * PUT /api/tickets/:ticketId
 * Update a ticket
 */
route('PUT', '/api/tickets/:ticketId', async req => {
  const url = new URL(req.url);
  const ticketId = url.pathname.split('/').pop();

  if (!ticketId) {
    return error('Ticket ID is required');
  }

  const validation = await validateBody(req, updateTicketSchema);
  if (!validation.success) {
    return error(validation.error);
  }

  // Check if ticket exists
  const existing = await prisma.ticket.findUnique({
    where: { id: ticketId },
  });

  if (!existing) {
    return error('Ticket not found');
  }

  const ticket = await prisma.ticket.update({
    where: { id: ticketId },
    data: validation.data,
    include: {
      category: true,
      rating: true,
    },
  });

  return json({ success: true, data: ticket });
});

/**
 * POST /api/tickets/:ticketId/close
 * Close a ticket
 */
route('POST', '/api/tickets/:ticketId/close', async req => {
  const url = new URL(req.url);
  const parts = url.pathname.split('/');
  const ticketId = parts[parts.length - 2]; // /api/tickets/:ticketId/close

  if (!ticketId) {
    return error('Ticket ID is required');
  }

  const validation = await validateBody(req, closeTicketSchema);
  if (!validation.success) {
    return error(validation.error);
  }

  // Check if ticket exists
  const existing = await prisma.ticket.findUnique({
    where: { id: ticketId },
  });

  if (!existing) {
    return error('Ticket not found');
  }

  if (existing.status === 'CLOSED') {
    return error('Ticket is already closed');
  }

  const ticket = await prisma.ticket.update({
    where: { id: ticketId },
    data: {
      status: 'CLOSED',
      closedAt: new Date(),
      closedBy: validation.data.closedBy,
      closedReason: validation.data.reason,
    },
    include: {
      category: true,
      rating: true,
    },
  });

  return json({ success: true, data: ticket });
});

/**
 * POST /api/tickets/:ticketId/rating
 * Rate a ticket
 */
route('POST', '/api/tickets/:ticketId/rating', async req => {
  const url = new URL(req.url);
  const parts = url.pathname.split('/');
  const ticketId = parts[parts.length - 2]; // /api/tickets/:ticketId/rating

  if (!ticketId) {
    return error('Ticket ID is required');
  }

  const validation = await validateBody(req, rateTicketSchema);
  if (!validation.success) {
    return error(validation.error);
  }

  // Check if ticket exists
  const ticket = await prisma.ticket.findUnique({
    where: { id: ticketId },
    include: { rating: true },
  });

  if (!ticket) {
    return error('Ticket not found');
  }

  if (ticket.status !== 'CLOSED') {
    return error('Can only rate closed tickets');
  }

  if (ticket.rating) {
    return error('Ticket has already been rated');
  }

  const rating = await prisma.ticketRating.create({
    data: {
      ticketId,
      rating: validation.data.rating,
      feedback: validation.data.feedback,
    },
  });

  return json({ success: true, data: rating });
});

/**
 * POST /api/tickets/:ticketId/messages
 * Add a message to ticket (for transcript)
 */
route('POST', '/api/tickets/:ticketId/messages', async req => {
  const url = new URL(req.url);
  const parts = url.pathname.split('/');
  const ticketId = parts[parts.length - 2]; // /api/tickets/:ticketId/messages

  if (!ticketId) {
    return error('Ticket ID is required');
  }

  const validation = await validateBody(req, addTicketMessageSchema);
  if (!validation.success) {
    return error(validation.error);
  }

  // Check if ticket exists
  const ticket = await prisma.ticket.findUnique({
    where: { id: ticketId },
  });

  if (!ticket) {
    return error('Ticket not found');
  }

  const message = await prisma.ticketMessage.create({
    data: {
      ticketId,
      ...validation.data,
    },
  });

  return json({ success: true, data: message });
});

// ==================== STATS ENDPOINTS ====================

/**
 * GET /api/tickets/stats/:guildId
 * Get ticket statistics for a guild
 */
route('GET', '/api/tickets/stats/:guildId', async req => {
  const url = new URL(req.url);
  const guildId = url.pathname.split('/').pop();

  const validation = validateSnowflake(guildId);
  if (!validation.valid) {
    return error(validation.error!);
  }

  const [totalTickets, openTickets, claimedTickets, closedTickets, avgRating] = await Promise.all([
    prisma.ticket.count({ where: { guildId } }),
    prisma.ticket.count({ where: { guildId, status: 'OPEN' } }),
    prisma.ticket.count({ where: { guildId, status: 'CLAIMED' } }),
    prisma.ticket.count({ where: { guildId, status: 'CLOSED' } }),
    prisma.ticketRating.aggregate({
      where: {
        ticket: { guildId },
      },
      _avg: { rating: true },
      _count: true,
    }),
  ]);

  // Get tickets by category
  const ticketsByCategory = await prisma.ticketCategory.findMany({
    where: { guildId },
    select: {
      id: true,
      name: true,
      _count: {
        select: { tickets: true },
      },
    },
  });

  // Get recent activity (last 7 days)
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const recentTickets = await prisma.ticket.count({
    where: {
      guildId,
      createdAt: { gte: sevenDaysAgo },
    },
  });

  const stats = {
    total: totalTickets,
    open: openTickets,
    claimed: claimedTickets,
    closed: closedTickets,
    recent7Days: recentTickets,
    averageRating: avgRating._avg.rating || 0,
    totalRatings: avgRating._count,
    byCategory: ticketsByCategory.map(cat => ({
      category: cat.name,
      count: cat._count.tickets,
    })),
  };

  return json({ success: true, data: stats });
});
