import express from 'express';
import { addToWishlist} from '../controllers/wishList.controller.js';

const router = express.Router();

// Route for adding item to wishlist
router.post('/wishlist/add', addToWishlist);


export default router;
