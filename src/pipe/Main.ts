import { Pipeline } from '../shared/pipeline';
import { Command } from '../shared/command';
import { CommandGenerator } from '../filters/commandGenerator';
import { prefix } from '../config/config.json';

export class MainPipeline extends Pipeline<string> {
  private commandGenerator: CommandGenerator = new CommandGenerator();

  executePipeline(dataEntry: string): any {
    if( ! dataEntry.startsWith(prefix)){
      return;
    }

    const resCommand: Command = this.commandGenerator.execute(dataEntry);
  }

}