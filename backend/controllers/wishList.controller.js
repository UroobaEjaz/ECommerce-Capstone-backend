import WishlistItem from '../models/wishListItem.model.js';

export const addToWishlist = async (req, res) => {
  try {
    const { itemId } = req.body;

    // Check if item ID is provided
    if (!itemId) {
      return res.status(400).json({ error: "Item ID is required" });
    }

    // Check if item exists
    const existingItem = await WishlistItem.findOne({ item: itemId });
    if (existingItem) {
      return res.status(400).json({ message: "Item already in wishlist" });
    }

    // Create new WishlistItem
    const newWishlistItem = new WishlistItem({ item: itemId });
    await newWishlistItem.save();

    res.status(201).json({ message: "Item added to wishlist successfully" });
  } catch (error) {
    console.error("Error adding item to wishlist:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
