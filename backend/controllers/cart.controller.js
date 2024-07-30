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



import CartItem from "../models/cart.model.js";
import Items from "../models/item.model.js";

export const addToCart = async (req, res) => {
  try {
    const { email, itemId } = req.body;
    console.log(`Adding item to cart: email=${email}, itemId=${itemId}`);

    const item = await Items.findById(itemId);
    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    let cartItem = await CartItem.findOne({ email });
    if (cartItem) {
      const itemIndex = cartItem.CartItems.findIndex(cart => cart.itemId.toString() === itemId);
      if (itemIndex !== -1) {
        cartItem.CartItems[itemIndex].quantity += 1;
      } else {
        cartItem.CartItems.push({ itemId, price: item.price, quantity: 1 });
      }
    } else {
      cartItem = new CartItem({
        email,
        CartItems: [{ itemId, price: item.price, quantity: 1 }]
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
    const { email, itemId } = req.body;
    console.log(`Removing item from cart: email=${email}, itemId=${itemId}`);

    const cartItem = await CartItem.findOne({ email });
    if (!cartItem) {
      return res.status(404).json({ error: "Cart not found" });
    }

    const itemIndex = cartItem.CartItems.findIndex(cart => cart.itemId.toString() === itemId);
    if (itemIndex === -1) {
      return res.status(404).json({ error: "Item not found in cart" });
    }

    cartItem.CartItems.splice(itemIndex, 1);
    await cartItem.save();
    res.status(200).json({ message: "Item removed from cart successfully" });
  } catch (error) {
    console.error("Error removing item from cart:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getCartDetails = async (req, res) => {
  const { email } = req.body;
  console.log(`Fetching cart details: email=${email}`);

  try {
    const cart = await CartItem.findOne({ email });
    if (!cart) {
      return res.status(404).json({ error: "Cart not found for this user" });
    }

    res.status(200).json({ cart });
    console.log("Cart details fetched successfully");
  } catch (error) {
    console.error("Error fetching cart details:", error);
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

// controllers/cartController.js

// controllers/cartController.js
//reference: item controller code
export const updateCartItemQuantity = async (req, res) => {
  const { itemId } = req.body;
  const { quantity, email } = req.body;

  if (!quantity || quantity < 1) {
    return res.status(400).json({ message: "Quantity must be greater than 0" });
  }

  try {
    const cart = await CartItem.findOne({ email });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const item = cart.CartItems.find(item => item.itemId.toString() === itemId);

    if (!item) {
      return res.status(404).json({ message: "Item not found in cart" });
    }

    item.quantity = quantity;
    await cart.save();

    res.status(200).json({ message: "Item quantity updated successfully", cart });
  } catch (error) {
    console.error("Error updating item quantity:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


// reference: https://www.google.com/search?q=cart+brad+traversy&sca_esv=c0f137e23ef54b4f&sca_upv=1&rlz=1C1OPNX_enCA1057CA1057&biw=1242&bih=545&tbm=vid&sxsrf=ADLYWIKU7v4tsyJT3k8aXwLQPNZvIWcOXg%3A1721924238881&ei=jnqiZpqiNYKa0PEP-fa4qA4&ved=0ahUKEwiaodrUy8KHAxUCDTQIHXk7DuUQ4dUDCA0&uact=5&oq=cart+brad+traversy&gs_lp=Eg1nd3Mtd2l6LXZpZGVvIhJjYXJ0IGJyYWQgdHJhdmVyc3kyBRAhGKABMgUQIRigATIFECEYoAEyBRAhGJ8FMgUQIRifBTIFECEYnwUyBRAhGJ8FSMxEUIkGWKlBcAJ4AJABAJgBjgGgAdwOqgEEMTQuNrgBA8gBAPgBAZgCFqACng-oAgrCAgcQIxgnGOoCwgIEECMYJ8ICCxAAGIAEGJECGIoFwgIKEAAYgAQYQxiKBcICCxAAGIAEGLEDGIMBwgIQEAAYgAQYsQMYgwEYigUYCsICCBAAGIAEGLEDwgIOEAAYgAQYsQMYgwEYigXCAgUQABiABMICDRAAGIAEGLEDGEMYigXCAg0QABiABBixAxiDARgKwgIHEAAYgAQYCsICChAAGIAEGLEDGArCAgcQABiABBgNwgIGEAAYDRgewgIIEAAYFhgKGB7CAgsQABiABBiGAxiKBcICCBAAGAUYDRgewgIIEAAYgAQYogTCAgQQIRgVwgIHECEYoAEYCpgDA4gGAZIHBDE1LjegB52FAQ&sclient=gws-wiz-video#fpstate=ive&vld=cid:23d906db,vid:hpLr23QY8fU,st:0