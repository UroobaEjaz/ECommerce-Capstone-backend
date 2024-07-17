import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");

    res.status(200).send(users);
  } catch (error) {
    console.log("error getting users", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
