-- CreateEnum
CREATE TYPE "RoleMode" AS ENUM ('SINGLE', 'MULTIPLE');

-- CreateTable
CREATE TABLE "auto_roles" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "roleId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "auto_roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reaction_roles" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "channelId" TEXT NOT NULL,
    "messageId" TEXT NOT NULL,
    "emoji" TEXT NOT NULL,
    "roleId" TEXT NOT NULL,
    "mode" "RoleMode" NOT NULL DEFAULT 'MULTIPLE',
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "reaction_roles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "auto_roles_guildId_idx" ON "auto_roles"("guildId");

-- CreateIndex
CREATE UNIQUE INDEX "auto_roles_guildId_roleId_key" ON "auto_roles"("guildId", "roleId");

-- CreateIndex
CREATE INDEX "reaction_roles_guildId_idx" ON "reaction_roles"("guildId");

-- CreateIndex
CREATE INDEX "reaction_roles_messageId_idx" ON "reaction_roles"("messageId");

-- CreateIndex
CREATE UNIQUE INDEX "reaction_roles_messageId_emoji_key" ON "reaction_roles"("messageId", "emoji");
