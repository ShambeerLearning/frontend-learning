import {pool} from "../db.js";

export class Operational_memoryService{
    async getopertaional_memorys() {
        const { rows } = await pool.query("SELECT * FROM operational_memory");
        return rows;
    }
}