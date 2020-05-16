import SeriesId from "@TogaBot/gacha-w/Shared/Domain/Series/SeriesId";

export default class CardProps {
  private readonly _name: string;
  private readonly _seriesId: SeriesId;

  get name(): string {
    return this._name;
  }

  get seriesId(): SeriesId {
    return this._seriesId;
  }

  public constructor(name: string, seriesId: SeriesId) {
    this._name = name;
    this._seriesId = seriesId;
  }
}
