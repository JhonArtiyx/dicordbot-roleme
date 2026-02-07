-- CreateTable
CREATE TABLE "verification_config" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "roleId" TEXT,
    "difficulty" TEXT NOT NULL DEFAULT 'medium',
    "question" TEXT NOT NULL DEFAULT 'What is the capital of France?',
    "answers" TEXT[] DEFAULT ARRAY['paris', 'parís', 'france']::TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "verification_config_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "verification_config_guildId_key" ON "verification_config"("guildId");

-- CreateIndex
CREATE INDEX "verification_config_guildId_idx" ON "verification_config"("guildId");
