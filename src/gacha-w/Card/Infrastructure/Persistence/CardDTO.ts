import DTO from "@TogaBot/Shared/Infrastructure/Persistence/DTO";
import CardProps from "@TogaBot/gacha-w/Card/Domain/CardProps";

type CardDTO = Record<keyof CardProps | keyof DTO, string>;

export default CardDTO;
