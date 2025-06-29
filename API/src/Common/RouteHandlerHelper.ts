import { RequestHandler, Request, Response, NextFunction, RequestWithDto } from "express";

export function withDto<T extends object>(
    handler: (req: RequestWithDto<T>, res: Response, next: NextFunction) => Promise<any>
): RequestHandler {
    return (req: Request, res: Response, next: NextFunction) => {
        return handler(req as RequestWithDto<T>, res, next);
    };
}