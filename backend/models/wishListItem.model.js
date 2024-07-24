import mongoose from 'mongoose';

const WishlistItemSchema = new mongoose.Schema({
  item: { type: mongoose.Schema.Types.ObjectId, ref: 'Items', required: true },
  createdAt: { type: Date, default: Date.now },
});

const WishlistItem = mongoose.model('WishlistItem', WishlistItemSchema);

export default WishlistItem;
