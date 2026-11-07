import { Client } from 'pg';
import 'dotenv/config';

export async function checkData() {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });

    await client.connect();

    // Берем только первые 15 строк, чтобы не засорять терминал
    const result = await client.query('SELECT * FROM user_logs LIMIT 15;');

    // Встроенный метод JS для красивого вывода массивов объектов
    console.table(result.rows);

    await client.end();
}