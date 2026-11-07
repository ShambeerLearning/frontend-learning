import {Router} from "express";
import {Power_unitService} from "../services/power_unit.service.js";

const router = Router();
const power_unitService = new Power_unitService();
router.get("/", async (req, res) => {
    try {
        const result = await power_unitService.getpower_inits();
        res.status(200).json(result);
    } catch (err) {
        console.error("Ошибка!", err.stack);
        res.status(500).json({error: "Ошибка сервера!"});
    }
});

export const power_unitRouter = router;