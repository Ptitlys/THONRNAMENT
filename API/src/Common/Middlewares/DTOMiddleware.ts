import { validate, ValidationError } from "class-validator";
import { NextFunction, Request, Response, RequestWithDto, RequestHandler } from "express";
import { plainToInstance } from "class-transformer";
import "reflect-metadata";

export default function validateDto<T extends object>(
    dto: new () => T
): RequestHandler {
    return async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> => {
        try {
            const dtoReq = req as RequestWithDto<T>;
            dtoReq.dto = plainToInstance(dto, req.body);

            if (dtoReq.file) {
                processFile(dtoReq);
            }

            const errors = await validate(dtoReq.dto);

            if (errors.length === 0) {
                next();
                return;
            }

            res.status(400).json({
                message: 'Validation failed',
                errors: formatValidationErrors(errors)
            });

        } catch (error) {
            next(error);
        }
    };
}

function processFile<T extends object>(req: RequestWithDto<T>): void {
    if (req.file) {
        addFileToDTO(req, req.file);
    }
}

function addFileToDTO<T extends object>(
    req: RequestWithDto<T>,
    file: Express.Multer.File
): void {
    const { fieldname } = file;

    if (!(fieldname in req.dto) ||
        !Reflect.hasMetadata("FromFile", req.dto, fieldname)) {
        return;
    }

    (req.dto as any)[fieldname] = file.buffer;
}

function formatValidationErrors(errors: ValidationError[]): any[] {
    return errors.map(error => ({
        property: error.property,
        constraints: error.constraints,
        children: error.children && error.children.length > 0
            ? formatValidationErrors(error.children)
            : undefined
    }));
}