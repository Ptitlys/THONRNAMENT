import { CardTypes } from "./CardsEnum";
import Card from "./Objects/CardsObject";

export const cardClassByType: Record<CardTypes, typeof Card | undefined> = Object.values(CardTypes).reduce(
    (acc, type) => {
        acc[type as CardTypes] = undefined;
        return acc;
    },
    {} as Record<CardTypes, typeof Card | undefined>
);

export function RegisterCard(type: CardTypes) {
    return function<T extends typeof Card>(constructor: T): T {
        cardClassByType[type] = constructor;
        return constructor;
    };
}

export function getCardsByType(type: CardTypes): typeof Card | undefined {
    return cardClassByType[type];
}

export function getAllCardClasses(): Array<typeof Card> {
    return Object.values(cardClassByType).filter(Boolean) as Array<typeof Card>;
}

