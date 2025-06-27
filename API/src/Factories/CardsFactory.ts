import { CreateCardDTO } from "../DTOS/Cards/CardsDTO";
import Card, { CardTypes } from "../Objects/CardsObject";
import SpellCardsModel from "../Models/Cards/SpellCardsModel";
import EnchantmentCardsModel from "../Models/Cards/EnchantmentCardsModel";
import EkipCardsModel from "../Models/Cards/EkipCardsModel";
import CharacterCardsModel from "../Models/Cards/CharacterCardsModel";
import ContractCardsModel from "../Models/Cards/ContractCardsModel";

class CardFactory {
    static create(dto: CreateCardDTO) {
        const card = this.mapBase(dto);

        switch (card.type) {
            case CardTypes.SPELL:
                return new SpellCardsModel({...dto, purchasePrice: dto.purchasePrice, sellPrice: dto.sellPrice});
            case CardTypes.ENCHANTMENT:
                return new EnchantmentCardsModel(dto);
            case CardTypes.EKIP:
                return new EkipCardsModel(dto);
            case CardTypes.CHARACTER:
                return new CharacterCardsModel(dto);
            case CardTypes.CONTRACT:
                return new ContractCardsModel(dto);
            default:
                throw new Error("Type de carte inconnu");
        }
    }

    private static mapBase(dto: CreateCardDTO) : Card {
        return {
            type: dto.type,
            description: dto.description,
            quantity: dto.quantity,
            picture: dto.picture,
            effect: dto.effect,
        };
    }


}
