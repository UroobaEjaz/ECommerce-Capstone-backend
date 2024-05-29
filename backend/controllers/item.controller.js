import Item from "../models/item.model.js";

export const addItem = async (req, res) => {
  try {
    const { name, price, category, description, countInStock } = req.body;
    const image = req.file.path;

    if (price < 0) {
      return res.status(400).json({ error: "Price cannot be negative" });
    }

    if (countInStock < 0) {
      return res
        .status(400)
        .json({ error: "Count in stock cannot be negative" });
    }

    const item = await Item.findOne({ name });

    if (item) {
      return res.status(201).json({ message: "Item  already exists!" });
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

export const getItems = async (req, res) => {
  try {
    const items = await Item.find();

    res.status(200).send(items);
  } catch (error) {
    console.log("error getting items", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getItemByCategory = async (req, res) => {
  try {
    const { category } = res.body;
    const item = await Item.find({ category });

    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.status(200).json(item);
  } catch (error) {
    console.log("error getting item by id", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getItemImage = async (req, res) => {
  // res.sendFile("S:/Semester 4/ECommerce/uploads/rainmeter.jpg");
  const { category } = req.body;
  console.log(category);
  console.log(req.body);
  res.send(req.body);
};
