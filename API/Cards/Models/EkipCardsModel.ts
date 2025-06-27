import Cards, { CardsModel, CardTypes } from "../Objects/Cards";
import { getModelForClass, prop } from "@typegoose/typegoose";
import Purchaseable from "../Interface/Purchaseable";
import Sellable from "../Interface/Sellable";

enum EkipElements {
    PLASTIC = "PLASTIC",
    FIRE = "FIRE",
    WATER = "WATER",
    ELECTRIC = "ELECTRIC",
}

enum EkipParts {
    BODY = "BODY",
    HAT = "HAT",
    LEFT_LEG = "LEFT_LEG",
    RIGHT_LEG = "RIGHT_LEG",
    RIGHT_ARM = "RIGHT_ARM",
    LEFT_ARM = "LEFT_ARM",
    ACCESSORY = "ACCESSORY",
}

class Ekip extends Cards implements Purchaseable, Sellable{
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

