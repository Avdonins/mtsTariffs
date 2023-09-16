import { Router } from "express";
import { scraperController } from "./scaper/scraper.js";

const router = new Router();

router.get("/tariffs", async (req, res) => {
    try {
        res.status(200).json(scraperController.getData());
    } catch (error) {
        res.status(500).json(error);
    }
})

router.post("/tariffs", async (req, res) => {
    try {
        await scraperController.updateData().then(() => {
            res.status(200).json(scraperController.getData());
        })
    } catch (error) {
        res.status(500).json(error);
    }
})

export default router;