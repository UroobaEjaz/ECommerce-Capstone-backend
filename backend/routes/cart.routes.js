// cart.routes.js

import express from 'express';
const router = express.Router();
import {
  createCart,
  addItemToCart,
  updateCartItemQuantity,
  getCartDetails,
} from '../controllers/cart.controller.js'; // Adjust path based on your project structure

// Routes for cart operations
router.post('/createCart', createCart); // Create a new cart for a user
router.post('/addItemToCart', addItemToCart); // Add items to the cart
router.put('/updateCartItemQuantity', updateCartItemQuantity); // Update cart item quantity
router.get('/getCartDetails/:email', getCartDetails); // Get cart details for a user

export default router;
