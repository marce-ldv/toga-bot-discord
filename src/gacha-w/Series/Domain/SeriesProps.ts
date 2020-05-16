export default class SeriesProps {
  private readonly _cardQuantity: number;
  private readonly _totalRolledCard: number;

  public get cardQuantity(): number {
    return this._cardQuantity;
  }

  public get totalRolledCard(): number {
    return this._totalRolledCard;
  }

  public constructor(cardQuantity: number, totalRolledCard: number) {
    this._cardQuantity = cardQuantity;
    this._totalRolledCard = totalRolledCard;
  }
}