import Item from "../models/item.model.js";
{
  /*
//added material-------------> If it does not work, remove from here

export async function performVisualSearch(imageUrl) {
  // Dummy logic to simulate visual search results
  const dummyVisualResults = [
    { id: 1, name: "Visual Result 1", imageUrl: "path/to/image1.jpg" },
    { id: 2, name: "Visual Result 2", imageUrl: "path/to/image2.jpg" },
    // Add more results as needed
  ];

  return dummyVisualResults;
}


*/
}

export const addItem = async (req, res) => {
  try {
    const { name, price, category, description, countInStock } = req.body;
    const image = req.file.originalname;
    const normalPrice = price;

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
      normalPrice,
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
  console.log(req.body);
  try {
    const { category } = req.body;
    const item = await Item.find({ category });

    if (item == "") {
      return res.status(404).json({ error: "No item found" });
    }

    res.status(200).json(item);
  } catch (error) {
    console.log("error getting item by id", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getItemByName = async (req, res) => {
  try {
    const { name } = req.body;
    // refreenced: https://www.geeksforgeeks.org/how-to-query-mongodb-with-like/
    const item = await Item.find({ name: { $regex: name } });

    if (item == "") {
      return res.status(404).json({ error: "Item not found" });
    }

    res.status(200).json(item);
  } catch (error) {
    console.log("error getting item by id", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getItemsById = async (req, res) => {
  try {
    const { id } = req.body;

    const item = await Item.findById(id);

    res.status(200).json(item);
  } catch (error) {
    console.log("error getting item by id", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const listItemsById = async (req, res) => {
  try {
    const { ids } = req.body;

    const items = await Item.find({ _id: { $in: ids } });

    res.status(200).json(items);
  } catch (error) {
    console.log("error listing items by id", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateItem = async (req, res) => {
  try {
    const { id } = req.query;

    const { name, price, category, description, countInStock } = req.body;

    // asked chatgpt to fix this
    let image;
    if (req.file) {
      image = req.file.originalname;
      console.log("New image:", image);
    } else {
      console.log("No new image uploaded");
    }

    if (price < 0) {
      return res.status(400).json({ error: "Price cannot be negative" });
    }

    if (countInStock < 0) {
      return res
        .status(400)
        .json({ error: "Count in stock cannot be negative" });
    }

    const item = await Item.findById({ id });

    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    // asked chatgpt to fix this
    if (name) item.name = name;
    if (price) item.price = price;
    if (category) item.category = category;
    if (description) item.description = description;
    if (countInStock) item.countInStock = countInStock;
    if (image) item.image = image;

    if (item) {
      await item.save();

      res.status(201).json({
        Res: "Item updates successfully!",
      });
    } else {
      res.status(400).json({ error: "Invalid item data" });
    }
  } catch (error) {
    console.log("error creating item", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// work panding
export const discountItem = async (req, res) => {
  try {
    const { ids, discountPercentage, discountStart, discountEnd } = req.body;
    console.log(
      "id",
      ids,
      "percent:",
      discountPercentage,
      "start:",
      discountStart,
      "end:",
      discountEnd
    );

    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return res
        .status(400)
        .json({ error: "Item IDs are required and should be an array" });
    }

    if (discountPercentage <= 0 || discountPercentage > 100) {
      return res
        .status(400)
        .json({ error: "Discount percentage should be between 1 and 100" });
    }

    if (!discountStart || !discountEnd || discountStart >= discountEnd) {
      return res
        .status(400)
        .json({ error: "Invalid discount start or end date" });
    }

    // used chatgpt to fix this
    const items = await Item.find({ _id: { $in: ids } });

    if (!items || items.length === 0) {
      return res.status(404).json({ error: "Items not found" });
    }

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const originalPrice = item.price;
      const discountedPrice = originalPrice * (1 - discountPercentage / 100);

      item.price = Math.round(discountedPrice * 100) / 100;

      item.discount = discountPercentage;
      item.discountStart = discountStart;
      item.discountEnd = discountEnd;
      await item.save();
    }

    res.status(200).json({ message: "Items discounted successfully" });
  } catch (error) {
    console.error("Error discounting items:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const removeDiscount = async (req, res) => {
  try {
    const { ids } = req.body;

    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return res
        .status(400)
        .json({ error: "Item IDs are required and should be an array" });
    }

    const items = await Item.find({ _id: { $in: ids } });

    if (!items || items.length === 0) {
      return res.status(404).json({ error: "Items not found" });
    }

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      item.price = item.normalPrice;
      item.discount = 0;
      item.discountStart = "na";
      item.discountEnd = "na";
      await item.save();
    }

    res.status(200).json({ message: "Discounts removed successfully" });
  } catch (error) {
    console.error("Error removing discounts:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const hideItem = async (req, res) => {
  try {
    const { ids } = req.body;

    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return res
        .status(400)
        .json({ error: "Item IDs are required and should be an array" });
    }

    // used chatgpt to fix this
    const items = await Item.updateMany(
      { _id: { $in: ids } },
      { $set: { show: false } }
    );

    if (items.nModified === 0) {
      return res
        .status(404)
        .json({ error: "No items found with the provided IDs" });
    }

    res.status(200).json({ message: "Items hidden successfully", items });
  } catch (error) {
    console.error("Error hiding items:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const showItem = async (req, res) => {
  try {
    const { ids } = req.body;

    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return res
        .status(400)
        .json({ error: "Item IDs are required and should be an array" });
    }

    const items = await Item.updateMany(
      { _id: { $in: ids } },
      { $set: { show: true } }
    );

    if (items.nModified === 0) {
      return res
        .status(404)
        .json({ error: "No items found with the provided IDs" });
    }

    res.status(200).json({ message: "Items shown successfully", items });
  } catch (error) {
    console.error("Error showing items:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

import fs from "fs";
import path from "path";

export const deleteItem = async (req, res) => {
  const __dirname = path.resolve();

  try {
    const { _id } = req.body;

    if (!_id) {
      return res.status(400).json({ error: "Item ID is required" });
    }

    let item = await Item.findById(_id);

    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    const filePath = path.join(__dirname, "uploads", item.image);

    // https://betterstack.com/community/questions/how-to-remove-file-in-node-js/
    if (fs.existsSync(filePath)) {
      try {
        fs.unlinkSync(filePath);
        console.log(`Deleted file: ${filePath}`);
      } catch (error) {
        console.error("Error deleting file:", error);
        return res.status(500).json({ error: "Failed to delete file" });
      }
    } else {
      console.log(`File not found: ${filePath}`);
    }

    await item.deleteOne();
    return res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    console.error("Error deleting item:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const test = async (req, res) => {};
