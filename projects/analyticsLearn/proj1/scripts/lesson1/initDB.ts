import * as path from "node:path";
import * as fs from "node:fs";
import {Client} from "pg";
import 'dotenv/config';

export async function loadDataToDb() {
    const filePath = path.join(import.meta.dirname, '..', '..', 'data', 'data.json');
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    if (!process.env.DATABASE_URL) {
        throw new Error('DATABASE_URL is not defined');
    }

    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });

    await client.connect();

    await client.query(`
        CREATE TABLE IF NOT EXISTS user_logs (
            event_id UUID PRIMARY KEY,
            user_id INT,
            ip_address VARCHAR(50),
            device_type VARCHAR(50),
            event_time TIMESTAMP,
            action VARCHAR(50)
        );
    `);

    const query = `
        INSERT INTO user_logs (event_id, user_id, ip_address, device_type, event_time, action)
        SELECT 
            "eventId", 
            "userId", 
            "ipAddress", 
            "deviceType", 
            "eventTime"::TIMESTAMP, 
            "action"
        FROM json_to_recordset($1::json) AS x(
            "eventId" UUID, 
            "userId" INT, 
            "ipAddress" VARCHAR, 
            "deviceType" VARCHAR, 
            "eventTime" VARCHAR, 
            "action" VARCHAR
        );
    `;

    await client.query(query, [fileContent]);
    await client.end();
}
