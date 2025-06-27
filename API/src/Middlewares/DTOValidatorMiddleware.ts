import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { Request, Response, NextFunction } from "express";

export default function <T extends object>(type: new () => T ) {
    return async (req: Request, res: Response, next: NextFunction) => {
        const dto = plainToInstance(type, req.body);
        const errors = await validate(dto);
        if (errors.length > 0) {
            const formattedErrors = errors.map(e => ({
                property: e.property,
                constraints: e.constraints,
            }));
            res.status(400).json({ errors: formattedErrors });
            return;
        }
        next();
    };
}
