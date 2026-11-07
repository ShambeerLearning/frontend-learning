import { pool } from "../db.js";
import { negr_get_querys } from "../querys/negrs/negrs.get.js";
import { negr_post_querys } from "../querys/negrs/negrs.post.js";

export class NegrService {
    async get_negrs_full() {
        const { rows } = await pool.query(negr_get_querys.negr_select_all);
        return rows;
    }
    
    async get_negrs_select_id_and_name() {
        const { rows } = await pool.query(negr_get_querys.negr_select_id_and_name);
        return rows;
    }

    async post_negrs_all(name, post, history, age) {
        const { rows } = await pool.query(negr_post_querys.negr_post_all, [name, post, history, age]);
        return rows;
    }
}