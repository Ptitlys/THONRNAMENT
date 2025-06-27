import { CreateCardDTO } from "../../DTOS/Cards/CardsDTO";
import { CardsModel } from "../../Objects/CardsObject";

export async function create (card: CreateCardDTO){
    await CardsModel.create(card);
}