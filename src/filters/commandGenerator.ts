import { Operation } from '../shared/operation';
import { Command } from '../shared/command';
import { Message } from 'discord.js';

export class CommandGenerator implements Operation {
  public execute (command: Message): Command {
    // remove prefix
    const preFormatCommand = command.content.substr(1);

    // split command
    const splitedCommand = preFormatCommand.split(' ');
    const commandId = splitedCommand[0];
    splitedCommand.shift();
    
    return {
      commandId,
      argumentsList: splitedCommand,
      message: command
    }
  }
}