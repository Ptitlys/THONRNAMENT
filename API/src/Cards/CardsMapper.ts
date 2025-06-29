import { CreateCardDTO } from "./CardsDTO";
import Card from "./Objects/CardsObject";

export default class CardsMapper <T extends Card> {
    private card: T;
    private dto: CreateCardDTO;

    constructor(dto: CreateCardDTO) {
        this.dto = dto;
        this.card = new Card() as T;
        this.card.type = dto.type;
    }

    public mapBase(): this {
        this.card = {
            ...this.card,
            type: this.dto.type,
            description: this.dto.description,
            quantity: this.dto.quantity,
            picture: this.dto.picture,
            effect: this.dto.effect,
        };
        return this;
    }

    public mapPurchasable(): this {
        this.card = {
            ...this.card,
            purchasePrice: this.dto.purchasePrice,
        };

        return this;
    }

    public mapSellable(): this {
        this.card = {
            ...this.card,
            sellPrice: this.dto.sellPrice,
        };
        return this;
    }

    public getCard(): T {
        return this.card;
    }
}
