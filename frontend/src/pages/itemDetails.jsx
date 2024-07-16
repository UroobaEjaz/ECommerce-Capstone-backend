import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button, Nav } from "react-bootstrap";
import { useCartItemsContext } from "../context/CartItemsContext";
import Card from "../components/Cards";
import Navbar from "@/components/Navbar";

const ItemDetails = () => {
  const location = useLocation();
  const [item, setItem] = useState(null);
  const [itemCatagory, setItemCatagory] = useState("");
  const [similarItem, setSimilarItem] = useState([]);
  const [itemQuantities, setItemQuantities] = useState({});
  const { cartItems, setCartItems, setCartItemsNumber } = useCartItemsContext();

  const details = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({ id: location.state });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const response = await fetch("/api/items/getById", requestOptions);
      const data = await response.json();
      setItemCatagory(data.category);
      setItem(data);
    } catch (error) {
      console.error("Error fetching item details:", error);
    }
  };

  const addToCart = async (item) => {
    try {
      const response = await fetch("/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId: item._id }),
      });

      if (response.ok) {
        const existingItem = cartItems.find(
          (cartItem) => cartItem.itemId._id === item._id
        );
        const updatedCartItems = existingItem
          ? cartItems.map((cartItem) =>
              cartItem.itemId._id === item._id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            )
          : [...cartItems, { itemId: item, quantity: 1 }];

        setCartItems(updatedCartItems);
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

        setItemQuantities((prevQuantities) => ({
          ...prevQuantities,
          [item._id]: (prevQuantities[item._id] || 0) + 1,
        }));

        setCartItemsNumber(updatedCartItems.length);
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  const getSimilarItems = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
          category: item.category,
          itemid: location.state,
        }),
        redirect: "follow",
      };

      const response = await fetch(
        "/api/admin/getsimilaritems",
        requestOptions
      );
      const data = await response.json();
      console.log("data", data);
      setSimilarItem(data);
    } catch (error) {
      console.error("Error fetching similar items:", error);
    }
  };

  useEffect(() => {
    details();
  }, [location.state]);

  useEffect(() => {
    getSimilarItems();
  }, [item]);

  // used chatgpt for this function
  const increaseQuantity = (itemId) => {
    setItemQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities };
      newQuantities[itemId] = (newQuantities[itemId] || 0) + 1;
      return newQuantities;
    });
  };

  const decreaseQuantity = (itemId) => {
    setItemQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities };
      newQuantities[itemId] = Math.max((newQuantities[itemId] || 0) - 1, 0);
      return newQuantities;
    });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-32">
        <Navbar />
      </div>
      <div className="flex flex-col md:flex-col bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={`/api/items/images/${item?.image}`}
          alt={item?.name}
          className="w-full md:w-1/3 h-auto object-cover"
        />
        <div className="w-full md:w-2/3 p-4">
          <h1 className="text-3xl font-bold mb-2">{item?.name}</h1>
          <p className="text-gray-700 mb-4">{item?.description}</p>
          <p className="text-xl font-semibold mb-4">Price: ${item?.price}</p>
          <div className="flex items-center mb-4">
            <span className="mr-2">Quantity:</span>
            <button
              className="bg-gray-200 text-gray-700 font-semibold py-1 px-3 rounded-l"
              onClick={() => decreaseQuantity(item?._id)}
            >
              -
            </button>
            <span className="bg-gray-100 text-gray-700 font-semibold py-1 px-3">
              {itemQuantities[item?._id] || 0}
            </span>
            <button
              className="bg-gray-200 text-gray-700 font-semibold py-1 px-3 rounded-r"
              onClick={() => increaseQuantity(item?._id)}
            >
              +
            </button>
          </div>
          <Button
            onClick={() => addToCart(item)}
            variant="primary"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add to Cart
          </Button>
        </div>
        <div>
          <h3>Similar Items</h3>
          <div>
            <Card items={similarItem} />
            {/* {similarItem &&
              similarItem.map((item) => <div key={item._id}>{item.name}</div>)} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
