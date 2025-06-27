import { CardActions, CardPlaces, CardResources, CardTypes } from "../../Objects/CardsObject";
import { IsDefined, IsEnum, IsMongoId, IsNotEmpty, IsNumber, IsString, Max, Min, ValidateIf, ValidateNested } from "class-validator";
import { EkipElements, EkipParts } from "../../Models/Cards/EkipCardsModel";
import { Type } from "class-transformer";
import { ObjectId } from "mongodb";

export class EffectDTO {
    @IsDefined()
    @IsEnum(CardActions)
    action!: CardActions;

    @IsDefined()
    @IsEnum(CardPlaces)
    place!: CardPlaces;

    @IsDefined()
    @IsEnum(CardResources)
    resource!: CardResources;

    @IsDefined()
    @IsNumber()
    @Min(1)
    value!: number;

    @IsMongoId()
    target?: ObjectId;
}

export class CreateCardDTO {

    @IsDefined()
    @IsEnum(CardTypes)
    type!: CardTypes;

    @IsDefined()
    @IsString()
    @Min(1)
    @Max(50)
    description!: string;

    @IsNotEmpty()
    picture?: Buffer;

    @IsDefined()
    @IsNumber()
    @Min(1)
    quantity!: number;

    @IsDefined()
    @ValidateNested()
    @Type(() => EffectDTO)
    effect!: EffectDTO;

    @ValidateIf((o) =>
        [CardTypes.SPELL, CardTypes.ENCHANTMENT, CardTypes.EKIP].includes(o.type)
    )
    @IsDefined()
    @IsNumber()
    @Min(1)
    purchasePrice?: number;

    @ValidateIf((o) =>
        [CardTypes.SPELL, CardTypes.ENCHANTMENT, CardTypes.EKIP].includes(o.type)
    )
    @IsDefined()
    @IsNumber()
    @Min(1)
    salePrice?: number;

    @ValidateIf((o) => o.type === CardTypes.EKIP)
    @IsDefined()
    @IsEnum(EkipElements)
    ekipElement?: string;

    @ValidateIf((o) => o.type === CardTypes.EKIP)
    @IsDefined()
    @IsEnum(EkipParts)
    ekipPart?: string;
}

export type updateCardDTO = Partial<CreateCardDTO>