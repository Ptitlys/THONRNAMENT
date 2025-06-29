import { getDiscriminatorModelForClass, getModelForClass, ReturnModelType } from "@typegoose/typegoose";
import Card from "./Objects/CardsObject";
import { cardClassByType } from "./CardsRegistry";
import { CardTypes } from "./CardsEnum";

export const cardModel = getModelForClass(Card);

export type CardModelsType = ReturnModelType<typeof Card>;
export type CardModelsByTypeType = Partial<Record<CardTypes, CardModelsType>>;

export const cardModelsByType: CardModelsByTypeType = {};

Object.entries(cardClassByType).forEach(([type, cardClass]) => {
    if (cardClass) {
        cardModelsByType[type as CardTypes] = getDiscriminatorModelForClass(cardModel, cardClass, type);
    }
});

