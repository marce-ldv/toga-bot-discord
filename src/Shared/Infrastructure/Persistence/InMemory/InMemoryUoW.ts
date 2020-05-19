import InMemoryContext from "@TogaBot/Shared/Infrastructure/Persistence/InMemory/InMemoryContext";

export default class InMemoryUoW {
  private readonly context: InMemoryContext;

  public constructor(context: InMemoryContext) {
    this.context = context;
  }

  public commit() {
    this.context.saveChanges();
  }
}