import Repository from "@TogaBot/Shared/Infrastructure/Persistence/Repository";
import DTO from "@TogaBot/Shared/Infrastructure/Persistence/DTO";
import InsertInMemoryQuery from "@TogaBot/Shared/Infrastructure/Persistence/InMemory/Query/InsertQuery";
import Uuid from "@TogaBot/Shared/Domain/ValueObject/Uuid";
import InMemoryContext from "@TogaBot/Shared/Infrastructure/Persistence/InMemory/InMemoryContext";
import SelectInMemoryQuery from "@TogaBot/Shared/Infrastructure/Persistence/InMemory/Query/SelectQuery";

export default class InMemoryRepository extends Repository {
  protected readonly context: InMemoryContext;
  protected readonly documentKey: string;

  protected constructor(context: InMemoryContext, documentKey: string) {
    super();
    this.context = context;
    this.documentKey = documentKey;
  }

  public insert(entity: DTO): void {
    const { documentKey, context } = this;
    const data = JSON.stringify(entity);
    const query = InsertInMemoryQuery.create(entity.id, data, documentKey);
    context.addCommand(query);
    context.saveChanges();
  };

  public findOneById(id: Uuid): string {
    const { context, documentKey } = this;
    const query = SelectInMemoryQuery.create(id.getId(), documentKey);
    return context.find(query);
  }
}