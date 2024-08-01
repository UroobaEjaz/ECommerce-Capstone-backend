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
    const { itemId } = req.body;
    console.log(`Removing item from wishlist: itemId=${itemId}`);

    // Find the WishlistItem by itemId
    const wishlistItem = await WishlistItem.findOne({ item: itemId });
    if (!wishlistItem) {
      return res.status(404).json({ error: "Item not found in wishlist" });
    }

    // Remove the item from the wishlist
    await WishlistItem.findByIdAndDelete(wishlistItem._id);

    res.status(200).json({ message: "Item removed from wishlist successfully" });
  } catch (error) {
    console.error("Error removing item from wishlist:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// reference: https://www.google.com/search?q=cart+brad+traversy&sca_esv=c0f137e23ef54b4f&sca_upv=1&rlz=1C1OPNX_enCA1057CA1057&biw=1242&bih=545&tbm=vid&sxsrf=ADLYWIKU7v4tsyJT3k8aXwLQPNZvIWcOXg%3A1721924238881&ei=jnqiZpqiNYKa0PEP-fa4qA4&ved=0ahUKEwiaodrUy8KHAxUCDTQIHXk7DuUQ4dUDCA0&uact=5&oq=cart+brad+traversy&gs_lp=Eg1nd3Mtd2l6LXZpZGVvIhJjYXJ0IGJyYWQgdHJhdmVyc3kyBRAhGKABMgUQIRigATIFECEYoAEyBRAhGJ8FMgUQIRifBTIFECEYnwUyBRAhGJ8FSMxEUIkGWKlBcAJ4AJABAJgBjgGgAdwOqgEEMTQuNrgBA8gBAPgBAZgCFqACng-oAgrCAgcQIxgnGOoCwgIEECMYJ8ICCxAAGIAEGJECGIoFwgIKEAAYgAQYQxiKBcICCxAAGIAEGLEDGIMBwgIQEAAYgAQYsQMYgwEYigUYCsICCBAAGIAEGLEDwgIOEAAYgAQYsQMYgwEYigXCAgUQABiABMICDRAAGIAEGLEDGEMYigXCAg0QABiABBixAxiDARgKwgIHEAAYgAQYCsICChAAGIAEGLEDGArCAgcQABiABBgNwgIGEAAYDRgewgIIEAAYFhgKGB7CAgsQABiABBiGAxiKBcICCBAAGAUYDRgewgIIEAAYgAQYogTCAgQQIRgVwgIHECEYoAEYCpgDA4gGAZIHBDE1LjegB52FAQ&sclient=gws-wiz-video#fpstate=ive&vld=cid:23d906db,vid:hpLr23QY8fU,st:0