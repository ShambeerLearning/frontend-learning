import { pool } from "../db.js";
import { client_get_querys } from "../querys/clients/clients.get.js";
import { client_post_querys } from "../querys/clients/clients.post.js";

export class ClientService {
  async get_clients_full() {
    const { rows } = await pool.query(client_get_querys.client_get_all);
    return rows;
  }

  async get_clients_select_id_and_name() {
    const { rows } = await pool.query(client_get_querys.client_get_id_and_name);
    return rows;
  }

  async post_clients_all(name, number, email) {
    console.log(name, number, email);
    const { rows } = await pool.query(client_post_querys.client_post_all, [
      name,
      number,
      email,
    ]);
    return rows;
  }
}
