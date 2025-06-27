import Cards, { CardsModel, CardTypes } from "../../Objects/CardsObject";
import PurchasableInterface from "../../Interface/Cards/PurchasableInterface";
import SellableInterface from "../../Interface/Cards/SellableInterface";
import { getModelForClass, prop } from "@typegoose/typegoose";

class Enchantment extends Cards implements SellableInterface, PurchasableInterface {
    @prop({ required: true })
    purchasePrice!: number;
    @prop({ required: true })
    sellPrice!: number;
}

const EnchantmentSchema = getModelForClass(Enchantment).schema;

export default CardsModel.discriminator(CardTypes.ENCHANTMENT, EnchantmentSchema);