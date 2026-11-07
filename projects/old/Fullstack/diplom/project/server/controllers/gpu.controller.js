import {Router} from "express";
import {GpuService} from "../services/gpu.service.js";

const router = Router();
const gpuService = new GpuService();
router.get("/", async (req, res) => {
    try {
        const result = await gpuService.getgpus();
        res.status(200).json(result);
    } catch (err) {
        console.error("Ошибка!", err.stack);
        res.status(500).json({error: "Ошибка сервера!"});
    }
});

export const gpuRouter = router;