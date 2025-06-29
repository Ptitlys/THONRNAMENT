import Card from "./CardsObject";
import { prop } from "@typegoose/typegoose";
import { CardTypes } from "../CardsEnum";
import { RegisterCard } from "../CardsRegistry";

@RegisterCard(CardTypes.CHARACTER)
class Character extends Card {
    @prop({ set: () => 1})
    quantity!: number;

    @prop({ required: true, enum: CardTypes, default: CardTypes.CHARACTER })
    type!: string;
}
