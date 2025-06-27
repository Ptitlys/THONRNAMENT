import Cards, { CardsModel, CardTypes } from "../../Objects/CardsObject";
import SellableInterface from "../../Interface/Cards/SellableInterface";
import PurchasableInterface from "../../Interface/Cards/PurchasableInterface";
import { getModelForClass, prop } from "@typegoose/typegoose";

class Spell extends Cards implements SellableInterface, PurchasableInterface{
    @prop({ required: true })
    purchasePrice!: number;

    @prop({required:true})
    sellPrice!: number;
}


const SpellSchema = getModelForClass(Spell).schema;

export default CardsModel.discriminator(CardTypes.SPELL, SpellSchema);