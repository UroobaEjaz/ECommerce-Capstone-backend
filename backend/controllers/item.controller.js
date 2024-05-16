import Item from "../models/item.model.js";

export const addItem = async (req, res) => {
  try {
    const { name, price, image, category, description, countInStock } =
      req.body;

    if (price < 0) {
      return res.status(400).json({ error: "Price cannot be negative" });
    }

    if (countInStock < 0) {
      return res
        .status(400)
        .json({ error: "Count in stock cannot be negative" });
    }

    const item = await Item.findOne({ email });

    if (item) {
      return res.status(201).json({ message: "User created successfully!" });
    }

    const newItem = new Item({
      name,
      price,
      image,
      category,
      description,
      countInStock,
    });

    if (newItem) {
      await newItem.save();

      res.status(201).json({
        Res: "Item created successfully!",
      });
    } else {
      res.status(400).json({ error: "Invalid item data" });
    }
  } catch (error) {
    console.log("error creating item", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
