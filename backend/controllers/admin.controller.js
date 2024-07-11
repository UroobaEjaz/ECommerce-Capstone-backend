import mongoose from "mongoose";
import SoldItem from "../models/sold.model.js";

const sampleData = [
  {
    itemId: new mongoose.Types.ObjectId("6660fceb1465219f81a86696"),
    quantity: 2,
    price: 5.47,
    email: "john.doe@example.com",
    name: "Gatorade Lemon-Lime Sports Drink, 591 mL Bottles, 6 Pack, 6x591mL",
    image:
      "bec66c7b-db48-4815-beba-d0fe0f4a76ba.131b94727847ec1e42d63cd994eeb0dd",
    category: "Sports Drink",
    discount: 0,
    sold: true,
  },
  {
    itemId: new mongoose.Types.ObjectId("6660fd1c1465219f81a8669a"),
    quantity: 1,
    price: 2.79,
    email: "jane.smith@example.com",
    name: "evian® natural spring water 1L Bottle, Evian 1L",
    image:
      "491ae73d-4836-4132-8f7c-1d8e3eebbdad.be2ee6f8513feb92fbb9a9e4c8170d8e",
    category: "Water",
    discount: 0,
    sold: true,
  },
  {
    itemId: new mongoose.Types.ObjectId("666a139cd432a8a4536a5def"),
    quantity: 3,
    price: 5.89,
    email: "bob.jones@example.com",
    name: "Lay's Classic potato chips, 235g",
    image: "Lays Classic.png",
    category: "Chips",
    discount: 0,
    sold: true,
  },
  {
    itemId: new mongoose.Types.ObjectId("666a13e9d432a8a4536a5df3"),
    quantity: 5,
    price: 5.89,
    email: "alice.wilson@example.com",
    name: "Lay’s Ketchup flavoured potato chips, 235g",
    image: "lays keychup.png",
    category: "Chips",
    discount: 0,
    sold: true,
  },
  {
    itemId: new mongoose.Types.ObjectId("666a141ed432a8a4536a5df7"),
    quantity: 2,
    price: 5.89,
    email: "charles.brown@example.com",
    name: "Lay's Sour Cream & Onion flavoured potato chips, 235g",
    image: "lays sour cream.png",
    category: "Chips",
    discount: 0,
    sold: true,
  },
  {
    itemId: new mongoose.Types.ObjectId("666a1454d432a8a4536a5dfb"),
    quantity: 4,
    price: 5.89,
    email: "diane.miller@example.com",
    name: "Lay’s Magic Masala ridged flavoured potato chips, LAY'S MAGIC MASALA",
    image: "lays magic masala.png",
    category: "Chips",
    discount: 0,
    sold: true,
  },
  {
    itemId: new mongoose.Types.ObjectId("666a14cfd432a8a4536a5e05"),
    quantity: 1,
    price: 5.89,
    email: "frank.clark@example.com",
    name: "Lay's Bar-B-Q flavoured potato chips, 235g",
    image: "lays barbq.png",
    category: "Chips",
    discount: 0,
    sold: true,
  },
];

export const insertSampleData = async (req, res) => {
  try {
    await SoldItem.insertMany(sampleData);
    console.log("Sample data inserted successfully");
    res.status(201).json({ message: "Sample data inserted successfully" });
  } catch (error) {
    console.error("Error inserting sample data:", error);
  }
};

export const getInformation = async (req, res) => {
  try {
    const sales = await SoldItem.find();

    res.status(200).send(sales);
  } catch (error) {
    console.log("error getting sales", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
