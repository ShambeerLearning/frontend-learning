const express = require('express');
const sql = require('mssql');        // обратите внимание: импортируем sql, не Pool
const cors = require('cors');
require('dotenv').config();           // загружаем переменные окружения

const app = express();
app.use(cors());
app.use(express.json());              // достаточно одного парсера JSON

const port = process.env.PORT || 3000;

// Конфигурация подключения к SQL Server
const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_HOST,      // в mssql поле называется server, не host
    database: process.env.DB_DATABASE,
    port: parseInt(process.env.DB_PORT, 10) || 1433,
    options: {
        encrypt: true,                 // для Azure или локальных экземпляров с SSL
        trustServerCertificate: true   // для самоподписанных сертификатов (локально)
    }
};

let pool; // глобальный пул соединений

// Функция подключения к БД и запуска сервера
async function startServer() {
    try {
        pool = await sql.connect(config);
        console.log('Подключение к базе данных установлено');

        app.listen(port, () => {
            console.log(`Сервер запущен на http://localhost:${port}`);
        });
    } catch (err) {
        console.error('Ошибка подключения к БД:', err.message);
        process.exit(1); // завершаем процесс, если БД не доступна
    }
}

// GET /sellnegr – получение всех записей из таблицы sellnegr
app.get('/clients', async (req, res) => {
    try {
        const result = await pool.request().query('SELECT * FROM clients');
        res.status(200).json(result.recordset); // recordset, а не rows
    } catch (err) {
        console.error('Ошибка при получении данных:', err.message);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

// POST /sellnegr – добавление новой записи
app.post('/clients', async (req, res) => {
    try {
        const { clients_name, clients_miss } = req.body;

        // Валидация входных данных
        if (!clients_name || !clients_miss) {
            return res.status(400).json({ error: 'Поля clients_name и clients_miss обязательны' });
        }

        // Используем параметризованный запрос (безопасно от SQL-инъекций)
        const result = await pool.request()
            .input('name', sql.NVarChar, clients_name)
            .input('miss', sql.NVarChar, clients_miss)
            .query(`
                INSERT INTO sellnegr (clients_name, clients_miss) 
                VALUES (@name, @miss);
                SELECT SCOPE_IDENTITY() AS id;  -- возвращаем ID новой записи (опционально)
            `);

        // Можно вернуть созданную запись или просто статус
        res.status(201).json({ 
            message: 'Запись добавлена', 
            id: result.recordset[0]?.id 
        });
    } catch (error) {
        console.error('Ошибка при добавлении:', error.message);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

// Graceful shutdown – закрываем пул соединений при остановке приложения
process.on('SIGINT', async () => {
    console.log('Завершение работы...');
    if (pool) {
        try {
            await pool.close();
            console.log('Соединения с БД закрыты');
        } catch (err) {
            console.error('Ошибка при закрытии пула:', err.message);
        }
    }
    process.exit(0);
});

startServer();