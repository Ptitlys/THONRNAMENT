import dotenv from "dotenv";
import { connectDB } from "./database";
import express from 'express';
import cors from 'cors';
import DTOValidatorMiddleware from "./Middlewares/DTOValidatorMiddleware";
import CardsRoute from "./Routes/CardsRoute";


export var app = express();

dotenv.config();


app.use(
    cors({
        //TODO: Replace with frontend URL
        origin: "*",
    }),
    express.json(),
);

app.use("/api/cards", CardsRoute);

connectDB();