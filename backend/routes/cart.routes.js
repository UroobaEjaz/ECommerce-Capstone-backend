// cart.routes.js

import express from "express";
const router = express.Router();
import {
  addToCart,
  removeFromCart,
  getCartDetails,
  tempid,
 // getCartDetails,
} from "../controllers/cart.controller.js"; // Adjust path based on your project structure

// Routes for cart operations
router.post("/add", addToCart); // Add item to cart
router.post("/remove", removeFromCart); // Remove item from cart
router.get("/items", getCartDetails); // Get all items in the cart
router.get("/tempid", tempid); // Generate temporary ID

export default router;
