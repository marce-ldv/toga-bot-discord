import { Operation } from '../shared/operation';
import { Command } from '../shared/command';

export class CommandGenerator implements Operation {
  public execute (command: string): Command {
    // remove prefix
    const preFormatCommand = command.substr(1);

    // split command
    const splitedCommand = preFormatCommand.split(' ');
    const commandId = splitedCommand[0];
    splitedCommand.shift();
    const argumentsList = splitedCommand;
    return {commandId, argumentsList}
  }
}