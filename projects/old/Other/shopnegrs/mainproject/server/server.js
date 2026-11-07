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
    database: 'sellnegrs',
    password: 'password',
    port: 5432,
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});

pool.connect((err) => {
    if (err) {
        console.error('Ошибка подключения к базе данных', err.stack);
    } else {
        console.log('Подключение к базе данных установлено');
    }
});

app.get('/sellnegr', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM sellnegr');
        res.status(200).json(result.rows);
    } catch (err) {
        console.error('Ошибка при получении категории: ', err.stack);
        res.stack(500).json({ error: 'Ошибка сервера' });
    }
});

app.post("/sellnegr", async (req, res) => {
    try {
      const { negr_name, negr_post, negr_history, negr_price } = req.body;
      const result = await pool.query(
        "INSERT INTO sellnegr (negr_name, negr_post, negr_history, negr_price) VALUES($1, $2, $3, $4)",
        [negr_name, negr_post, negr_history, negr_price]);
      res.status(201).json(result.rows);
    } catch (error) {
      console.error("Ошибка получения данных");
    }
  });