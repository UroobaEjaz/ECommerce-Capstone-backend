
/*import mongoose from "mongoose";

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

export default CartItem;  */

/*
import mongoose from 'mongoose';

const cartItemSchema = new mongoose.Schema({
  email: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  itemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Items',
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
});

const CartItem = mongoose.model('CartItem', cartItemSchema);

export default CartItem;
*/
import mongoose from 'mongoose';

const cartItemSchema = new mongoose.Schema({
  email: {
    type: String,  // Correct type for email
    required: true,
  },
  itemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item',  // Adjust as per your model definition
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
});

const CartItem = mongoose.model('CartItem', cartItemSchema);

export default CartItem;


