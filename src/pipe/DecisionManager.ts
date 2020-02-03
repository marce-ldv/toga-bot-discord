import { Pipeline } from '../shared/pipeline';
import { Command } from '../shared/command';

// busca en todas sus operaciones, si el comando esta implementado
export class DecisionManager extends Pipeline<Command> {
  executePipeline(dataEntry: Command): void {
    const operation = this.operations.find((operator) => operator.operationId === dataEntry.commandId);
    if( ! operation){
      throw new Error(`The operation ${dataEntry.commandId} do not exists`);
    }
    operation.execute(dataEntry);
  }
}