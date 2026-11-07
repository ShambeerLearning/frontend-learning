import dotenv from "dotenv";
import pkg from "pg";
const { Pool } = pkg;
dotenv.config();
export const config = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: { rejectUnauthorized: false }
};

export const pool = new Pool(config);