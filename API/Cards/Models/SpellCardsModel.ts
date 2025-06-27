import Cards, { CardsModel, CardTypes } from "../Objects/Cards";
import Sellable from "../Interface/Sellable";
import Purchaseable from "../Interface/Purchaseable";
import { getModelForClass, prop } from "@typegoose/typegoose";

class Spell extends Cards implements Sellable, Purchaseable{
    @prop({ required: true })
    purchasePrice!: number;

    @prop({required:true})
    sellPrice!: number;
}


const SpellSchema = getModelForClass(Spell).schema;

export default CardsModel.discriminator(CardTypes.SPELL, SpellSchema);