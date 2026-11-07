import {Router} from "express";
import {MotherboardService} from "../services/motherboard.service.js";

const router = Router();
const motherboardService = new MotherboardService();
router.get("/", async (req, res) => {
    try {
        const result = await motherboardService.getmotherboards();
        res.status(200).json(result);
    } catch (err) {
        console.error("Ошибка!", err.stack);
        res.status(500).json({error: "Ошибка сервера!"});
    }
});

export const motherboardRouter = router;