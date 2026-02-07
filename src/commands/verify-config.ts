import { Command } from '@sapphire/framework';
import { EmbedBuilder, MessageFlags, PermissionFlagsBits, type Role } from 'discord.js';
import { getPrismaClient } from '../lib/prisma';

const prisma = getPrismaClient();

/**
 * Verification Config Command
 * Allows admins to configure verification questions and accepted answers
 */
export class VerifyConfigCommand extends Command {
  public constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'verify-config',
      description: 'Configure verification settings (Admin only)',
    });
  }

  public override registerApplicationCommands(registry: Command.Registry) {
    registry.registerChatInputCommand(
      builder =>
        builder
          .setName(this.name)
          .setDescription(this.description)
          .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
          .addStringOption(option =>
            option
              .setName('action')
              .setDescription('What do you want to do?')
              .addChoices(
                { name: 'View Settings', value: 'view' },
                { name: 'Change Difficulty', value: 'difficulty' },
                { name: 'Set Verified Role', value: 'role' }
              )
              .setRequired(true)
          )
          .addStringOption(option =>
            option
              .setName('difficulty')
              .setDescription('Set verification difficulty level')
              .addChoices(
                { name: 'Easy - Simple questions', value: 'easy' },
                { name: 'Medium - Basic knowledge', value: 'medium' },
                { name: 'Hard - Specific knowledge', value: 'hard' }
              )
          )
          .addRoleOption(option =>
            option.setName('role').setDescription('Role to assign when users verify')
          ),
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
    // Check admin permissions
    if (!interaction.memberPermissions?.has(PermissionFlagsBits.Administrator)) {
      await interaction.reply({
        content: '❌ Only administrators can use this command.',
        flags: MessageFlags.Ephemeral,
      });
      return;
    }

    const action = interaction.options.getString('action');
    const difficulty = interaction.options.getString('difficulty');
    const role = interaction.options.getRole('role');

    if (action === 'view') {
      await this.viewSettings(interaction);
    } else if (action === 'difficulty') {
      await this.changeDifficulty(interaction, difficulty);
    } else if (action === 'role' && role && 'guild' in role) {
      await this.setVerifiedRole(interaction, role);
    }
  }

  /**
   * Display current verification settings
   */
  private async viewSettings(interaction: Command.ChatInputCommandInteraction) {
    if (!interaction.guild) {
      await interaction.reply({
        content: '❌ This command can only be used in a server.',
        flags: MessageFlags.Ephemeral,
      });
      return;
    }

    try {
      // Get or create config
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

      const role = config.roleId ? interaction.guild.roles.cache.get(config.roleId) : null;

      const configEmbed = new EmbedBuilder()
        .setColor('#0099ff')
        .setTitle('📋 Verification Settings')
        .addFields({
          name: 'Current Difficulty',
          value: `\`${config.difficulty.toUpperCase()}\``,
          inline: true,
        })
        .addFields({
          name: 'Verification Role',
          value: role ? `${role}` : '`Not configured`',
          inline: true,
        })
        .addFields({
          name: 'Current Question',
          value: config.question,
          inline: false,
        })
        .addFields({
          name: 'Accepted Answers',
          value: config.answers.map(a => `\`${a}\``).join(', '),
          inline: false,
        })
        .setTimestamp();

      await interaction.reply({ embeds: [configEmbed], flags: MessageFlags.Ephemeral });
    } catch (error) {
      console.error('Error viewing verification settings:', error);
      await interaction.reply({
        content: '❌ Failed to retrieve verification settings.',
        flags: MessageFlags.Ephemeral,
      });
    }
  }

  /**
   * Change verification difficulty level
   */
  private async changeDifficulty(
    interaction: Command.ChatInputCommandInteraction,
    difficulty: string | null
  ) {
    if (!difficulty) {
      await interaction.reply({
        content: '❌ Please specify a difficulty level.',
        flags: MessageFlags.Ephemeral,
      });
      return;
    }

    if (!interaction.guild) {
      await interaction.reply({
        content: '❌ This command can only be used in a server.',
        flags: MessageFlags.Ephemeral,
      });
      return;
    }

    const difficultyMap: Record<string, { question: string; answers: string[] }> = {
      easy: {
        question: 'What color is the sky on a clear day?',
        answers: ['blue', 'light blue', 'azul', 'celeste'],
      },
      medium: {
        question: 'What is the capital of France?',
        answers: ['paris', 'parís', 'france'],
      },
      hard: {
        question: 'In what year did the Titanic sink?',
        answers: ['1912'],
      },
    };

    const config = difficultyMap[difficulty];

    try {
      // Update or create config
      await prisma.verificationConfig.upsert({
        where: { guildId: interaction.guild.id },
        update: {
          difficulty,
          question: config.question,
          answers: config.answers,
        },
        create: {
          guildId: interaction.guild.id,
          difficulty,
          question: config.question,
          answers: config.answers,
        },
      });

      const successEmbed = new EmbedBuilder()
        .setColor('#00ff00')
        .setTitle('✅ Settings Updated')
        .setDescription(`Difficulty changed to **${difficulty.toUpperCase()}**`)
        .addFields({
          name: 'New Question',
          value: config.question,
          inline: false,
        })
        .addFields({
          name: 'Accepted Answers',
          value: config.answers.map(a => `\`${a}\``).join(', '),
          inline: false,
        })
        .setTimestamp();

      await interaction.reply({ embeds: [successEmbed], flags: MessageFlags.Ephemeral });
    } catch (error) {
      console.error('Error changing difficulty:', error);
      await interaction.reply({
        content: '❌ Failed to update verification settings.',
        flags: MessageFlags.Ephemeral,
      });
    }
  }

  /**
   * Set the verified role
   */
  private async setVerifiedRole(interaction: Command.ChatInputCommandInteraction, role: Role) {
    if (!role) {
      await interaction.reply({
        content: '❌ Please specify a role.',
        flags: MessageFlags.Ephemeral,
      });
      return;
    }

    if (!interaction.guild) {
      await interaction.reply({
        content: '❌ This command can only be used in a server.',
        flags: MessageFlags.Ephemeral,
      });
      return;
    }

    try {
      // Update or create config
      await prisma.verificationConfig.upsert({
        where: { guildId: interaction.guild.id },
        update: {
          roleId: role.id,
        },
        create: {
          guildId: interaction.guild.id,
          roleId: role.id,
        },
      });

      const successEmbed = new EmbedBuilder()
        .setColor('#00ff00')
        .setTitle('✅ Verified Role Updated')
        .setDescription(
          `Users who complete verification will now receive the ${role} role.\n\n` +
            `**Role:** ${role}\n` +
            `**Role ID:** \`${role.id}\``
        )
        .setTimestamp();

      await interaction.reply({ embeds: [successEmbed], flags: MessageFlags.Ephemeral });
    } catch (error) {
      console.error('Error setting verified role:', error);
      await interaction.reply({
        content: '❌ Failed to update verified role.',
        flags: MessageFlags.Ephemeral,
      });
    }
  }
}
