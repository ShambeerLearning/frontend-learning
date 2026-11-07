import {Router} from "express";
import {Storage_deviceService} from "../services/storage_device.service.js";

const router = Router();
const storage_deviceService = new Storage_deviceService();
router.get("/", async (req, res) => {
    try {
        const result = await storage_deviceService.getstorage_devices();
        res.status(200).json(result);
    } catch (err) {
        console.error("Ошибка!", err.stack);
        res.status(500).json({error: "Ошибка сервера!"});
    }
});

export const storage_deviceRouter = router;