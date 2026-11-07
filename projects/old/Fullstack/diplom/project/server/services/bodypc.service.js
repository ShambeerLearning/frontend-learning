import {pool} from "../db.js";

export class BodypcService{
    async getbodypc() {
        const { rows } = await pool.query("SELECT * FROM body_pc");
        return rows;
    }
}