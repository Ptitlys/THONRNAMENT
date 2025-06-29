import { CreateCardDTO } from "./CardsDTO";
import CardFactory from "./CardsFactory";

export async function create(dto: CreateCardDTO)
{
    const model  = CardFactory.create(dto);
    await model.save();
}

