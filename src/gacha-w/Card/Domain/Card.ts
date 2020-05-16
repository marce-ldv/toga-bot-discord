import AggregateRoot from "@TogaBot/Shared/Domain/Aggregate/AggregateRoot";
import CardId from "@TogaBot/gacha-w/Shared/Domain/Card/CardId";
import CardProps from "@TogaBot/gacha-w/Card/Domain/CardProps";

export default class Card extends AggregateRoot {
  private readonly _cardId: CardId;
  private readonly _cardProps: CardProps;

  get cardId(): CardId {
    return this._cardId;
  }
  get cardProps(): CardProps {
    return this._cardProps;
  }

  public constructor(uuid: CardId, cardProps: CardProps) {
    super();
    this._cardProps = cardProps;
    this._cardId = uuid;
  }

}