import { pool } from "../db.js";
import { purchases_get_querys } from "../querys/purchases/purchases.get.js";
import { purchases_post_querys } from "../querys/purchases/purchases.post.js";

export class PurchaseService {
    async get_purchases_full() {
        const { rows } = await pool.query(purchases_get_querys.purchases_get_all_and_id_table);
        return rows;
    }

    async post_purchases_all(purchases_client, purchases_negr, purchases_price) {
        console.log(purchases_client, purchases_negr, purchases_price);
        const { rows } = await pool.query(purchases_post_querys.purchases_post_all, [purchases_client, purchases_negr, purchases_price]);
        return rows;
    }
}