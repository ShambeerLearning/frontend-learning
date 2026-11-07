import {Router} from "express";
import {Cooling_iceService} from "../services/cooling.service.js";

const router = Router();
const cooling_iceService = new Cooling_iceService();
router.get("/", async (req, res) => {
    try {
        const result = await cooling_iceService.getcooling_ices();
        res.status(200).json(result);
    } catch (err) {
        console.error("Ошибка!", err.stack);
        res.status(500).json({error: "Ошибка сервера!"});
    }
});

export const cooling_iceRouter = router;