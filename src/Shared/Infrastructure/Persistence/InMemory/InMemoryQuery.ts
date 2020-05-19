import InMemoryStorage from "@TogaBot/Shared/Infrastructure/Persistence/InMemory/InMemoryStorage";

export default abstract class InMemoryQuery {
  protected data: string;
  protected key: string;
  protected documentKey: string;

  abstract execute(storage: InMemoryStorage);
}