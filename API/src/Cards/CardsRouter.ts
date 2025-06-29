import { CreateCardDTO } from "./CardsDTO";
import { create } from "./CardsController";
import express from "express";
import multer, { FileFilterCallback } from 'multer';
import DTOMiddleware from "../Common/Middlewares/DTOMiddleware";
import { withDto } from "../Common/RouteHandlerHelper";

const pictureSizeLimit = 500 * 1024; // 500 Ko max

const router = express.Router();

const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: pictureSizeLimit }, // 500 Ko max
    fileFilter: (req, file, cb : FileFilterCallback) => {
        if (!file.mimetype.startsWith('image/')) {
            return cb(new Error('Seulement des images autorisées !') as any, false);
        }
        cb(null, true);
    },
});


router.post('/', upload.single('picture'), DTOMiddleware(CreateCardDTO), withDto<CreateCardDTO>(create));

export default router;
