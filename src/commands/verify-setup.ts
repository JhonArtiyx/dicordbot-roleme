import { Command } from '@sapphire/framework';
import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  MessageFlags,
  PermissionFlagsBits,
  TextChannel,
  type Message,
  type MessageActionRowComponentBuilder,
} from 'discord.js';

/**
 * Setup Verification Command
 * Sends a persistent message with a verification button to a specified channel
 * Only administrators can use this command
 */
export class VerifySetupCommand extends Command {
  public constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'verify-setup',
      description: 'Send verification message with button to channel (Admin only)',
    });
  }

  public override registerApplicationCommands(registry: Command.Registry) {
    registry.registerChatInputCommand(
      builder =>
        builder
          .setName(this.name)
          .setDescription(this.description)
          .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
      {
        // Auto-detect environment: use guild commands in dev for instant updates
        guildIds:
          process.env.NODE_ENV !== 'production' && process.env.GUILD_ID
            ? [process.env.GUILD_ID]
            : undefined,
      }
    );
  }

  public override async chatInputRun(interaction: Command.ChatInputCommandInteraction) {
    // Check if user is admin
    if (!interaction.memberPermissions?.has(PermissionFlagsBits.Administrator)) {
      await interaction.reply({
        content: '❌ Only administrators can use this command.',
        flags: MessageFlags.Ephemeral,
      });
      return;
    }

    // Create verification embed
    const verifyEmbed = new EmbedBuilder()
      .setColor('#0099ff')
      .setTitle('🔐 User Verification')
      .setDescription(
        'Click the button below to verify that you are a real user.\n\n' +
          '**Why verify?**\n' +
          '• Protect the server from spam bots\n' +
          '• Ensure a safe community\n' +
          '• Gain access to all channels'
      )
      .setFooter({ text: 'Your answer will be validated to confirm you are human' })
      .setTimestamp();

    // Create verify button
    const verifyButton = new ButtonBuilder()
      .setCustomId('verifyButton')
      .setLabel('✅ Verify Now')
      .setStyle(ButtonStyle.Primary)
      .setEmoji('🔓');

    const actionRow = new ActionRowBuilder<MessageActionRowComponentBuilder>().addComponents(
      verifyButton
    );

    // Send message with button to current channel
    try {
      // Ensure channel is text-based and can send messages
      if (!interaction.channel?.isTextBased()) {
        await interaction.reply({
          content: '❌ This command can only be used in text channels.',
          flags: MessageFlags.Ephemeral,
        });
        return;
      }

      const message: Message = await (interaction.channel as TextChannel).send({
        embeds: [verifyEmbed],
        components: [actionRow],
      });

      const successEmbed = new EmbedBuilder()
        .setColor('#00ff00')
        .setTitle('✅ Success')
        .setDescription(
          `Verification message sent to ${interaction.channel}.\n\n` +
            `**Message ID:** \`${message.id}\``
        );

      await interaction.reply({ embeds: [successEmbed], flags: MessageFlags.Ephemeral });
    } catch (error) {
      console.error('Error sending verification message:', error);
      await interaction.reply({
        content: '❌ Failed to send verification message. Make sure I have permissions.',
        flags: MessageFlags.Ephemeral,
      });
    }
  }
}
