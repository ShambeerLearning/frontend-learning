const express = require("express");
const { Pool } = require("pg");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const port = 3000;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'test1',
    password: 'password',
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

app.get('/superma', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM purchases');
        res.status(200).json(result.rows);
    } catch (err) {
        console.error("Ошибка получении заказов:", err.stack);
        res.status(500).json({ error: "Ошибка сервера" });
    }
});

app.post("/addsuperma", async (req, res) => {
    const { purchases_customer, purchases_product, purchases_quantity_products, purchases_price } = req.body
    const query = 'INSERT INTO purchases (purchases_customer, purchases_product, purchases_quantity_product, purchases_price) VALUES ($1, $2, $3, $4) RETURNING *'
    const result = await pool.query(query, [purchases_customer, purchases_product, purchases_quantity_products, purchases_price]);
    res.status(201).json(result.rows[0]);
});