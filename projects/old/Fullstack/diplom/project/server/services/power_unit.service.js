import {pool} from "../db.js";

export class Power_unitService{
    async getpower_inits() {
        const { rows } = await pool.query("SELECT * FROM power_unit");
        return rows;
    }
}