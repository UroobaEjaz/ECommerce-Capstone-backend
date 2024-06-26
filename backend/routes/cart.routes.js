// cart.routes.js

import express from "express";
const router = express.Router();
import {
  cartController,
  getCartDetails,
  tempid,
} from "../controllers/cart.controller.js"; // Adjust path based on your project structure

// Routes for cart operations
router.post("/", cartController); // Create or update a cart for a user
router.get("/tempid", tempid);
router.post("/getCartDetails/:email", getCartDetails); // Get cart details for a user

export default router;
