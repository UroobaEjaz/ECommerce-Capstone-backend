import express from "express";
import {
  getInformation,
  insertSampleData,
} from "../controllers/admin.controller.js";

const router = express.Router();

router.post("/get", getInformation);
router.get("/sample", insertSampleData);

export default router;
