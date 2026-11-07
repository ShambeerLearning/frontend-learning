import {pool} from "../db.js";

export class Storage_deviceService{
    async getstorage_devices() {
        const { rows } = await pool.query("SELECT * FROM storage_device");
        return rows;
    }
}