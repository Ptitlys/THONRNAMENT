import { prop } from "@typegoose/typegoose";
import { CardTypes } from "../CardsEnum";
import Card from "./CardsObject";
import { RegisterCard } from "../CardsRegistry";

@RegisterCard(CardTypes.CONTRACT)
class Contract extends Card {
    @prop({ required: true, enum: CardTypes, default: CardTypes.CONTRACT })
    type!: string;
}