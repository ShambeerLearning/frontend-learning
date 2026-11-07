import { Router } from "express";
import { ClientService } from "../services/client.service.js";

const router = Router();
const clientService = new ClientService();
router.get("/get_full", async (req, res) => {
    try {
        const result = await clientService.get_clients_full();
        res.status(200).json(result);
    } catch (err) {
        console.error("Ошибка!", err.stack);
        res.status(500).json({ error: "Ошибка сервера!" });
    }
});

router.get("/id_and_name", async (req, res) => {
    try {
        const result = await clientService.get_clients_select_id_and_name();
        res.status(200).json(result);
    } catch (err) {
        console.error("Ошибка!", err.stack);
        res.status(500).json({ error: "Ошибка сервера!" });
    }
});

router.post("/post_all", async (req, res) => {
    try {
        const { name, number, email } = req.body;
        const result = await clientService.post_clients_all(name, number, email);
        res.status(201).json(result);
    } catch (err) {
        console.error("Ошибка добавления клиента!", err.stack);
        res.status(500).json({ error: "Ошибка сервера!" });
    }
});

export const ClientRouter = router;