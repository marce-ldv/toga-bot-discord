import { Pipeline } from '../shared/pipeline';
import { Command } from '../shared/command';
import { CommandGenerator } from '../filters/commandGenerator';
import { prefix } from '../config/config.json';
import { DecisionManager } from './DecisionManager';
import { Hi } from '../filters/hi';
import { Message } from 'discord.js';

export class MainPipeline extends Pipeline<Message> {
  private commandGenerator: CommandGenerator = new CommandGenerator();
  private decisionManager: DecisionManager = new DecisionManager();

  constructor(){
    super();
    this.decisionManager.registerOperation(new Hi());
  }

  executePipeline(dataEntry: Message): any {
    if( ! dataEntry.content.startsWith(prefix)){
      return;
    }

    const resCommand: Command = this.commandGenerator.execute(dataEntry);
    this.decisionManager.executePipeline(resCommand);
  }

}