import {Router} from "express";
import {Operational_memoryService} from "../services/operational_memory.service.js";

const router = Router();
const operational_memoryService = new Operational_memoryService();
router.get("/", async (req, res) => {
    try {
        const result = await operational_memoryService.getopertaional_memorys();
        res.status(200).json(result);
    } catch (err) {
        console.error("Ошибка!", err.stack);
        res.status(500).json({error: "Ошибка сервера!"});
    }
});

export const operational_memoryRouter = router;