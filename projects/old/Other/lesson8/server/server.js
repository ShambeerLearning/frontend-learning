import express from "express";
import pkg from "pg";
const { Pool } = pkg;
import cors from "cors";
import bodyParser from "body-parser";
import { get_querys_purchases } from "./querys/get.querys.js";
import { post_purchases } from "./querys/post.querys.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const port = 3000;
const pool = new Pool({
    user: "postgres",
    password: "password",
    host: "localhost",
    database: "lesson6",
    port: 5432,
});

app.listen(port, () => {
    console.log("Сервер запущен на http://localhost:3000");
});

app.get("/get_purchases", async (req, res) => {
    try {
        const result = await pool.query(get_querys_purchases.get_purchases);
        res.status(200).json(result.rows);
    } catch (err) {
        console.error("Ошибка получения заказов: ", err.stack);
        res.status(500).json({ error: "Ошибка сервера" });
    }
});

app.get("/get_clients", async (req, res) => {
    try {
        const result = await pool.query(get_querys_purchases.get_clients);
        res.status(200).json(result.rows);
    } catch (err) {
        console.error("Ошибка при получении клиентов: ", err.stack);
        res.status(500).json({ error: "Ошибка сервера" });
    }
});

app.get("/get_products", async (req, res) => {
    try {
        const result = await pool.query(get_querys_purchases.get_products);
        res.status(200).json(result.rows);
    } catch (err) {
        console.error("Ошибка получения продуктов: ", err.stack);
        res.status(500).json({ error: "Ошибка сервера" });
    }
});

app.post("/post_purchases", async (req, res) => {
    const { clientName, productName } = req.body;
    const result = await pool.query(post_purchases, [clientName, productName]);
    res.status(201).json(result.rows[0]);
});