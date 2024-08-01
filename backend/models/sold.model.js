import mongoose from "mongoose";

const soldItemSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  items: [
    {
      itemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Items",
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
      name: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      discount: {
        type: Number,
        default: 0,
      },
      sold: {
        type: Boolean,
        default: false,
      },
      payment: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const SoldItem = mongoose.model("SoldItem", soldItemSchema);

export default SoldItem;
