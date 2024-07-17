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
  const { email } = req.body;
  console.log(email);

  try {
    // Find the cart for the user
    const cart = await Cart.findOne({ email });

    if (!cart) {
      return res.status(404).json({ error: "Cart not found for this user" });
    }

    cart.cartItems.map((item) => {
      console.log(item);
    });

    res.status(200).json({ cart });
    console.log("Cart details fetched successfully");
  } catch (error) {
    console.error("Error fetching cart details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}; */




// cart.controller.js

import CartItem from "../models/cart.model.js";
import Items from "../models/item.model.js";

/*export const addToCart = async (req, res) => {
  try {
    const { itemId } = req.body;
    const item = await Items.findById(itemId);

    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    let cartItem = await CartItem.findOne({ itemId });

    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      cartItem = new CartItem({ itemId });
    }

    await cartItem.save();

    res.status(201).json({ message: "Item added to cart successfully" });
  } catch (error) {
    console.error("Error adding item to cart:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};  */
export const addToCart = async (req, res) => {
  try {
    const { itemId } = req.body;
    const item = await Items.findById(itemId);

    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    let cartItem = await CartItem.findOne({ itemId });

    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      // Ensure to provide the 'price' field when creating a new CartItem
      cartItem = new CartItem({
        itemId,
        price: item.price, // Assuming 'item' has a 'price' field
      });
    }

    await cartItem.save();

    res.status(201).json({ message: "Item added to cart successfully" });
  } catch (error) {
    console.error("Error adding item to cart:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

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

export const getCartItems = async (req, res) => {
  try {
    const cartItems = await CartItem.find().populate("itemId");

    res.status(200).json(cartItems);
  } catch (error) {
    console.error("Error fetching cart items:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const tempid = async (req, res) => {
  // looked at the old work for reference
  const generateTempId = () => {
    let email = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
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
    console.error("Error creating/updating cart:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
