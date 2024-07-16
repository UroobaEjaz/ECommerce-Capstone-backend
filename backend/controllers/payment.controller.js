import stripePackage from 'stripe';
import CartItem from '../models/cart.model.js'; // Ensure correct path and model name

// Configure Stripe with your secret key
const stripeSecretKey = 'sk_test_51PcvRw2NAyVt2xlZU2sciY2mwNKeGvzR8CRtl1eRn0679zmGkd5mHCSptUqF1IQ0IjmmQR7SiaGCh0EKdVYdWb1S00jY1eBXRT'; // Replace with your Stripe secret key
const stripe = stripePackage(stripeSecretKey);

// Function to process payments
export const processPayment = async (req, res) => {
  try {
    const { email, amount, token } = req.body;

    // Retrieve cart items based on email (assuming you store items associated with the email)
    const cartItems = await CartItem.find({ email });

    if (!cartItems || cartItems.length === 0) {
      return res.status(404).json({ error: 'No items found in cart' });
    }

    // Calculate total amount from cart items (assuming price is stored in each cart item)
    const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    // Create a charge with Stripe
    const charge = await stripe.charges.create({
      amount: totalAmount * 100, // Amount in cents
      currency: 'usd', // Currency code (USD in this example)
      source: token, // Token obtained from frontend (Stripe.js or Elements)
      description: 'Payment for items in cart',
    });

    // Handle successful charge (update order status, clear cart, etc.)
    // For demo purposes, assuming you would clear the cart after successful payment
    await CartItem.deleteMany({ email });

    res.status(200).json({ message: 'Payment successful', charge });
  } catch (error) {
    console.error('Error processing payment:', error);
    res.status(500).json({ error: 'An error occurred while processing payment' });
  }
};
