import express from "express";
import pkg from "pg"
const { Pool } = pkg;
import bodyParser from "body-parser";
import cors from "cors";
import { get_names } from "./querys.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const port = 3000;
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "lesson4",
    password: "password",
    port: 5432,
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});

pool.connect((err) => {
    if (err) {
        console.error("Ошибка подключения к базе данных", err.stack);
    } else {
        console.log("Подключение к базе данных установлено");
    }
});

app.get("/all", async (req, res) => {
    try {
        const result = await pool.query(get_names);
        res.status(200).json(result.rows);
    } catch (err) {
        console.error("Ошибка при получении имён:", err.stack);
        res.status(500).json({ error: "Ошибка сервера!" });
    }
});