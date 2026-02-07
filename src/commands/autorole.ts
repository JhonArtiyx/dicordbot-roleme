import { Command } from '@sapphire/framework';
import { EmbedBuilder, MessageFlags, PermissionFlagsBits } from 'discord.js';
import { getPrismaClient } from '../lib/prisma';

const prisma = getPrismaClient();

/**
 * Auto Role Command
 * Configure roles that are automatically assigned when users join the server
 */
export class AutoRoleCommand extends Command {
  public constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'autorole',
      description: 'Configure automatic role assignment (Admin only)',
    });
  }

  public override registerApplicationCommands(registry: Command.Registry) {
    registry.registerChatInputCommand(
      builder =>
        builder
          .setName(this.name)
          .setDescription(this.description)
          .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
          .addSubcommand(subcommand =>
            subcommand
              .setName('add')
              .setDescription('Add a role to be automatically assigned')
              .addRoleOption(option =>
                option
                  .setName('role')
                  .setDescription('Role to assign automatically')
                  .setRequired(true)
              )
          )
          .addSubcommand(subcommand =>
            subcommand
              .setName('remove')
              .setDescription('Remove an automatic role')
              .addRoleOption(option =>
                option.setName('role').setDescription('Role to remove').setRequired(true)
              )
          )
          .addSubcommand(subcommand =>
            subcommand.setName('list').setDescription('List all automatic roles')
          ),
      {
        guildIds:
          process.env.NODE_ENV !== 'production' && process.env.GUILD_ID
            ? [process.env.GUILD_ID]
            : undefined,
      }
    );
  }

  public override async chatInputRun(interaction: Command.ChatInputCommandInteraction) {
    if (!interaction.memberPermissions?.has(PermissionFlagsBits.Administrator)) {
      await interaction.reply({
        content: '❌ Only administrators can use this command.',
        flags: MessageFlags.Ephemeral,
      });
      return;
    }

    const subcommand = interaction.options.getSubcommand();

    switch (subcommand) {
      case 'add':
        await this.handleAdd(interaction);
        break;
      case 'remove':
        await this.handleRemove(interaction);
        break;
      case 'list':
        await this.handleList(interaction);
        break;
    }
  }

  /**
   * Add an auto role
   */
  private async handleAdd(interaction: Command.ChatInputCommandInteraction) {
    const role = interaction.options.getRole('role', true);

    if (!interaction.guild) {
      await interaction.reply({
        content: '❌ This command can only be used in a server.',
        flags: MessageFlags.Ephemeral,
      });
      return;
    }

    try {
      // Check if role already exists
      const existing = await prisma.autoRole.findUnique({
        where: {
          guildId_roleId: {
            guildId: interaction.guild.id,
            roleId: role.id,
          },
        },
      });

      if (existing) {
        await interaction.reply({
          content: `❌ The role ${role} is already configured as an auto role.`,
          flags: MessageFlags.Ephemeral,
        });
        return;
      }

      // Create auto role
      await prisma.autoRole.create({
        data: {
          guildId: interaction.guild.id,
          roleId: role.id,
        },
      });

      const successEmbed = new EmbedBuilder()
        .setColor('#00ff00')
        .setTitle('✅ Auto Role Added')
        .setDescription(
          `The role ${role} will now be automatically assigned to new members when they join the server.`
        )
        .setTimestamp();

      await interaction.reply({ embeds: [successEmbed], flags: MessageFlags.Ephemeral });
    } catch (error) {
      console.error('Error adding auto role:', error);
      await interaction.reply({
        content: '❌ Failed to add auto role. Please try again.',
        flags: MessageFlags.Ephemeral,
      });
    }
  }

  /**
   * Remove an auto role
   */
  private async handleRemove(interaction: Command.ChatInputCommandInteraction) {
    const role = interaction.options.getRole('role', true);

    if (!interaction.guild) {
      await interaction.reply({
        content: '❌ This command can only be used in a server.',
        flags: MessageFlags.Ephemeral,
      });
      return;
    }

    try {
      const deleted = await prisma.autoRole.delete({
        where: {
          guildId_roleId: {
            guildId: interaction.guild.id,
            roleId: role.id,
          },
        },
      });

      if (!deleted) {
        await interaction.reply({
          content: `❌ The role ${role} is not configured as an auto role.`,
          flags: MessageFlags.Ephemeral,
        });
        return;
      }

      const successEmbed = new EmbedBuilder()
        .setColor('#00ff00')
        .setTitle('✅ Auto Role Removed')
        .setDescription(`The role ${role} will no longer be automatically assigned to new members.`)
        .setTimestamp();

      await interaction.reply({ embeds: [successEmbed], flags: MessageFlags.Ephemeral });
    } catch (error) {
      console.error('Error removing auto role:', error);
      await interaction.reply({
        content: '❌ Failed to remove auto role. The role might not be configured.',
        flags: MessageFlags.Ephemeral,
      });
    }
  }

  /**
   * List all auto roles
   */
  private async handleList(interaction: Command.ChatInputCommandInteraction) {
    if (!interaction.guild) {
      await interaction.reply({
        content: '❌ This command can only be used in a server.',
        flags: MessageFlags.Ephemeral,
      });
      return;
    }

    try {
      const autoRoles = await prisma.autoRole.findMany({
        where: { guildId: interaction.guild.id },
      });

      if (autoRoles.length === 0) {
        await interaction.reply({
          content: '📋 No auto roles configured. Use `/autorole add` to add one.',
          flags: MessageFlags.Ephemeral,
        });
        return;
      }

      const rolesList = autoRoles
        .map((ar: { roleId: string }) => {
          const role = interaction.guild!.roles.cache.get(ar.roleId);
          return role ? `• ${role}` : `• <@&${ar.roleId}> (deleted)`;
        })
        .join('\n');

      const listEmbed = new EmbedBuilder()
        .setColor('#0099ff')
        .setTitle('📋 Auto Roles Configuration')
        .setDescription(
          `These roles will be automatically assigned to new members:\n\n${rolesList}`
        )
        .setFooter({ text: `Total: ${autoRoles.length} role(s)` })
        .setTimestamp();

      await interaction.reply({ embeds: [listEmbed], flags: MessageFlags.Ephemeral });
    } catch (error) {
      console.error('Error listing auto roles:', error);
      await interaction.reply({
        content: '❌ Failed to retrieve auto roles. Please try again.',
        flags: MessageFlags.Ephemeral,
      });
    }
  }
}
