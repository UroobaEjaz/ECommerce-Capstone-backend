import express from "express";
import {
  getInformation,
  insertSampleData,
  getTopSellingItemsByCategory,
} from "../controllers/admin.controller.js";

const router = express.Router();

router.post("/get", getInformation);
router.get("/sample", insertSampleData);
router.post("/getsimilaritems", getTopSellingItemsByCategory);

export default router;
