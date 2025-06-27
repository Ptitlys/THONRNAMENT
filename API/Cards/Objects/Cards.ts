import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { Buffer } from "buffer";

export enum CardTypes {
    SPELL = "SPELL",
    ENCHANTMENT = "ENCHANTMENT",
    EKIP = "EKIP",
    CONTRACT = "CONTRACT",
    CHARACTER = "CHARACTER",
}

enum CardActions {
    TAKE = "TAKE",
    DESTROY = "DESTROY",
    ADD = "ADD",
    DRAW = "DRAW",
    CHANGE = "CHANGE",
    RENEW = "RENEW",
}

enum CardPlaces {
    DECK = "DECK",
    HAND = "HAND",
    DUMP = "DUMP",
    SHOP = "SHOP",
}

enum CardResources {
    COIN = "COIN",
    STRENGTH = "STRENGTH",
    TOUGHNESS = "TOUGHNESS",
    CARD = "CARD",
    REWARD = "REWARD",
}

type CardAction = keyof typeof CardActions;
type CardPlace = keyof typeof CardPlaces;
type CardResource = keyof typeof CardResources;
type CardType = keyof typeof CardTypes;

class Effect {
    @prop({ required: true, enum: CardActions })
    action!: CardActions;

    @prop({ required: true, enum: CardPlaces })
    place!: CardPlaces;

    @prop({ required: true, enum: CardResources })
    resource!: CardResources;

    @prop({ required: true })
    value!: number;

    @prop()
    target?: Card;
}


@modelOptions({schemaOptions: {discriminatorKey: 'type'}})
export default abstract class Card {
    @prop({required:true, enum:CardTypes})
    type!: CardType;

    @prop({required:true})
    description!: string;

    @prop({required:true, type:Buffer})
    picture!: Buffer;

    @prop({required:true, default: 1})
    quantity!: number;

    @prop({required:true, _id:false})
    effect!: Effect;
}

export class BaseCard extends Card {}

export const CardsModel = getModelForClass(BaseCard);