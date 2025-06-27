import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";

export enum CardTypes {
    SPELL = "SPELL",
    ENCHANTMENT = "ENCHANTMENT",
    EKIP = "EKIP",
    CONTRACT = "CONTRACT",
    CHARACTER = "CHARACTER",
}

export enum CardActions {
    TAKE = "TAKE",
    DESTROY = "DESTROY",
    ADD = "ADD",
    DRAW = "DRAW",
    CHANGE = "CHANGE",
    RENEW = "RENEW",
}

export enum CardPlaces {
    DECK = "DECK",
    HAND = "HAND",
    DUMP = "DUMP",
    SHOP = "SHOP",
}

export enum CardResources {
    COIN = "COIN",
    STRENGTH = "STRENGTH",
    TOUGHNESS = "TOUGHNESS",
    CARD = "CARD",
    REWARD = "REWARD",
}

export class Effect {
    @prop({ required: true, enum: CardActions })
    action!: CardActions;

    @prop({ required: true, enum: CardPlaces })
    place!: CardPlaces;

    @prop({ required: true, enum: CardResources })
    resource!: CardResources;

    @prop({ required: true })
    value!: number;

    @prop()
    target?: ObjectId;
}


@modelOptions({schemaOptions: {discriminatorKey: 'type'}})
export default abstract class Card {
    @prop({required:true, enum:CardTypes})
    type!: CardTypes;

    @prop({required:true})
    description!: string;

    @prop({ type:Buffer})
    picture?: Buffer;

    @prop({
            required: true,
            default: 1,
            validate: (quantity: number) => quantity > 0,
        })
    quantity!: number;

    @prop({
        required: true,
        _id: false,
        validate: {
            validator: (quantity: number) => quantity > 0,
            message: "Quantity must be greater than 0"
        },
    })
    effect!: Effect;
}

export class BaseCard extends Card {}

export const CardsModel = getModelForClass(BaseCard);