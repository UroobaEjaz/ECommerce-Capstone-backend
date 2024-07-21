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


export const getWishlistItems = async (req, res) => {
  try {
    const wishlistItems = await WishlistItem.find().populate('item');
    res.status(200).json(wishlistItems);
  } catch (error) {
    console.error("Error fetching wishlist items:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const removeFromWishlist = async (req, res) => {
  try {
    const { id } = req.params;
    await WishlistItem.findByIdAndDelete(id);
    res.status(200).json({ message: "Item removed from wishlist" });
  } catch (error) {
    console.error("Error removing item from wishlist:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
