import express from 'express';
import { addToWishlist, getWishlistItems, removeFromWishlist} from '../controllers/wishList.controller.js';

const router = express.Router();

// Route for adding item to wishlist
router.post('/wishlist/add', addToWishlist);
router.get('/wishlist/items', getWishlistItems);
router.delete('/wishlist/remove/:id', removeFromWishlist);



export default router;
