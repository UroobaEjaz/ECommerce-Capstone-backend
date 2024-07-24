import User from "../models/user.model.js";
import InstaCart from "../models/instacart.model.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    res.status(200).send(users);
  } catch (error) {
    console.log("error getting users", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const instaCart = async (req, res) => {
  const { email, lists } = req.body;

  try {
    let instaCart = await InstaCart.findOne({ email });

    if (!instaCart) {
      instaCart = new InstaCart({ email, lists });
    } else {
      instaCart.lists = lists;
    }

    await instaCart.save();

    res.status(200).json({ instaCart });
  } catch (error) {
    console.error("Error creating list:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getInstaCart = async (req, res) => {
  const { email } = req.body;

  try {
    const instaCart = await InstaCart.findOne({ email });

    if (instaCart) {
      res.status(200).json({ instaCart });
    } else {
      res.status(404).json({ error: "Cart not found" });
    }
  } catch (error) {
    console.error("Error getting cart:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
