import { app } from "../server";
import DTOValidatorMiddleware from "../Middlewares/DTOValidatorMiddleware";
import { CreateCardDTO } from "../DTOS/Cards/CardsDTO";
import { create } from "../Controllers/Cards/CardsController";
import express from "express";
import multer from 'multer';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

app.post('/', upload.single('picture'), DTOValidatorMiddleware(CreateCardDTO), create);

export default router;