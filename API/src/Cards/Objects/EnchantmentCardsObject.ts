import Card from "./CardsObject";
import { prop } from "@typegoose/typegoose";
import { PurchasableInterface, SellableInterface } from "../CardsInterface";
import { CardTypes } from "../CardsEnum";
import { RegisterCard } from "../CardsRegistry";

@RegisterCard(CardTypes.ENCHANTMENT)
class Enchantment extends Card implements SellableInterface, PurchasableInterface {
    @prop({ required: true, enum: CardTypes, default: CardTypes.ENCHANTMENT })
    type!: string;

    @prop({ required: true })
    purchasePrice!: number;

    @prop({ required: true })
    sellPrice!: number;
}