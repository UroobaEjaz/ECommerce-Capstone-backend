import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import itemsRoutes from "./routes/items.routes.js";
//import purchaseRoutes from "./routes/purchase.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import path from "path";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // from req.body
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/items", itemsRoutes);
//app.use("/api/purchase", purchaseRoutes);
app.use("/api/users", userRoutes);

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
// });

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
