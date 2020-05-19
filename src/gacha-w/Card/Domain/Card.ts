import AggregateRoot from "@TogaBot/Shared/Domain/Aggregate/AggregateRoot";
import CardId from "@TogaBot/gacha-w/Shared/Domain/Card/CardId";
import CardProps from "@TogaBot/gacha-w/Card/Domain/CardProps";

export default class Card extends AggregateRoot<CardProps> {
  private readonly _cardId: CardId;

  get cardId(): CardId {
    return this._cardId;
  }
  get cardProps(): CardProps {
    return this.props;
  }

  public static create(id: CardId, props: CardProps) {
    return new Card(id, props);
  }

  private constructor(uuid: CardId, cardProps: CardProps) {
    super();
    this.props = cardProps;
    this._cardId = uuid;
  }
}