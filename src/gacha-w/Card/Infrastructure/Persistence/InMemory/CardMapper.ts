import Mapper from "@TogaBot/Shared/Infrastructure/Persistence/Mapper";
import Card from "@TogaBot/gacha-w/Card/Domain/Card";
import CardDTO from "@TogaBot/gacha-w/Card/Infrastructure/Persistence/CardDTO";
import SeriesId from "@TogaBot/gacha-w/Shared/Domain/Series/SeriesId";

export default class CardMapper extends Mapper {
  public static toDTO(card: Card): CardDTO {
    const id = card.cardId.getId();
    const { name, seriesId } = card.cardProps;
    return {
      id,
      name,
      seriesId: seriesId.getId(),
    };
  }

  public static toDomain(cardData: string): Card {
    const cardRaw = JSON.parse(cardData);
    return Card.create(cardRaw.id, {
      seriesId: new SeriesId(cardRaw.seriesId),
      name: cardRaw.name,
    });
  }
}