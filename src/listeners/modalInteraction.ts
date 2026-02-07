import { Events, Listener } from '@sapphire/framework';
import { Interaction, EmbedBuilder, MessageFlags, type ModalSubmitInteraction } from 'discord.js';
import { getPrismaClient } from '../lib/prisma';
import { createTicketChannel } from '../lib/ticket/handlers/ticketManager';

const prisma = getPrismaClient();

/**
 * Modal Interaction Listener
 * Validates verification answers and handles ticket creation/rating
 */
export class ModalInteractionListener extends Listener<typeof Events.InteractionCreate> {
  public constructor(context: Listener.LoaderContext, options: Listener.Options) {
    super(context, { ...options, event: Events.InteractionCreate });
  }

  public async run(interaction: Interaction) {
    // Only handle modal submissions
    if (!interaction.isModalSubmit()) return;

    // Handle verify modal
    if (interaction.customId === 'verifyModal') {
      await this.handleVerifyModal(interaction as ModalSubmitInteraction<'cached'>);
    }
    // Handle ticket creation modal
    else if (interaction.customId === 'ticket_create_modal') {
      await this.handleTicketCreateModal(interaction);
    }
    // Handle ticket rating modal
    else if (interaction.customId.startsWith('ticket_rating_')) {
      await this.handleTicketRatingModal(interaction);
    }
  }

  /**
   * Validates user answer and assigns verified role if correct
   */
  private async handleVerifyModal(interaction: ModalSubmitInteraction<'cached'>) {
    try {
      if (!interaction.guild) {
        await interaction.reply({
          content: '❌ This command can only be used in a server.',
          flags: MessageFlags.Ephemeral,
        });
        return;
      }

      // Get verification config
      let config = await prisma.verificationConfig.findUnique({
        where: { guildId: interaction.guild.id },
      });

      if (!config) {
        // Create default config if it doesn't exist
        config = await prisma.verificationConfig.create({
          data: {
            guildId: interaction.guild.id,
          },
        });
      }

      // Get user answer from modal
      const userAnswer = interaction.fields
        .getTextInputValue('verifyQuestion')
        .toLowerCase()
        .trim();

      // Check if answer is correct
      const isCorrect = config.answers.some(answer => answer.toLowerCase() === userAnswer);

      if (isCorrect) {
        // Get the verified role from config or find by name
        const verifiedRole = config.roleId
          ? interaction.guild?.roles.cache.get(config.roleId)
          : interaction.guild?.roles.cache.find(role => role.name.toLowerCase() === 'verified');

        // If role exists, assign it to user
        if (verifiedRole) {
          await interaction.member?.roles.add(verifiedRole);
        } else if (config.roleId) {
          // eslint-disable-next-line no-console
          console.warn(
            `Configured verification role ${config.roleId} not found in guild ${interaction.guild.id}`
          );
        }

        // Create success embed
        const successEmbed = new EmbedBuilder()
          .setColor('#00ff00')
          .setTitle('✅ Verification Successful')
          .setDescription(
            'You have been successfully verified!\n\n' +
              (verifiedRole ? `You have been given the ${verifiedRole} role.\n\n` : '') +
              'Welcome to the community!'
          )
          .setThumbnail(interaction.user.displayAvatarURL({ size: 256 }))
          .setTimestamp();

        // Reply with success message (ephemeral - only visible to user)
        await interaction.reply({ embeds: [successEmbed], flags: MessageFlags.Ephemeral });
      } else {
        // Create failure embed
        const failEmbed = new EmbedBuilder()
          .setColor('#ff0000')
          .setTitle('❌ Verification Failed')
          .setDescription(
            'Your answer is incorrect.\n\n' +
              'Please try again by clicking the verification button.'
          )
          .setTimestamp();

        // Reply with failure message (ephemeral - only visible to user)
        await interaction.reply({ embeds: [failEmbed], flags: MessageFlags.Ephemeral });
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error processing verification:', error);
      await interaction.reply({
        content: '❌ An error occurred while processing your verification. Please try again.',
        flags: MessageFlags.Ephemeral,
      });
    }
  }

  /**
   * Handle ticket creation modal submission
   */
  private async handleTicketCreateModal(interaction: ModalSubmitInteraction) {
    try {
      const subject = interaction.fields.getTextInputValue('ticket_subject') || undefined;

      // Create ticket channel using the handler
      await createTicketChannel(interaction, undefined);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error creating ticket:', error);
      await interaction.reply({
        content: '❌ Failed to create ticket. Please try again or contact an administrator.',
        flags: MessageFlags.Ephemeral,
      });
    }
  }

  /**
   * Handle ticket rating modal submission
   */
  private async handleTicketRatingModal(interaction: ModalSubmitInteraction) {
    try {
      const ticketId = interaction.customId.replace('ticket_rating_', '');
      const ratingInput = interaction.fields.getTextInputValue('rating');
      const feedback = interaction.fields.getTextInputValue('feedback') || null;

      // Validate rating
      const rating = parseInt(ratingInput);
      if (isNaN(rating) || rating < 1 || rating > 5) {
        await interaction.reply({
          content: '❌ Invalid rating. Please enter a number between 1 and 5.',
          flags: MessageFlags.Ephemeral,
        });
        return;
      }

      // Save rating to database
      await prisma.ticketRating.create({
        data: {
          ticketId,
          rating,
          feedback,
        },
      });

      // Create response embed
      const stars = '⭐'.repeat(rating);
      const embed = new EmbedBuilder()
        .setTitle('✅ Thank You for Your Feedback!')
        .setDescription(
          `Your rating: ${stars} (${rating}/5)\n\n` +
            (feedback ? `Feedback: ${feedback}\n\n` : '') +
            'We appreciate your feedback and will use it to improve our support service.'
        )
        .setColor(0x00ff00)
        .setTimestamp();

      await interaction.reply({ embeds: [embed], flags: MessageFlags.Ephemeral });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error saving ticket rating:', error);
      await interaction.reply({
        content: '❌ Failed to save your rating. Please try again.',
        flags: MessageFlags.Ephemeral,
      });
    }
  }
}
