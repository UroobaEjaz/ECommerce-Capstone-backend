import express from "express";
import {
  addItem,
  getItems,
  getItemByCategory,
} from "../controllers/item.controller.js";

const router = express.Router();

router.post("/add", addItem);
router.post("/get", getItems);
router.post("/getByCategory", getItemByCategory);

export default router;
