import { Events, Listener } from '@sapphire/framework';
import { GuildMember, EmbedBuilder, type GuildBasedChannel } from 'discord.js';
import { getPrismaClient } from '../lib/prisma';
import { scheduleStatsChannelUpdate } from '../lib/stats/handlers/statsChannels';

const prisma = getPrismaClient();

/**
 * Guild Member Add Listener
 * Sends welcome message to new members and assigns auto roles
 */
export class GuildMemberAddListener extends Listener<typeof Events.GuildMemberAdd> {
  public constructor(context: Listener.LoaderContext, options: Listener.Options) {
    super(context, { ...options, event: Events.GuildMemberAdd });
  }

  public async run(member: GuildMember) {
    // Assign auto roles
    await this.assignAutoRoles(member);

    // Send welcome message
    await this.sendWelcomeMessage(member);

    // Update stats channels
    scheduleStatsChannelUpdate(member.guild);
  }

  /**
   * Assign auto roles to new member
   */
  private async assignAutoRoles(member: GuildMember) {
    try {
      // Get all auto roles for this guild
      const autoRoles = await prisma.autoRole.findMany({
        where: { guildId: member.guild.id },
      });

      if (autoRoles.length === 0) return;

      // Assign each role
      for (const autoRole of autoRoles) {
        const role = member.guild.roles.cache.get(autoRole.roleId);
        if (role) {
          try {
            await member.roles.add(role);
            // eslint-disable-next-line no-console
            console.log(`Assigned auto role ${role.name} to ${member.user.tag}`);
          } catch (error) {
            console.error(`Failed to assign role ${role.name} to ${member.user.tag}:`, error);
          }
        } else {
          console.warn(
            `Auto role ${autoRole.roleId} not found in guild ${member.guild.id}, may have been deleted`
          );
        }
      }
    } catch (error) {
      console.error('Error assigning auto roles:', error);
    }
  }

  /**
   * Send welcome message to new member
   */
  private async sendWelcomeMessage(member: GuildMember) {
    try {
      // Find verification channel (you can customize this)
      const verificationChannel = member.guild.channels.cache.find(
        (ch: GuildBasedChannel) =>
          ch.isTextBased() && (ch.name.includes('verify') || ch.name.includes('verification'))
      );

      // If no verification channel found, try general/welcome channels
      if (!verificationChannel) {
        const generalChannel = member.guild.channels.cache.find(
          (ch: GuildBasedChannel) =>
            ch.isTextBased() && (ch.name === 'general' || ch.name === 'welcome')
        );

        if (!generalChannel) return;
      }

      const channel = verificationChannel || member.guild.systemChannel;

      // Create welcome embed
      const welcomeEmbed = new EmbedBuilder()
        .setColor('#0099ff')
        .setTitle(`Welcome ${member.user.username}!`)
        .setDescription(
          'Thanks for joining our community! 🎉\n\n' +
            'Please verify yourself to gain access to all channels.\n\n' +
            'Click the verification button in the **#verification** channel to get started.'
        )
        .setThumbnail(member.user.displayAvatarURL({ size: 256 }))
        .setFooter({ text: 'Verification helps us keep the community safe' })
        .setTimestamp();

      // Send welcome message
      if (channel?.isTextBased()) {
        await channel.send({
          content: `${member}`,
          embeds: [welcomeEmbed],
        });
      }
    } catch (error) {
      console.error('Error sending welcome message:', error);
    }
  }
}
