import Context from "@TogaBot/Shared/Infrastructure/Persistence/Context";
import InMemoryStorage from "@TogaBot/Shared/Infrastructure/Persistence/InMemory/InMemoryStorage";
import InMemoryQuery from "@TogaBot/Shared/Infrastructure/Persistence/InMemory/InMemoryQuery";
import SelectInMemoryQuery from "@TogaBot/Shared/Infrastructure/Persistence/InMemory/Query/SelectQuery";

export default class InMemoryContext extends Context {
  private readonly storage: InMemoryStorage = new InMemoryStorage();
  private commands: InMemoryQuery[] = [];
  private static self: InMemoryContext;

  private constructor() { super()}

  public static getInstance(): InMemoryContext {
    if (this.self === undefined) this.self = new InMemoryContext();
    return this.self;
  }

  public addCommand(command: InMemoryQuery): void {
    this.commands.push(command);
  }

  public find(query: SelectInMemoryQuery) {
    query.execute(this.storage);
    return query.row;
  }

  public saveChanges(): void {
    const {commands, storage} = this;
    commands.forEach(c => c.execute(storage));
  }
}