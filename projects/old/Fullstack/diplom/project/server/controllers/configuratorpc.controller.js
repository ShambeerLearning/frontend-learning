import {Router} from "express";
import {ConfiguratorpcService} from "../services/configuratorpc.service.js";

const router = Router();
const configuratorpcService = new ConfiguratorpcService();
router.get("/", async (req, res) => {
    try {
        const result = await configuratorpcService.getconfiguratorpcs();
        res.status(200).json(result);
    } catch (err) {
        console.error("Ошибка!", err.stack);
        res.status(500).json({error: "Ошибка сервера!"});
    }
});

export const configuratorpcRouter = router;