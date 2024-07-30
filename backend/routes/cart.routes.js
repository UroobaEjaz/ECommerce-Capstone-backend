// cart.routes.js

import express from "express";
const router = express.Router();
import {
  addToCart,
  removeFromCart,
  getCartDetails,
  tempid,
 // getCartDetails,
 updateCartItemQuantity,
} from "../controllers/cart.controller.js"; // Adjust path based on your project structure

// Routes for cart operations
router.post("/add", addToCart); // Add item to cart
router.post("/remove", removeFromCart); // Remove item from cart
router.post("/items", getCartDetails); // Get all items in the cart
router.get("/tempid", tempid); // Generate temporary ID
router.post("/update", updateCartItemQuantity); // Update item quantity in the cart


export default router;
