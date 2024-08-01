import express from 'express';
import { addToWishlist, getWishlistItems, removeFromWishlist} from '../controllers/wishList.controller.js';

const router = express.Router();

// Route for adding item to wishlist
router.post('/wishlist/add', addToWishlist);
router.get('/wishlist/items', getWishlistItems);
router.delete('/wishlist/remove', removeFromWishlist);


// reference: https://www.google.com/search?q=cart+brad+traversy&sca_esv=c0f137e23ef54b4f&sca_upv=1&rlz=1C1OPNX_enCA1057CA1057&biw=1242&bih=545&tbm=vid&sxsrf=ADLYWIKU7v4tsyJT3k8aXwLQPNZvIWcOXg%3A1721924238881&ei=jnqiZpqiNYKa0PEP-fa4qA4&ved=0ahUKEwiaodrUy8KHAxUCDTQIHXk7DuUQ4dUDCA0&uact=5&oq=cart+brad+traversy&gs_lp=Eg1nd3Mtd2l6LXZpZGVvIhJjYXJ0IGJyYWQgdHJhdmVyc3kyBRAhGKABMgUQIRigATIFECEYoAEyBRAhGJ8FMgUQIRifBTIFECEYnwUyBRAhGJ8FSMxEUIkGWKlBcAJ4AJABAJgBjgGgAdwOqgEEMTQuNrgBA8gBAPgBAZgCFqACng-oAgrCAgcQIxgnGOoCwgIEECMYJ8ICCxAAGIAEGJECGIoFwgIKEAAYgAQYQxiKBcICCxAAGIAEGLEDGIMBwgIQEAAYgAQYsQMYgwEYigUYCsICCBAAGIAEGLEDwgIOEAAYgAQYsQMYgwEYigXCAgUQABiABMICDRAAGIAEGLEDGEMYigXCAg0QABiABBixAxiDARgKwgIHEAAYgAQYCsICChAAGIAEGLEDGArCAgcQABiABBgNwgIGEAAYDRgewgIIEAAYFhgKGB7CAgsQABiABBiGAxiKBcICCBAAGAUYDRgewgIIEAAYgAQYogTCAgQQIRgVwgIHECEYoAEYCpgDA4gGAZIHBDE1LjegB52FAQ&sclient=gws-wiz-video#fpstate=ive&vld=cid:23d906db,vid:hpLr23QY8fU,st:0
export default router;
