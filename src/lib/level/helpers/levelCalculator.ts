/**
 * Level System Helper Functions
 * Calculations for XP, levels, and rewards
 */

/**
 * Calculate level from XP
 * Formula: level = floor(0.1 * sqrt(xp))
 */
export function calculateLevel(xp: number): number {
  return Math.floor(0.1 * Math.sqrt(xp));
}

/**
 * Calculate XP required for a specific level
 * Formula: xp = (level / 0.1)^2
 */
export function calculateXpForLevel(level: number): number {
  return Math.floor(Math.pow(level / 0.1, 2));
}

/**
 * Calculate XP needed to reach next level
 */
export function calculateXpToNextLevel(currentXp: number): number {
  const currentLevel = calculateLevel(currentXp);
  const nextLevelXp = calculateXpForLevel(currentLevel + 1);
  return nextLevelXp - currentXp;
}

/**
 * Calculate progress percentage to next level
 */
export function calculateLevelProgress(currentXp: number): number {
  const currentLevel = calculateLevel(currentXp);
  const currentLevelXp = calculateXpForLevel(currentLevel);
  const nextLevelXp = calculateXpForLevel(currentLevel + 1);

  const progress = ((currentXp - currentLevelXp) / (nextLevelXp - currentLevelXp)) * 100;
  return Math.min(100, Math.max(0, progress));
}

/**
 * Generate random XP amount within configured range
 */
export function generateXp(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Format XP number with commas
 */
export function formatXp(xp: number): string {
  return xp.toLocaleString();
}

/**
 * Calculate estimated messages needed for next level
 * Based on average XP per message
 */
export function estimateMessagesForNextLevel(currentXp: number, avgXpPerMessage: number): number {
  const xpNeeded = calculateXpToNextLevel(currentXp);
  return Math.ceil(xpNeeded / avgXpPerMessage);
}

/**
 * Get color for level (gradient from green to gold)
 */
export function getLevelColor(level: number): number {
  if (level < 10) return 0x2ecc71; // Green
  if (level < 25) return 0x3498db; // Blue
  if (level < 50) return 0x9b59b6; // Purple
  if (level < 75) return 0xe74c3c; // Red
  if (level < 100) return 0xe67e22; // Orange
  return 0xf1c40f; // Gold
}

/**
 * Generate progress bar string
 */
export function generateProgressBar(percentage: number, length = 20): string {
  const filled = Math.round((percentage / 100) * length);
  const empty = length - filled;
  return '█'.repeat(filled) + '░'.repeat(empty);
}
