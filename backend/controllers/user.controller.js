import User from "../models/user.model.js";
import ListItem from "../models/itemList.model.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    res.status(200).send(users);
  } catch (error) {
    console.log("error getting users", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const createList = async (req, res) => {
  const { email, listItems } = req.body;

  try {
    let list = await ListItem.findOne({ email });
    let exist = false;

    if (!list) {
      list = new ListItem({ email, listItems });
    } else {
      list.listItems = listItems;
      exist = true;
    }

    await list.save();

    if (exist) {
      console.log("list updated successfully");
    } else {
      console.log("list created successfully");
    }
    res.status(200).json({ list });
  } catch (error) {
    console.error("Error creating/updating list:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getList = async (req, res) => {
  const { email } = req.body;
  console.log(email);

  try {
    // Find the list for the user
    const list = await ListItem.findOne({ email });

    if (!list) {
      return res.status(404).json({ error: "list not found for this user" });
    }

    res.status(200).json({ list });
    console.log("list details fetched successfully");
  } catch (error) {
    console.error("Error fetching list details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
