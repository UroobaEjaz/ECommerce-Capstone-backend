import SoldItem from "../models/sold.model.js";

// used chatgpt for the sample data
const items = [
  {
    _id: "6660fceb1465219f81a86696",
    name: "Gatorade Lemon-Lime Sports Drink, 591 mL Bottles, 6 Pack, 6x591mL",
    price: 5.47,
    image:
      "bec66c7b-db48-4815-beba-d0fe0f4a76ba.131b94727847ec1e42d63cd994eeb0dd",
    category: "Sports Drink",
  },
  {
    _id: "6660fd1c1465219f81a8669a",
    name: "evian® natural spring water 1L Bottle, Evian 1L",
    price: 2.79,
    image:
      "491ae73d-4836-4132-8f7c-1d8e3eebbdad.be2ee6f8513feb92fbb9a9e4c8170d8e",
    category: "Water",
  },
  {
    _id: "666a139cd432a8a4536a5def",
    name: "Lay's Classic potato chips, 235g",
    price: 5.89,
    image: "Lays Classic.png",
    category: "Chips",
  },
  {
    _id: "666a13e9d432a8a4536a5df3",
    name: "Lay’s Ketchup flavoured potato chips, 235g",
    price: 5.89,
    image: "lays keychup.png",
    category: "Chips",
  },
  {
    _id: "666a141ed432a8a4536a5df7",
    name: "Lay's Sour Cream & Onion flavoured potato chips, 235g",
    price: 5.89,
    image: "lays sour cream.png",
    category: "Chips",
  },
  {
    _id: "666a1454d432a8a4536a5dfb",
    name: "Lay’s Magic Masala ridged flavoured potato chips, LAY'S MAGIC MASALA",
    price: 5.89,
    image: "lays magic masala.png",
    category: "Chips",
  },
  {
    _id: "666a14cfd432a8a4536a5e05",
    name: "Lay's Bar-B-Q flavoured potato chips, 235g",
    price: 5.89,
    image: "lays barbq.png",
    category: "Chips",
  },
  {
    _id: "66862139aa62e9ecf6f521c3",
    name: "test wallpaper 4",
    price: 10,
    image: "wallpaperflare.com_wallpaper.jpg",
    category: "wallpaper",
  },
  {
    _id: "668a507056542a03f371f3e5",
    name: "asdfasdfasd",
    price: 23,
    image: "wallpaperflare.com_wallpaper (2).jpg",
    category: "sdfsadfa",
  },
  {
    _id: "668a516e5a0e7fc468a11471",
    name: "werwerqwerqweer",
    price: 18.63,
    image: "wallpaperflare.com_wallpaper.jpg",
    category: "asdfasfd",
  },
];

const generateSales = () => {
  const sales = [];
  for (let i = 0; i < 50; i++) {
    const randomItems = [];
    const numItems = Math.floor(Math.random() * 5) + 1;
    for (let j = 0; j < numItems; j++) {
      const randomItem = items[Math.floor(Math.random() * items.length)];
      randomItems.push({
        itemId: randomItem._id,
        quantity: Math.floor(Math.random() * 10) + 1,
        price: randomItem.price,
        name: randomItem.name,
        image: randomItem.image,
        category: randomItem.category,
        discount: Math.floor(Math.random() * 5),
        sold: true,
        date: new Date(),
      });
    }
    const sale = {
      email: `buyer${i + 1}@example.com`,
      items: randomItems,
    };
    sales.push(sale);
  }
  return sales;
};

export const insertSampleData = async (req, res) => {
  const sales = generateSales();
  try {
    await SoldItem.insertMany(sales);
    console.log("Sample data inserted successfully");
    res.status(201).json({ message: "Sample data inserted successfully" });
  } catch (error) {
    console.error("Error inserting sample data:", error);
    res.status(500).json({ message: "Error inserting sample data" });
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
