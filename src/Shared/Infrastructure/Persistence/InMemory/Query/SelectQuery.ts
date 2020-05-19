import InMemoryQuery from "@TogaBot/Shared/Infrastructure/Persistence/InMemory/InMemoryQuery";
import InMemoryStorage from "@TogaBot/Shared/Infrastructure/Persistence/InMemory/InMemoryStorage";

export default class SelectInMemoryQuery extends InMemoryQuery {
  private _row = '';

  get row(): string {
    return this._row;
  }
  
  constructor(key: string, documentKey: string ) {
    super();
    this.key = key;
    this.documentKey = documentKey;
  }

  static create(key: string, documentKey: string): SelectInMemoryQuery {
    return new SelectInMemoryQuery(key, documentKey);
  }
  
  public execute(storage: InMemoryStorage) {
    const { key, documentKey} = this;
    const document = storage.getDocument(documentKey);
    this._row = document.getRow(key);
  }
}
