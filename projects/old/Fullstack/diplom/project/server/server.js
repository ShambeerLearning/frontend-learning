import express from "express";
import pkg from "pg";
const { Pool } = pkg;
import bodyParser from "body-parser";
import cors from "cors";
import { config } from "./db.js";
import { bodypcRouter } from "./controllers/bodypc.controller.js";
import { cpuRouter } from "./controllers/cpu.controller.js";
import { configuratorpcRouter } from "./controllers/configuratorpc.controller.js";
import { gpuRouter } from "./controllers/gpu.controller.js";
import { motherboardRouter } from "./controllers/motherboard.controller.js";
import { operational_memoryRouter } from "./controllers/operational_memory.controller.js";
import { power_unitRouter } from "./controllers/power_unit.controller.js";
import { storage_deviceRouter } from "./controllers/storage_device.controller.js";
import { cooling_iceRouter } from "./controllers/cooling.controller.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const port = process.env.SERVER_PORT;
const pool = new Pool(config);

app.use("/cpu", cpuRouter);
app.use("/bodypc", bodypcRouter);
app.use("/configuratorpc", configuratorpcRouter);
app.use("/gpu", gpuRouter);
app.use("/motherboard", motherboardRouter);
app.use("/operational_memory", operational_memoryRouter);
app.use("/power_unit", power_unitRouter);
app.use("/storage_device", storage_deviceRouter);
app.use("/cooling_ice", cooling_iceRouter);



app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});

pool.connect((err) => {
    if (err) {
        console.error("Ошибка подключению к базе данных", err.stack);
    } else {
        console.log("Подключение к базе данных установлено");
    }
});