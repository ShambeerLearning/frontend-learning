import { Router } from "express";
import { PurchaseService } from "../services/purchase.service.js";

const router = Router();
const pyrchaseService = new PurchaseService();
router.get("/get_full", async (req, res) => {
    try {
        const result = await pyrchaseService.get_purchases_full();
        res.status(200).json(result);
    } catch (err) {
        console.error("Ошибка!", err.stack);
        res.status(500).json({ error: "Ошибка сервера!" });
    }
});

router.post("/post_all", async (req, res) => {
    try {
        const { client, negr, price } = req.body;
        const result = await pyrchaseService.post_purchases_all(client, negr, price);
        res.status(201).json(result);
    } catch (err) {
        console.error("Ошибка добавления заказа!", err.stack);
        res.status(500).json({ error: "Ошибка сервера" });
    }
});

export const PurchaseRouter = router;