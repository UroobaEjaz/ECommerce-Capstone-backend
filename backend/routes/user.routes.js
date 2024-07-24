import express from "express";
import {
  getInstaCart,
  getUsers,
  instaCart,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/get", getUsers);
router.post("/instaCart", instaCart);
router.post("/getInstaCart", getInstaCart);

export default router;
