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
    let tempid = await Cart.findOne({ email });

    if (!tempid) {
      res.status(200).json({ email });
    }
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
};
*/


import Cart from "../models/cart.model.js";

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

// Function to generate a temporary ID (example purpose)
export const tempid = async (req, res) => {
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
    let email;
    let tempid;
    do {
      email = generateTempId();
      tempid = await Cart.findOne({ email });
    } while (tempid);

    res.status(200).json({ email });
  } catch (error) {
    console.error("Error generating temp ID:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Function to retrieve cart details for a user
export const getCartDetails = async (req, res) => {
  const { email } = req.body;

  try {
    const cart = await Cart.findOne({ email });

    if (!cart) {
      return res.status(404).json({ error: "Cart not found for this user" });
    }

    res.status(200).json({ cart });
  } catch (error) {
    console.error("Error fetching cart details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Function to add an item to the cart
export const addToCart = async (req, res) => {
  const { email, item } = req.body;

  try {
    if (!email || !item) {
      return res.status(400).json({ error: "Email and item are required" });
    }

    let cart = await Cart.findOne({ email });

    if (!cart) {
      cart = new Cart({ email, cartItems: [item] });
    } else {
      const existingItem = cart.cartItems.find(cartItem => cartItem._id === item._id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        cart.cartItems.push(item);
      }
    }

    await cart.save();
    res.status(200).json({ cart });
  } catch (error) {
    console.error("Error adding item to cart:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Function to remove an item from the cart
export const removeFromCart = async (req, res) => {
  const { email, itemId } = req.body;

  try {
    if (!email || !itemId) {
      return res.status(400).json({ error: "Email and itemId are required" });
    }

    let cart = await Cart.findOne({ email });

    if (!cart) {
      return res.status(404).json({ error: "Cart not found for this user" });
    }

    cart.cartItems = cart.cartItems.filter(item => item._id !== itemId);

    await cart.save();
    res.status(200).json({ cart });
  } catch (error) {
    console.error("Error removing item from cart:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
