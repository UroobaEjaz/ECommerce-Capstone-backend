/*import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    cartItems: [
      {
        _id: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },

      },
    ],
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;   */

// cart.model.js

import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  CartItems: [
    {
      itemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Items", // Reference to the Items model
        required: true,
      },
      quantity: {
        type: Number,
        default: 1,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
});

const CartItem = mongoose.model("CartItem", cartItemSchema);

export default CartItem;
