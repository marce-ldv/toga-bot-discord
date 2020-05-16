import Card from "@TogaBot/gacha-w/Card/Domain/Card";
import CardId from "@TogaBot/gacha-w/Shared/Domain/Card/CardId";

export default interface CardRepository {
  save(card: Card): void;
  find(cardId: CardId): Promise<Card>;
}