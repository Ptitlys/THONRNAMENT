import { NextFunction, Request, Response, RequestWithDto } from 'express';
import { CreateCardDTO } from "./CardsDTO";
import * as CardsService from './CardsService';

export const create = async (
    req: RequestWithDto<CreateCardDTO>,
    res: Response,
    next: NextFunction
) => {
    try {
        const card = await CardsService.create(req.dto);
        return res.status(201).json({
            message: 'Card created successfully',
            card: card
        });
    } catch (error) {
        next(error);
    }
}
