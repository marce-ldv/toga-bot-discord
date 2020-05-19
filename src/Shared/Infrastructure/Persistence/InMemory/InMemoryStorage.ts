import InMemoryStorageDocument from "@TogaBot/Shared/Infrastructure/Persistence/InMemory/InMemoryStorageDocument";
import InMemoryQuery from "@TogaBot/Shared/Infrastructure/Persistence/InMemory/InMemoryQuery";

export default class InMemoryStorage {
  private _storage: Map<string, InMemoryStorageDocument> = new Map<string, InMemoryStorageDocument>();

  public createDocument(documentName: string): void {
    this._storage.set(documentName, new InMemoryStorageDocument());
  }

  public createDocumentIfNotExists(documentName: string): void {
    if(!this._storage.has(documentName)) {
      this.createDocument(documentName);
    }
  }

  public deleteDocument(documentName: string): void {
    this._storage.delete(documentName);
  }

  public getDocument(documentName: string): InMemoryStorageDocument {
    this.createDocumentIfNotExists(documentName);
    return this._storage.get(documentName);
  }

  public executeQuery(query: InMemoryQuery) {
    query.execute(this);
  }
}