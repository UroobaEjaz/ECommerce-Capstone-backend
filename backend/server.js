import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import itemsRoutes from "./routes/items.routes.js";
//import purchaseRoutes from "./routes/purchase.routes.js";
import userRoutes from "./routes/user.routes.js";
import cartRoutes from "./routes/cart.routes.js";
import adminRoutes from "./routes/admin.routes.js";
//import adminRoutes from "./routes/admin.routes.js";
import stripePackage from 'stripe';
import connectToMongoDB from "./db/connectToMongoDB.js";
import wishListRoutes from "./routes/wishList.routes.js";
//import paymentRoutes from "./routes/payment.routes.js";

import path from "path";
import cors from "cors";

const app = express();

app.use(cors());

dotenv.config();
const PORT = process.env.PORT || 5000;


const stripe = stripePackage('sk_test_51PcvRw2NAyVt2xlZU2sciY2mwNKeGvzR8CRtl1eRn0679zmGkd5mHCSptUqF1IQ0IjmmQR7SiaGCh0EKdVYdWb1S00jY1eBXRT'); // Replace with your own Stripe secret key


app.use(express.json()); // from req.body
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/items", itemsRoutes);
//app.use("/api/purchase", purchaseRoutes);
app.use("/api/users", userRoutes);
//cart routes
app.use("/api/cart", cartRoutes); // cart routes under /api/cart
app.use("/api/admin", adminRoutes);
app.use("/api", wishListRoutes);

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
// });

app.post('/api/payment', async (req, res) => {
  const { amount, payment_method_id } = req.body;

  try {
    // Create PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'cad',
      payment_method: payment_method_id,
      confirmation_method: 'manual',
      confirm: true,
    });

    res.status(200).json({ client_secret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error creating PaymentIntent:', error);
    res.status(500).json({ error: 'Failed to create PaymentIntent' });
  }
}); 
//app.use("/api/payment" , paymentRoutes)


app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
