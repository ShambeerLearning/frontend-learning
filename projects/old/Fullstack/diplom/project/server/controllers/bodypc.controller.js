import {Router} from "express";
import {BodypcService} from "../services/bodypc.service.js";

const router = Router();
const bodypcService = new BodypcService();
router.get("/", async (req, res) => {
    try {
        const result = await bodypcService.getbodypcs();
        res.status(200).json(result);
    } catch (err) {
        console.error("Ошибка!", err.stack);
        res.status(500).json({error: "Ошибка сервера!"});
    }
});

export const bodypcRouter = router;