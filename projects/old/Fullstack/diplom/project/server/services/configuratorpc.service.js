import {pool} from "../db.js";

export class ConfiguratorpcService{
    async getconfiguratorpcs() {
        const { rows } = await pool.query("SELECT * FROM configurator_pc");
        return rows;
    }
}