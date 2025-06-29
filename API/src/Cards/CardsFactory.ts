import { CreateCardDTO } from "./CardsDTO";
import { CardTypes } from "./CardsEnum";
import { DocumentType } from "@typegoose/typegoose";
import { cardModelsByType, cardClassByType } from "./index";
import Card from "./Objects/CardsObject";

export default class CardFactory {
    static create(dto: CreateCardDTO): DocumentType<Card> {
        console.log(dto, cardClassByType, cardModelsByType)
        const CardClass = cardClassByType[dto.type as CardTypes];
        const Model = cardModelsByType[dto.type as CardTypes];
        if (!(CardClass && Model)) {
            throw new Error(`Aucune classe ou modèle de carte trouvée pour le type ${dto.type}`);
        }

        const card = new CardClass();
        Object.assign(card, dto);

        return new Model(card) as DocumentType<Card>;
    }
}
