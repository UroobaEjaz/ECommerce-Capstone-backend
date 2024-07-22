import mongoose from "mongoose";

const instaCartSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  lists: [
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
        },
      ],
    },
  ],
});

const InstaCart = mongoose.model("InstaCart", instaCartSchema);

export default InstaCart;
