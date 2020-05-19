export default class InMemoryStorageDocument {
  private _storedRows: Map<string, string> = new Map<string, string>();
  private _key: string;

  get key(): string {
    return this._key;
  }

  get allRows(): Map<string, string> {
    return this._storedRows;
  }

  public insertRow(key: string, data: string ): void {
    this._storedRows.set(key, data);
  }

  public getRow(key: string): string {
    return this._storedRows.get(key);
  }

  public deleteRow(key: string): void {
    this._storedRows.delete(key);
  }
}