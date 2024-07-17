import express from "express";
import {
  getUsers,
  createList,
  getList,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/get", getUsers);
router.post("/create", createList);
router.post("/getlist", getList);

export default router;
