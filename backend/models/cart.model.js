import mongoose from "mongoose";

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
<<<<<<< HEAD
        }, 
=======
        },
>>>>>>> 84c6fa6de7c200c26799b55e484f07e9404bb5fc
      },
    ],
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
