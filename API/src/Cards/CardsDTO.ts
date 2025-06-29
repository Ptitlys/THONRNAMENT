import { IsDefined, IsEnum, IsMongoId, IsNotEmpty, IsNumber, IsString, Length, Max, Min, ValidateIf, ValidateNested } from "class-validator";
import { EkipElements, EkipParts, CardActions, CardPlaces, CardResources, CardTypes } from "./CardsEnum";
import { Type } from "class-transformer";
import { FromFile } from "../Common/Decorators/FromFileDecorator";

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

    @ValidateIf(o => o.target !== undefined)
    @IsMongoId()
    target?: string;
}

export class CreateCardDTO {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsDefined()
    @IsEnum(CardTypes)
    type!: CardTypes;

    @IsDefined()
    @IsString()
    @Length(1,250)
    description!: string;

    @FromFile('picture')
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
    sellPrice?: number;

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