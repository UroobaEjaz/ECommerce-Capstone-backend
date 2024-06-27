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
