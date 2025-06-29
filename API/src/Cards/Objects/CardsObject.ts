import { modelOptions, prop } from "@typegoose/typegoose";
import { Types } from "mongoose";
import { CardActions, CardPlaces, CardResources, CardTypes } from "../CardsEnum";

export abstract class Effect {
    @prop({ required: true, enum: CardActions })
    action!: string;

    @prop({ required: true, enum: CardPlaces })
    place!: string;

    @prop({ required: true, enum: CardResources })
    resource!: string;

    @prop({ required: true, min: 0 })
    value!: number;

    @prop({ type: () => Types.ObjectId })
    target?: Types.ObjectId;
}

@modelOptions({schemaOptions: {discriminatorKey: 'type', collection:'Cards'}})
export default class Card {
    @prop({ required:true})
    name!: string;

    @prop({required:true, enum:CardTypes})
    type!: string;

    @prop({required:true, maxlength:250})
    description!: string;

    @prop({ type:Buffer})
    picture?: Buffer;

    @prop({
            required: true,
            default: 1,
            min: 1
    })
    quantity!: number;

    @prop({
        required: true,
        _id: false,
    })
    effect!: Effect;
}
