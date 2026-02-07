import { Command } from '@sapphire/framework';
import { MessageFlags, PermissionFlagsBits } from 'discord.js';
import { handleCreate } from '../lib/reactionrole/handlers/create';
import { handleAdd } from '../lib/reactionrole/handlers/add';
import { handleRemove } from '../lib/reactionrole/handlers/remove';
import { handleMode } from '../lib/reactionrole/handlers/mode';
import { handleList } from '../lib/reactionrole/handlers/list';

/**
 * Reaction Role Command
 * Configure roles that are assigned based on message reactions
 */
export class ReactionRoleCommand extends Command {
  public constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'reactionrole',
      description: 'Configure reaction-based role assignment (Admin only)',
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
              .setName('create')
              .setDescription('Create a new reaction role panel')
              .addStringOption(option =>
                option
                  .setName('title')
                  .setDescription('Title of the reaction role panel')
                  .setRequired(true)
              )
              .addStringOption(option =>
                option
                  .setName('description')
                  .setDescription('Description of the panel')
                  .setRequired(true)
              )
              .addStringOption(option =>
                option
                  .setName('mode')
                  .setDescription('Role selection mode')
                  .addChoices(
                    { name: 'Single - Users can only pick one role', value: 'SINGLE' },
                    { name: 'Multiple - Users can pick multiple roles', value: 'MULTIPLE' }
                  )
                  .setRequired(true)
              )
          )
          .addSubcommand(subcommand =>
            subcommand
              .setName('add')
              .setDescription('Add a reaction role to an existing message')
              .addStringOption(option =>
                option.setName('message_id').setDescription('Message ID').setRequired(true)
              )
              .addStringOption(option =>
                option.setName('emoji').setDescription('Emoji to react with').setRequired(true)
              )
              .addRoleOption(option =>
                option.setName('role').setDescription('Role to assign').setRequired(true)
              )
              .addStringOption(option =>
                option.setName('description').setDescription('Description for this role')
              )
          )
          .addSubcommand(subcommand =>
            subcommand
              .setName('remove')
              .setDescription('Remove a reaction role from a message')
              .addStringOption(option =>
                option.setName('message_id').setDescription('Message ID').setRequired(true)
              )
              .addStringOption(option =>
                option.setName('emoji').setDescription('Emoji to remove').setRequired(true)
              )
          )
          .addSubcommand(subcommand =>
            subcommand
              .setName('mode')
              .setDescription('Change the mode of a reaction role message')
              .addStringOption(option =>
                option.setName('message_id').setDescription('Message ID').setRequired(true)
              )
              .addStringOption(option =>
                option
                  .setName('mode')
                  .setDescription('New mode')
                  .addChoices(
                    { name: 'Single - Users can only pick one role', value: 'SINGLE' },
                    { name: 'Multiple - Users can pick multiple roles', value: 'MULTIPLE' }
                  )
                  .setRequired(true)
              )
          )
          .addSubcommand(subcommand =>
            subcommand.setName('list').setDescription('List all reaction roles in this server')
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
      case 'create':
        await handleCreate(interaction);
        break;
      case 'add':
        await handleAdd(interaction);
        break;
      case 'remove':
        await handleRemove(interaction);
        break;
      case 'mode':
        await handleMode(interaction);
        break;
      case 'list':
        await handleList(interaction);
        break;
    }
  }
}
