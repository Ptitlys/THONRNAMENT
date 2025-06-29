import Card from "./CardsObject";
import { prop } from "@typegoose/typegoose";
import { PurchasableInterface, SellableInterface } from "../CardsInterface";
import { CardTypes, EkipElements, EkipParts } from "../CardsEnum";
import { RegisterCard } from "../CardsRegistry";

@RegisterCard(CardTypes.EKIP)
class Ekip extends Card implements PurchasableInterface, SellableInterface{
    @prop({ required: true, enum: CardTypes, default: CardTypes.EKIP })
    type!: string;

    @prop({required:true, enum:EkipElements})
    element!: string;

    @prop({required: true, enum:EkipParts})
    part!: string;

    @prop({required: true})
    purchasePrice!: number;

    @prop({required:true})
    sellPrice!: number;
}