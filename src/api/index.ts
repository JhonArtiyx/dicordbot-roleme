import 'dotenv/config';

/**
 * Discord Bot Dashboard API
 * REST API for managing bot configuration via web dashboard
 */

const API_PORT = parseInt(process.env.API_PORT || '3000');
const API_KEY = process.env.API_KEY || 'change-me-in-production';

// Simple router implementation
const routes: Record<string, Record<string, (req: Request) => Promise<Response>>> = {
  GET: {},
  POST: {},
  PUT: {},
  DELETE: {},
  PATCH: {},
};

// Register route helper
function route(method: string, path: string, handler: (req: Request) => Promise<Response>) {
  routes[method][path] = handler;
}

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-API-Key',
};

// Auth middleware
function requireAuth(req: Request): Response | null {
  const apiKey =
    req.headers.get('X-API-Key') || req.headers.get('Authorization')?.replace('Bearer ', '');

  if (!apiKey || apiKey !== API_KEY) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  return null;
}

// JSON response helper
function json(data: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...corsHeaders },
  });
}

// Error response helper
function error(message: string, status = 400) {
  return json({ error: message }, status);
}

// Health check
route('GET', '/health', async () => {
  return json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API info
route('GET', '/', async () => {
  return json({
    name: 'Discord Bot Dashboard API',
    version: '1.0.0',
    endpoints: {
      autoroles: '/api/autoroles',
      reactionroles: '/api/reactionroles',
      verification: '/api/verification',
      tickets: '/api/tickets',
      levels: '/api/levels',
      stats: '/api/stats',
    },
  });
});

// Export for use in route handlers (must be before imports)
export { route, json, error, requireAuth };

// Import route handlers to register them (using dynamic imports to avoid hoisting issues)
await import('./routes/autoroles');
await import('./routes/reactionroles');
await import('./routes/verification');
await import('./routes/tickets');
await import('./routes/levels');
await import('./routes/stats');

// Main request handler
Bun.serve({
  port: API_PORT,
  async fetch(req) {
    const url = new URL(req.url);
    const method = req.method;

    // Handle CORS preflight
    if (method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    // Match route
    const handler = routes[method]?.[url.pathname];

    if (!handler) {
      return error('Route not found', 404);
    }

    // Check auth for protected routes
    if (url.pathname.startsWith('/api/') && url.pathname !== '/api/health') {
      const authError = requireAuth(req);
      if (authError) return authError;
    }

    try {
      return await handler(req);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Internal server error';
      // eslint-disable-next-line no-console
      console.error('API Error:', err);
      return error(message, 500);
    }
  },
});

// eslint-disable-next-line no-console
console.log(`🚀 API server running on http://localhost:${API_PORT}`);
// eslint-disable-next-line no-console
console.log(
  `📝 API Key: ${API_KEY === 'change-me-in-production' ? '⚠️  WARNING: Using default API key!' : '✅ Custom key set'}`
);
