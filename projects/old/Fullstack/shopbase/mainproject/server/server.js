const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const port = 3000;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'shop',
    password: 'password',
    port: 5432,
});

app.listen(port, () =>{
    console.log(`Сервер запущен на http://localhost:${port}`);
});

pool.connect((err) => {
    if (err) {
        console.error('Ошибка подключения к базе данных', err.stack);
    } else {
        console.log('Подкдючение к базе данных установлено');
    }
});

app.get('/act_sale', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM act_sale');
        res.status(200).json(result.rows);
    } catch (err) {
        console.error('Ошибка при получении категорий: ', err.stack);
    }
});