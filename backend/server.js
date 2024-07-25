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


const stripe = stripePackage('sk_test_51PYndvHxPts9QUETMUdTC8rm196kYkn6t5YpCPHxv93FmYrhVCYccO3r7E5oRMLqMmPFQxYSx0AcDSb3Zw1965Yh00eZmtmCHB'); // Replace with your own Stripe secret key


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

/*app.post('/api/payment', async (req, res) => {
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
//app.use("/api/payment" , paymentRoutes)*/

app.post('/api/checkout', async (req, res) => {
  const items = req.body.items;
  let lineItems = [];

  items.forEach((item) => {
      lineItems.push({
          price_data: {
              currency: 'cad',
              product_data: {
                  name: item.name,
              },
              unit_amount: item.price * 100,
          },
          quantity: item.quantity,
      });
  });

  try {
      const session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          line_items: lineItems,
          mode: 'payment',
          success_url: 'http://localhost:3000/Success',
          cancel_url: 'http://localhost:3000/Cancel',
      });

      res.send(JSON.stringify({
          url: session.url
      }));
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});


app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});


 // reference: https://www.google.com/search?q=cart+brad+traversy&sca_esv=c0f137e23ef54b4f&sca_upv=1&rlz=1C1OPNX_enCA1057CA1057&biw=1242&bih=545&tbm=vid&sxsrf=ADLYWIKU7v4tsyJT3k8aXwLQPNZvIWcOXg%3A1721924238881&ei=jnqiZpqiNYKa0PEP-fa4qA4&ved=0ahUKEwiaodrUy8KHAxUCDTQIHXk7DuUQ4dUDCA0&uact=5&oq=cart+brad+traversy&gs_lp=Eg1nd3Mtd2l6LXZpZGVvIhJjYXJ0IGJyYWQgdHJhdmVyc3kyBRAhGKABMgUQIRigATIFECEYoAEyBRAhGJ8FMgUQIRifBTIFECEYnwUyBRAhGJ8FSMxEUIkGWKlBcAJ4AJABAJgBjgGgAdwOqgEEMTQuNrgBA8gBAPgBAZgCFqACng-oAgrCAgcQIxgnGOoCwgIEECMYJ8ICCxAAGIAEGJECGIoFwgIKEAAYgAQYQxiKBcICCxAAGIAEGLEDGIMBwgIQEAAYgAQYsQMYgwEYigUYCsICCBAAGIAEGLEDwgIOEAAYgAQYsQMYgwEYigXCAgUQABiABMICDRAAGIAEGLEDGEMYigXCAg0QABiABBixAxiDARgKwgIHEAAYgAQYCsICChAAGIAEGLEDGArCAgcQABiABBgNwgIGEAAYDRgewgIIEAAYFhgKGB7CAgsQABiABBiGAxiKBcICCBAAGAUYDRgewgIIEAAYgAQYogTCAgQQIRgVwgIHECEYoAEYCpgDA4gGAZIHBDE1LjegB52FAQ&sclient=gws-wiz-video#fpstate=ive&vld=cid:23d906db,vid:hpLr23QY8fU,st:0