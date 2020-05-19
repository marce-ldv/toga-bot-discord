import AggregateRoot from "@TogaBot/Shared/Domain/Aggregate/AggregateRoot";
import SeriesProps from "@TogaBot/gacha-w/Series/Domain/SeriesProps";
import SeriesId from "@TogaBot/gacha-w/Shared/Domain/Series/SeriesId";

export default class Series extends AggregateRoot<SeriesProps> {
  private readonly _seriesProps: SeriesProps;
  private readonly _seriesId: SeriesId;

  get seriesProps(): SeriesProps {
    return this._seriesProps;
  }

  get seriesId(): SeriesId {
    return this._seriesId;
  }

  public constructor(uuid: SeriesId, seriesProps: SeriesProps) {
    super();
    this._seriesProps = seriesProps;
    this._seriesId = uuid;
  }

  public calculateWeight(allRolledCard): number {
    const rolledCards = this._seriesProps.totalRolledCard;
    return rolledCards / allRolledCard;
  }

}
