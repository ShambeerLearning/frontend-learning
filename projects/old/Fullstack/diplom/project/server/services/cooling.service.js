import {pool} from "../db.js";

export class Cooling_iceService{
    async getcooling_ices() {
        const { rows } = await pool.query("SELECT * FROM cooling_ice");
        return rows;
    }
}