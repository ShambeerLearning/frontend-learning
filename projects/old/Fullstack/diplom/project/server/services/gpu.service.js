import {pool} from "../db.js";

export class GpuService{
    async getgpus() {
        const { rows } = await pool.query("SELECT * FROM gpu");
        return rows;
    }
}