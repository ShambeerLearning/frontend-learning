import express from "express";
import pkg from "pg";
const { Pool } = pkg;
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { get_querys } from "./querys/get.querys.js";
import { post_querys } from "./querys/post.querys.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const port = process.env.SERVER_PORT;
const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:3000`);
});

app.get(`/get_purchases`, async (req, res) => {
    try {
        const result = await pool.query(get_querys.get_purchases);
        res.status(200).json(result.rows);
    } catch (err) {
        console.error(`Ошибка при получении заказов: `, err.stack);
        res.status(500).json({ error: `Ошибка сервера` });
    }
});

app.get(`/get_clients`, async (req, res) => {
    try {
        const result = await pool.query(get_querys.get_clients);
        res.status(200).json(result.rows);
    } catch (err) {
        console.error(`Ошибка при получении клиентов: `, err.stack);
        res.status(500).json({ error: `Ошибка сервера` });
    }
});

app.get(`/get_products`, async (req, res) => {
    try {
        const result = await pool.query(get_querys.get_products);
        res.status(200).json(result.rows);
    } catch (err) {
        console.error(`Ошибка при получении продуктов: `, err.stack);
        res.status(500).json({ error: `Ошибка сервера` });
    }
});

app.post(`/post_purchases`, async (req, res) => {
    try {
        const { clients, products } = req.body;
        const result = await pool.query(post_querys.post_purchases, [clients, products]);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(`Ошибка при добавлении заказов: `, err.stack);
        res.status(500).json({ error: `Ошибка сервера` });
    }
});