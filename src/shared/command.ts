import { Message } from 'discord.js';

export interface Command {
  commandId: string;
  argumentsList: Array<string>;
  message: Message;
}