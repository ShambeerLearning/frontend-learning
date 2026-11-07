import {pool} from "../db.js";

export class CpuService{
    async getcpus() {
        const { rows } = await pool.query("SELECT * FROM cpu");
        return rows;
    }
}