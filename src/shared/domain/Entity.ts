export default abstract class Entity {
  private readonly _id: string;

  public isEquals(id: string): boolean {
    return this._id === id;
  }
}