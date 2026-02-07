import { ApplicationCommandRegistries, RegisterBehavior } from '@sapphire/framework';

// Set default behavior to bulk overwrite
ApplicationCommandRegistries.setDefaultBehaviorWhenNotIdentical(RegisterBehavior.BulkOverwrite);
