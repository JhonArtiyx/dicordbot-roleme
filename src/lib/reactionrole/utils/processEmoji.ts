import type { Guild } from 'discord.js';

/**
 * Process emoji from various formats to a single valid format for discord.js
 * Supports: Unicode emoji (🇲🇽), Custom emoji ID (123456789), Custom emoji format (<:name:id>)
 */
export function processEmoji(input: string, guild: Guild): string | null {
  // Trim input
  const emoji = input.trim();

  // Check if it's just a number (custom emoji ID)
  if (/^\d{17,20}$/.test(emoji)) {
    return emoji; // Valid emoji ID
  }

  // Check if it's a Discord format custom emoji <:name:id>
  const customEmojiMatch = emoji.match(/^<a?:(\w+):(\d{17,20})>$/);
  if (customEmojiMatch) {
    return customEmojiMatch[2]; // Return just the ID
  }

  // Check if it's Discord shortcode format :flag_mx: or :emoji_name:
  const shortcodeMatch = emoji.match(/^:([a-z0-9_+-]+):$/i);
  if (shortcodeMatch) {
    const emojiName = shortcodeMatch[1];

    // Try to find custom emoji in the guild
    const guildEmoji = guild.emojis.cache.find(
      e => e.name?.toLowerCase() === emojiName.toLowerCase()
    );
    if (guildEmoji) {
      return `<${guildEmoji.animated ? 'a' : ''}:${guildEmoji.name}:${guildEmoji.id}>`;
    }

    // Common flag emoji mapping for common country codes
    const flagMap: Record<string, string> = {
      flag_mx: '🇲🇽', // Mexico
      flag_ar: '🇦🇷', // Argentina
      flag_br: '🇧🇷', // Brazil
      flag_cl: '🇨🇱', // Chile
      flag_co: '🇨🇴', // Colombia
      flag_pe: '🇵🇪', // Peru
      flag_ve: '🇻🇪', // Venezuela
      flag_es: '🇪🇸', // Spain
      flag_us: '🇺🇸', // USA
      flag_gb: '🇬🇧', // UK
    };

    const mappedEmoji = flagMap[emojiName.toLowerCase()];
    if (mappedEmoji) {
      return mappedEmoji;
    }

    // If not found in flag map, return null as it's not a valid emoji
    return null;
  }

  // If none of the above, assume it's a Unicode emoji and return it
  // Discord.js will validate it when we try to react
  return emoji;
}
