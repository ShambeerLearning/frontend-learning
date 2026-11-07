import { Router } from "express";
import { NegrService } from "../services/negr.service.js";

const router = Router();
const negrService = new NegrService();
router.get("/get_full", async (req, res) => {
  try {
    const result = await negrService.get_negrs_full();
    res.status(200).json(result);
  } catch (err) {
    console.error("Ошибка!", err.stack);
    res.status(500).json({ error: "Ошибка сервера!" });
  }
});

router.get("/id_and_name", async (req, res) => {
  try {
    const result = await negrService.get_negrs_select_id_and_name();
    res.status(200).json(result);
  } catch (err) {
    console.error("Ошибка!", err.stack);
    res.status(500).json({ error: "Ошибка сервера!" });
  }
});

router.post("/post_all", async (req, res) => {
  try {
    const { name, post, history, age } = req.body;
    const result = await negrService.post_negrs_all(name, post, history, age);
    res.status(201).json(result);
  } catch (err) {
    console.error("Ошибка добавления негра!", err.stack);
    res.status(500).json({ error: "Ошибка сервера!" });
  }
});

export const NegrRouter = router;
