import dotenv from "dotenv";
import { connectDB } from "./Config/database";
import express from 'express';
import cors from 'cors';
import CardsRoute from "./Cards/CardsRouter";


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

app.listen(process.env.PORT, () => {
    console.log(`Serveur lancé sur le port ${process.env.PORT}`);
});