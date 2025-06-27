import Cards, { CardsModel, CardTypes } from "../Objects/Cards";
import { getModelForClass, prop } from "@typegoose/typegoose";

class Character extends Cards {
    @prop({ set: () => 1})
    quantity!: number;
}

const CharacterSchema = getModelForClass(Character).schema

export default CardsModel.discriminator(CardTypes.CHARACTER, CharacterSchema);