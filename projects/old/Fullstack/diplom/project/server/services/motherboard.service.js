import {pool} from "../db.js";

export class MotherboardService{
    async getmotherboards() {
        const { rows } = await pool.query("SELECT * FROM motherboard");
        return rows;
    }
}