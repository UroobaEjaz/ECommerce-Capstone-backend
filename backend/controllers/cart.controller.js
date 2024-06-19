// cart.controller.js

import Cart from '../models/cart.model.js'; // Adjust path based on your project structure

// Function to create a new cart for a user
export const createCart = async (req, res) => {
  const { email } = req.body;

  try {
    // Check if cart already exists for the user
    let cart = await Cart.findOne({ email });

    if (cart) {
      return res.status(400).json({ error: 'Cart already exists for this user' });
    }

    // Create a new cart if none exists
    cart = new Cart({ email, cartItems: [] });

    await cart.save();

    res.status(201).json({ message: 'Cart created successfully', cart });
  } catch (error) {
    console.error('Error creating cart:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Function to add items to the cart
export const addItemToCart = async (req, res) => {
  const { email, name, quantity, price } = req.body;

  try {
    // Find the cart for the user
    let cart = await Cart.findOne({ email });

    if (!cart) {
      return res.status(404).json({ error: 'Cart not found for this user' });
    }

    // Check if the item already exists in the cart
    const existingItem = cart.cartItems.find(item => item.name === name);

    if (existingItem) {
      // If item exists, update quantity
      existingItem.quantity += quantity;
    } else {
      // If item doesn't exist, add new item to cart
      cart.cartItems.push({ name, quantity, price });
    }

    await cart.save();

    res.status(200).json({ message: 'Item added to cart successfully', cart });
  } catch (error) {
    console.error('Error adding item to cart:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Function to update cart item quantity
export const updateCartItemQuantity = async (req, res) => {
  const { email, itemName, quantity } = req.body;

  try {
    // Find the cart for the user
    let cart = await Cart.findOne({ email });

    if (!cart) {
      return res.status(404).json({ error: 'Cart not found for this user' });
    }

    // Find the item in the cart
    const cartItem = cart.cartItems.find(item => item.name === itemName);

    if (!cartItem) {
      return res.status(404).json({ error: 'Item not found in the cart' });
    }

    // Update item quantity
    cartItem.quantity = quantity;

    await cart.save();

    res.status(200).json({ message: 'Cart item quantity updated successfully', cart });
  } catch (error) {
    console.error('Error updating cart item quantity:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Function to retrieve cart details for a user
export const getCartDetails = async (req, res) => {
  const { email } = req.params;

  try {
    // Find the cart for the user
    const cart = await Cart.findOne({ email });

    if (!cart) {
      return res.status(404).json({ error: 'Cart not found for this user' });
    }

    res.status(200).json({ cart });
  } catch (error) {
    console.error('Error fetching cart details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
