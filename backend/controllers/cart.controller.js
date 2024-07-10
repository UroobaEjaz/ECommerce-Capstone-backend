// cart.controller.js
/*
import Cart from "../models/cart.model.js"; // Adjust path based on your project structure

// Function to create or update a cart for a user
export const cartController = async (req, res) => {
  const { email, cartItems } = req.body;

  try {
    let cart = await Cart.findOne({ email });
    let exist = false;

    if (!cart) {
      cart = new Cart({ email, cartItems });
    } else {
      cart.cartItems = cartItems;
      exist = true;
    }

    await cart.save();

    if (exist) {
      console.log("Cart updated successfully");
    } else {
      console.log("Cart created successfully");
    }
    res.status(200).json({ cart });
  } catch (error) {
    console.error("Error creating/updating cart:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Function to retrieve cart details for a user
export const getCartDetails = async (req, res) => {
  const { email } = req.params;

  try {
    // Find the cart for the user
    const cart = await Cart.findOne({ email });

    if (!cart) {
      return res.status(404).json({ error: "Cart not found for this user" });
    }

    res.status(200).json({ cart });
  } catch (error) {
    console.error("Error fetching cart details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}; */




import CartItem from "../models/cart.model.js";
import Item from "../models/item.model.js"; // Adjust path based on your project structure

// Function to add item to cart
export const addToCart = async (req, res) => {
  try {
    const { itemId, quantity } = req.body; // Assuming you're sending itemId and quantity in the request body
    const item = await Item.findById(itemId);

    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }

    let cartItem = await CartItem.findOne({ itemId });

    if (cartItem) {
      cartItem.quantity += quantity;
    } else {
      cartItem = new CartItem({
        itemId,
        quantity,
        price: item.price, // Assuming 'item' has a 'price' field
      });
    }

    await cartItem.save();

    res.status(201).json({ message: 'Item added to cart successfully', cartItem });
  } catch (error) {
    console.error('Error adding item to cart:', error);
    res.status(500).json({ error: error.message }); // Return detailed error message
  }
};

// Function to remove item from cart
export const removeFromCart = async (req, res) => {
  try {
    const { itemId } = req.body;

    const cartItem = await CartItem.findOne({ itemId });

    if (!cartItem) {
      return res.status(404).json({ error: "Item not found in cart" });
    }

    await CartItem.deleteOne({ itemId });

    res.status(200).json({ message: "Item removed from cart successfully" });
  } catch (error) {
    console.error("Error removing item from cart:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Function to get all items in the cart
export const getCartItems = async (req, res) => {
  try {
    const cartItems = await CartItem.find().populate("itemId");

    res.status(200).json(cartItems);
  } catch (error) {
    console.error("Error fetching cart items:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Function to generate a temporary ID
export const tempid = async (req, res) => {
  // Looked at the old work for reference
  const generateTempId = () => {
    let email = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < 30) {
      email += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return email;
  };

  try {
    const email = generateTempId();
    let tempid = await CartItem.findOne({ email });

    if (!tempid) {
      res.status(200).json({ email });
    }
  } catch (error) {
    console.error("Error generating temporary ID:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
