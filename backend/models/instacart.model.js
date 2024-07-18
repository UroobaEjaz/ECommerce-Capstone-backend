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
        },
      ],
    },
  ],
});

const ListItem = mongoose.model("ListItem", listItemSchema);

export default ListItem;
