import {Router} from "express";
import {CpuService} from "../services/cpu.service.js";

const router = Router();
const cpuService = new CpuService();
router.get("/", async (req, res) => {
    try {
        const result = await cpuService.getcpus();
        res.status(200).json(result);
    } catch (err) {
        console.error("Ошибка!", err.stack);
        res.status(500).json({error: "Ошибка сервера!"});
    }
});

export const cpuRouter = router;