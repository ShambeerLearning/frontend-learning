import express from "express"
import pkg from "pg";
const { Pool } = pkg;
import bodyParser from "body-parser"
import cors from "cors"

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const port = 3000;
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "lesson2",
    password: "password",
    port: 5432,
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});

pool.connect((err) => {
    if (err) {
        console.error("Ошибка к подключение к базе данных", err.stack);
    } else {
        console.log("Подключение к базе данных установлено");
    }
});

app.get('/cpp_orders', async (req, res) => {
    try {
        const result = await pool.query(`SELECT 
        o.cpp_order_id AS order_id,
        c.client_name AS client,
        p.product_name AS product,
        pr.provider_name AS provider,
        o.cpp_order_price AS price
        FROM 
        cpp_order o
        JOIN 
        client c ON o.cpp_order_client = c.client_id
        JOIN 
        product p ON o.cpp_order_product = p.product_id
        JOIN 
        provider pr ON o.cpp_order_provider = pr.provider_id
        ORDER BY 
        o.cpp_order_id`);
        res.status(200).json(result.rows);
    } catch (err) {
        console.error("Ошибка получения заказов", err.stack);
        res.status(500).json({ error: "Ошибка сервера" });
    }
});