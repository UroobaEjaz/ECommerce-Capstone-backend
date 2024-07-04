import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
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
    description: {
      type: String,
      required: true,
    },
    countInStock: {
      type: Number,
      required: true,
    },
    normalPrice: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
      default: 0,
    },
    discountStart: {
      type: String,
      required: true,
      default: "na",
    },
    discountEnd: {
      type: String,
      required: true,
      default: "na",
    },
    show: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

// changed the name of the model to Items (instead of Item)
const Items = mongoose.model("Items", itemSchema);

export default Items;
