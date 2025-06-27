import Cards, { CardsModel, CardTypes } from "../../Objects/CardsObject";
import { getModelForClass, prop } from "@typegoose/typegoose";
import PurchasableInterface from "../../Interface/Cards/PurchasableInterface";
import SellableInterface from "../../Interface/Cards/SellableInterface";

export enum EkipElements {
    PLASTIC = "PLASTIC",
    FIRE = "FIRE",
    WATER = "WATER",
    ELECTRIC = "ELECTRIC",
}

export enum EkipParts {
    BODY = "BODY",
    HAT = "HAT",
    LEFT_LEG = "LEFT_LEG",
    RIGHT_LEG = "RIGHT_LEG",
    RIGHT_ARM = "RIGHT_ARM",
    LEFT_ARM = "LEFT_ARM",
    ACCESSORY = "ACCESSORY",
}

class Ekip extends Cards implements PurchasableInterface, SellableInterface{
    @prop({required:true, enum:EkipElements})
    element!: EkipElements;

    @prop({required: true, enum:EkipParts})
    part!: EkipParts;

    @prop({required: true})
    purchasePrice!: number;

    @prop({required:true})
    sellPrice!: number;
}


const EkipSchema = getModelForClass(Ekip).schema;

export default CardsModel.discriminator(CardTypes.EKIP, EkipSchema);

