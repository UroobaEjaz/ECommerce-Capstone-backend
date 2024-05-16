import express from "express";
import { addItem } from "../controllers/item.controller.js";

const router = express.Router();

router.post("/add", addItem);

export default router;
