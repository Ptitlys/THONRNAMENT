// types/express.d.ts
import 'express';

declare module 'express' {
    interface Request {
        file?: Express.Multer.File;
        files?: Express.Multer.File[] | { [fieldname: string]: Express.Multer.File[] };
        dto?: any;
    }

    interface RequestWithDto<T extends object> extends Request {
        dto: T;
    }
}