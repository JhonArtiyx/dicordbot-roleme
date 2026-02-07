-- CreateEnum
CREATE TYPE "TicketStatus" AS ENUM ('OPEN', 'CLAIMED', 'CLOSED');

-- CreateTable
CREATE TABLE "ticket_configs" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "categoryChannelId" TEXT,
    "transcriptsChannelId" TEXT,
    "supportRoleIds" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "maxOpenTickets" INTEGER NOT NULL DEFAULT 3,
    "autoCloseTime" INTEGER DEFAULT 86400000,
    "welcomeMessage" TEXT DEFAULT 'Thank you for contacting support! A staff member will be with you shortly.',
    "closeMessage" TEXT DEFAULT 'This ticket has been closed. If you need further assistance, please open a new ticket.',
    "enableRatings" BOOLEAN NOT NULL DEFAULT true,
    "enableTranscripts" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ticket_configs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ticket_categories" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "emoji" TEXT,
    "description" TEXT,
    "color" TEXT NOT NULL DEFAULT '#5865F2',
    "configId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ticket_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tickets" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "channelId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "claimedBy" TEXT,
    "status" "TicketStatus" NOT NULL DEFAULT 'OPEN',
    "subject" TEXT,
    "categoryId" TEXT,
    "configId" TEXT NOT NULL,
    "closedAt" TIMESTAMP(3),
    "closedBy" TEXT,
    "closedReason" TEXT,
    "transcriptUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tickets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ticket_messages" (
    "id" TEXT NOT NULL,
    "ticketId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "attachments" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "isStaff" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ticket_messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ticket_ratings" (
    "id" TEXT NOT NULL,
    "ticketId" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "feedback" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ticket_ratings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ticket_configs_guildId_key" ON "ticket_configs"("guildId");

-- CreateIndex
CREATE INDEX "ticket_configs_guildId_idx" ON "ticket_configs"("guildId");

-- CreateIndex
CREATE INDEX "ticket_categories_guildId_idx" ON "ticket_categories"("guildId");

-- CreateIndex
CREATE UNIQUE INDEX "ticket_categories_configId_name_key" ON "ticket_categories"("configId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "tickets_channelId_key" ON "tickets"("channelId");

-- CreateIndex
CREATE INDEX "tickets_guildId_idx" ON "tickets"("guildId");

-- CreateIndex
CREATE INDEX "tickets_userId_idx" ON "tickets"("userId");

-- CreateIndex
CREATE INDEX "tickets_status_idx" ON "tickets"("status");

-- CreateIndex
CREATE INDEX "tickets_channelId_idx" ON "tickets"("channelId");

-- CreateIndex
CREATE INDEX "ticket_messages_ticketId_idx" ON "ticket_messages"("ticketId");

-- CreateIndex
CREATE INDEX "ticket_messages_createdAt_idx" ON "ticket_messages"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "ticket_ratings_ticketId_key" ON "ticket_ratings"("ticketId");

-- CreateIndex
CREATE INDEX "ticket_ratings_rating_idx" ON "ticket_ratings"("rating");

-- AddForeignKey
ALTER TABLE "ticket_categories" ADD CONSTRAINT "ticket_categories_configId_fkey" FOREIGN KEY ("configId") REFERENCES "ticket_configs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tickets" ADD CONSTRAINT "tickets_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "ticket_categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tickets" ADD CONSTRAINT "tickets_configId_fkey" FOREIGN KEY ("configId") REFERENCES "ticket_configs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ticket_messages" ADD CONSTRAINT "ticket_messages_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "tickets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ticket_ratings" ADD CONSTRAINT "ticket_ratings_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "tickets"("id") ON DELETE CASCADE ON UPDATE CASCADE;
