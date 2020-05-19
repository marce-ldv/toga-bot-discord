import InMemoryQuery from "@TogaBot/Shared/Infrastructure/Persistence/InMemory/InMemoryQuery";
import InMemoryStorage from "@TogaBot/Shared/Infrastructure/Persistence/InMemory/InMemoryStorage";

export default class InsertInMemoryQuery extends InMemoryQuery {

  constructor(key: string, data: string, documentKey: string ) {
    super();
    this.data = data;
    this.key = key;
    this.documentKey = documentKey;
  }

  static create(key: string, data: string, documentKey: string): InsertInMemoryQuery {
    return new InsertInMemoryQuery(key, data, documentKey);
  }

  execute(storage: InMemoryStorage) {
    const {data, key, documentKey} = this;
    const document = storage.getDocument(documentKey);
    document.insertRow(key, data);
  }
}