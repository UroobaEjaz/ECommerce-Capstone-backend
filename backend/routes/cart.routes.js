// cart.routes.js
/*
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
router.post("/getCartDetails", getCartDetails); // Get cart details for a user

export default router;
*/


// cart.routes.js

import express from "express";
import { cartController, getCartDetails, tempid, addToCart, removeFromCart } from "../controllers/cart.controller.js";

const router = express.Router();

// Create or update a cart
router.post("/", cartController);

// Get cart details
router.post("/getCartDetails", getCartDetails);

// Generate temporary ID
router.get("/tempid", tempid);

// Add item to cart
router.post("/add", addToCart);

// Remove item from cart
router.delete("/remove", removeFromCart);

export default router;
