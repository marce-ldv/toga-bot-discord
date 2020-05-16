import { v1 as idGenerator } from 'uuid';

export default class Uuid {
  protected uuid: string;

  public constructor(uuid: string) {
    this.uuid = uuid;
  }

  public getId(): string { return this.uuid; }

  public equals(other: Uuid): boolean {
    return this.uuid === other.uuid;
  }

  public static random(): Uuid {
    return new Uuid(idGenerator());
  }
}