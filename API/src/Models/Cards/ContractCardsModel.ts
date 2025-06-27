import Cards, { CardsModel, CardTypes } from "../../Objects/CardsObject";
import { getModelForClass } from "@typegoose/typegoose";

class Contract extends Cards {
}

const ContractSchema = getModelForClass(Contract).schema;

export default CardsModel.discriminator(CardTypes.CONTRACT, ContractSchema);