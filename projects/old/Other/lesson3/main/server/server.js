import express from "express";
import pkg from "pg";
const { Pool } = pkg;
import bodyParser from "body-parser";
import cors from "cors";
import { config } from "./db.js";
import { NegrRouter } from "./controllers/negr.controller.js";
import { ClientRouter } from "./controllers/client.controller.js";
import { PurchaseRouter } from "./controllers/purchase.controller.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const port = process.env.SERVER_PORT;
const pool = new Pool(config);

app.use("/api/negrs", NegrRouter);
app.use("/api/clients", ClientRouter);
app.use("/api/purchases", PurchaseRouter);

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});

pool.connect((err) => {
    if (err) {
        console.error("Ошибка подключение к базе данных", err.stack);
    } else {
        console.log("Подключение к базе данных установлено");
    }
});