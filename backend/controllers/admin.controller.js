import SoldItem from "../models/sold.model.js";
import Item from "../models/item.model.js";

// used chatgpt for the sample data
const generateSales = async () => {
  try {
    const items = await Item.find(); // Fetch all items from the database
    if (!items.length) {
      throw new Error("No items found in the database");
    }

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
          payment: "Credit Card", // Example payment method
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
  } catch (error) {
    console.error("Error generating sales data:", error);
    throw new Error("Error generating sales data");
  }
};

export const insertSampleData = async (req, res) => {
  try {
    const sales = await generateSales(); // Fetch items from the database and generate sales data
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

export const getTopSellingItemsByCategory = async (req, res) => {
  let { category, itemid } = req.body;
  console.log(category, itemid);

  try {
    const sales = await SoldItem.find({
      "items.category": category,
    });

    const itemMap = sales.reduce((acc, sale) => {
      sale.items.forEach((item) => {
        if (item.category === category) {
          if (!acc[item.name]) {
            acc[item.name] = { ...item._doc, totalSold: 0 };
          }
          acc[item.name].totalSold += item.quantity;
        }
      });
      return acc;
    }, {});

    const sortedItems = Object.values(itemMap).sort(
      (a, b) => b.totalSold - a.totalSold
    );

    const filteredItems = sortedItems.filter(
      (item) => item.itemId.toString() !== itemid
    );

    const topItems = filteredItems.slice(0, 4).map((item) => ({
      itemId: item.itemId,
    }));

    for (let i = 0; i < topItems.length; i++) {
      const item = await Item.findById(topItems[i].itemId);
      topItems[i] = { ...topItems[i], ...item._doc };
    }

    console.log("top", topItems);

    res.status(200).json(topItems);
  } catch (error) {
    console.error("Error getting top selling items by category:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};