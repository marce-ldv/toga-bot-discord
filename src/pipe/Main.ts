import { Pipeline } from '../shared/pipeline';
import { Command } from '../shared/command';
import { CommandGenerator } from '../filters/commandGenerator';
import { prefix } from '../config/config.json';
import { DecisionManager } from './DecisionManager';
import { Hi } from '../filters/hi';
import { Message } from 'discord.js';
import { Kick } from '../filters/kick';
import { ClearAllMsg } from '../filters/clearAllMsg';

export class MainPipeline extends Pipeline<Message> {
  private commandGenerator: CommandGenerator = new CommandGenerator();
  private decisionManager: DecisionManager = new DecisionManager();

  constructor(){
    super();
    // TODO: refactor register operation method, must be method with array argument that contains everything operations instances
    this.decisionManager.registerOperation(new Hi());
    this.decisionManager.registerOperation(new Kick());
    this.decisionManager.registerOperation(new ClearAllMsg());
  }

  executePipeline(dataEntry: Message): any {
    if( ! dataEntry.content.startsWith(prefix)){
      return;
    }

    const resCommand: Command = this.commandGenerator.execute(dataEntry);
    this.decisionManager.executePipeline(resCommand);
  }

}