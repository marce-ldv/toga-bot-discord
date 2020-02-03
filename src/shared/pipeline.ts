import { Operation } from './operation';

export abstract class Pipeline<T> {

  protected operations: Array<Operation> = new Array<Operation>();

  public registerOperation(operation: Operation): void {
    this.operations.push(operation);
  }

  public executePipeline(dataEntry: T): any {
    return this.operations.reduce((accumulator, currentValue) => {
      return currentValue.execute(accumulator);
    }, dataEntry)
  }

  private getPipelines(): void {

  }
}