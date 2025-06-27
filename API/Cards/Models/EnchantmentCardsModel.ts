import Cards, { CardsModel, CardTypes } from "../Objects/Cards";
import Purchaseable from "../Interface/Purchaseable";
import Sellable from "../Interface/Sellable";
import { getModelForClass, prop } from "@typegoose/typegoose";

class Enchantment extends Cards implements Sellable, Purchaseable {
    @prop({ required: true })
    purchasePrice!: number;
    @prop({ required: true })
    sellPrice!: number;
}

const EnchantmentSchema = getModelForClass(Enchantment).schema;

export default CardsModel.discriminator(CardTypes.ENCHANTMENT, EnchantmentSchema);