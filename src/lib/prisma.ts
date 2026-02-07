import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

// Singleton instance of PrismaClient
let prisma: PrismaClient;

/**
 * Get or create a PrismaClient instance
 * Uses singleton pattern to avoid creating multiple instances
 */
export function getPrismaClient(): PrismaClient {
  if (!prisma) {
    // Create PostgreSQL pool
    const pool = new pg.Pool({
      connectionString: process.env.DATABASE_URL,
    });

    // Create Prisma adapter
    const adapter = new PrismaPg(pool);

    // Create Prisma client with adapter
    prisma = new PrismaClient({ adapter });
  }

  return prisma;
}

/**
 * Close Prisma connection
 */
export async function closePrismaClient() {
  if (prisma) {
    await prisma.$disconnect();
  }
}
