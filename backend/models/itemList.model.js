import mongoose from "mongoose";

const listItemSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  listname: [
    {
      name: {
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
          date: {
            type: Date,
            default: Date.now,
          },
        },
      ],
    },
  ],
});

const ListItem = mongoose.model("ListItem", listItemSchema);

export default ListItem;
