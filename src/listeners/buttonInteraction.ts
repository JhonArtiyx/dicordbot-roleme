import { Events, Listener } from '@sapphire/framework';
import {
  Interaction,
  MessageFlags,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  ActionRowBuilder,
  type ButtonInteraction,
  type ModalActionRowComponentBuilder,
} from 'discord.js';
import { getPrismaClient } from '../lib/prisma';
import { createTicketChannel } from '../lib/ticket/handlers/ticketManager';

const prisma = getPrismaClient();

/**
 * Button Interaction Listener
 * Handles button clicks and shows verification modal or creates tickets
 */
export class ButtonInteractionListener extends Listener<typeof Events.InteractionCreate> {
  public constructor(context: Listener.LoaderContext, options: Listener.Options) {
    super(context, { ...options, event: Events.InteractionCreate });
  }

  public async run(interaction: Interaction) {
    // Only handle button interactions
    if (!interaction.isButton()) return;

    // Handle verify button
    if (interaction.customId === 'verifyButton') {
      await this.handleVerifyButton(interaction);
    }
    // Handle ticket create button
    else if (interaction.customId === 'ticket_create') {
      await this.handleTicketCreate(interaction);
    }
    // Handle ticket rating button
    else if (interaction.customId.startsWith('ticket_rate_')) {
      await this.handleTicketRating(interaction);
    }
  }

  /**
   * Creates and shows the verification modal
   */
  private async handleVerifyButton(interaction: ButtonInteraction) {
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
        // Create default config
        config = await prisma.verificationConfig.create({
          data: {
            guildId: interaction.guild.id,
          },
        });
      }

      // Create modal
      const modal = new ModalBuilder()
        .setCustomId('verifyModal')
        .setTitle('Server Verification')
        .addComponents(
          new ActionRowBuilder<ModalActionRowComponentBuilder>().addComponents(
            new TextInputBuilder()
              .setCustomId('verifyQuestion')
              .setLabel(config.question)
              .setStyle(TextInputStyle.Short)
              .setPlaceholder('Enter your answer...')
              .setRequired(true)
              .setMaxLength(50)
          )
        );

      // Show modal to user
      await interaction.showModal(modal);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error showing verification modal:', error);
      await interaction.reply({
        content: '❌ An error occurred while opening verification. Please try again.',
        flags: MessageFlags.Ephemeral,
      });
    }
  }

  /**
   * Handle ticket creation button
   */
  private async handleTicketCreate(interaction: ButtonInteraction) {
    try {
      // Show modal to get ticket subject
      const modal = new ModalBuilder()
        .setCustomId('ticket_create_modal')
        .setTitle('Create Support Ticket')
        .addComponents(
          new ActionRowBuilder<ModalActionRowComponentBuilder>().addComponents(
            new TextInputBuilder()
              .setCustomId('ticket_subject')
              .setLabel('What do you need help with?')
              .setStyle(TextInputStyle.Paragraph)
              .setPlaceholder('Briefly describe your issue...')
              .setRequired(false)
              .setMaxLength(200)
          )
        );

      await interaction.showModal(modal);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error showing ticket creation modal:', error);
      await interaction.reply({
        content: '❌ An error occurred while creating your ticket. Please try again.',
        flags: MessageFlags.Ephemeral,
      });
    }
  }

  /**
   * Handle ticket rating button
   */
  private async handleTicketRating(interaction: ButtonInteraction) {
    try {
      const ticketId = interaction.customId.replace('ticket_rate_', '');

      // Check if ticket exists and is closed
      const ticket = await prisma.ticket.findUnique({
        where: { id: ticketId },
        include: { rating: true },
      });

      if (!ticket) {
        await interaction.reply({
          content: '❌ Ticket not found.',
          flags: MessageFlags.Ephemeral,
        });
        return;
      }

      if (ticket.status !== 'CLOSED') {
        await interaction.reply({
          content: '❌ Can only rate closed tickets.',
          flags: MessageFlags.Ephemeral,
        });
        return;
      }

      if (ticket.rating) {
        await interaction.reply({
          content: '❌ You have already rated this ticket.',
          flags: MessageFlags.Ephemeral,
        });
        return;
      }

      // Only ticket owner can rate
      if (ticket.userId !== interaction.user.id) {
        await interaction.reply({
          content: '❌ Only the ticket owner can rate the support experience.',
          flags: MessageFlags.Ephemeral,
        });
        return;
      }

      // Show rating modal
      const modal = new ModalBuilder()
        .setCustomId(`ticket_rating_${ticketId}`)
        .setTitle('Rate Support Experience')
        .addComponents(
          new ActionRowBuilder<ModalActionRowComponentBuilder>().addComponents(
            new TextInputBuilder()
              .setCustomId('rating')
              .setLabel('Rating (1-5 stars)')
              .setStyle(TextInputStyle.Short)
              .setPlaceholder('Enter a number from 1 to 5')
              .setRequired(true)
              .setMinLength(1)
              .setMaxLength(1)
          ),
          new ActionRowBuilder<ModalActionRowComponentBuilder>().addComponents(
            new TextInputBuilder()
              .setCustomId('feedback')
              .setLabel('Feedback (Optional)')
              .setStyle(TextInputStyle.Paragraph)
              .setPlaceholder('Tell us about your experience...')
              .setRequired(false)
              .setMaxLength(1000)
          )
        );

      await interaction.showModal(modal);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error showing rating modal:', error);
      await interaction.reply({
        content: '❌ An error occurred. Please try again.',
        flags: MessageFlags.Ephemeral,
      });
    }
  }
}
