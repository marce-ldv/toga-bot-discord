import Card from "@TogaBot/gacha-w/Card/Domain/Card";
import CardId from "@TogaBot/gacha-w/Shared/Domain/Card/CardId";
import CardMapper from "@TogaBot/gacha-w/Card/Infrastructure/Persistence/InMemory/CardMapper";
import InMemoryContext from "@TogaBot/Shared/Infrastructure/Persistence/InMemory/InMemoryContext";
import InMemoryRepository from "@TogaBot/Shared/Infrastructure/Persistence/InMemory/InMemoryRepository";

export default class CardInMemoryRepository extends InMemoryRepository {

  constructor(context: InMemoryContext) {
    super(context, 'Card');
  }

  public save(card: Card): void {
    const cardDTO = CardMapper.toDTO(card);
    this.insert(cardDTO);
  }

  public getCard(id: CardId): Card {
    const data = this.findOneById(id);
    return CardMapper.toDomain(data);
  }
}