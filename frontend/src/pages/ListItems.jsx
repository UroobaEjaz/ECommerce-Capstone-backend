import React, { useEffect, useState } from "react";

const ListItems = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [countInStock, setCountInStock] = useState("");

  const getItems = async () => {
    try {
      const response = await fetch("/api/items/get", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      setItems(data);
      console.log(data);
    } catch (error) {
      console.log("error getting items", error);
    }
  };

  // used chatgpt to fix this feature
  const addItem = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", name);
    formData.append("image", image);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("countInStock", countInStock);

    try {
      const response = await fetch("/api/items/add", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log(data);
      getItems();
    } catch (error) {
      console.log("error adding item", error);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      <div className="flex flex-col">
        <form onSubmit={addItem}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="file"
            name="image"
            id="image"
            placeholder="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <input
            type="text"
            name="price"
            id="price"
            placeholder="price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="text"
            name="category"
            id="category"
            placeholder="category"
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="text"
            name="description"
            id="description"
            placeholder="description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            name="countInStock"
            id="countInStock"
            placeholder="countInStock"
            onChange={(e) => setCountInStock(e.target.value)}
          />
          <button type="submit">Add Item</button>
        </form>
      </div>
      <table className="text-center">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Item Price</th>
            <th>Item Quantity</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.countInStock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListItems;
