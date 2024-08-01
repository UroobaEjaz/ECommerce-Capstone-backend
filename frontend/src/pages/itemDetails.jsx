import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useCartItemsContext } from "../context/CartItemsContext";
import Card from "../components/Cards";
import Navbar from "@/components/Navbar";
import { BiListPlus } from "react-icons/bi";
import InstaCartPopup from "@/components/InstaCartPopup";

const ItemDetails = () => {
  const location = useLocation();
  const [item, setItem] = useState(null);
  const [itemCategory, setItemCategory] = useState("");
  const [similarItem, setSimilarItem] = useState([]);
  const [itemQuantities, setItemQuantities] = useState({});
  const { cartItems, addToCart } = useCartItemsContext();
  const [listItems, setListItems] = useState(null);
  const [open, setOpen] = useState(false);

  const details = async () => {
    try {
      const response = await fetch("/api/items/getById", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: location.state }),
      });
      const data = await response.json();
      setItemCategory(data.category);
      setItem(data);
    } catch (error) {
      console.error("Error fetching item details:", error);
    }
  };

  // const addToCart = async (item) => {
  //   try {
  //     const response = await fetch("/api/cart/add", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ itemId: item._id }),
  //     });

  //     if (response.ok) {
  //       const existingItem = cartItems.find(
  //         (cartItem) => cartItem.itemId._id === item._id
  //       );
  //       const updatedCartItems = existingItem
  //         ? cartItems.map((cartItem) =>
  //             cartItem.itemId._id === item._id
  //               ? { ...cartItem, quantity: cartItem.quantity + 1 }
  //               : cartItem
  //           )
  //         : [...cartItems, { itemId: item, quantity: 1 }];

  //       setCartItems(updatedCartItems);
  //       localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

  //       setItemQuantities((prevQuantities) => ({
  //         ...prevQuantities,
  //         [item._id]: (prevQuantities[item._id] || 0) + 1,
  //       }));

  //       setCartItemsNumber(updatedCartItems.length);
  //     }
  //   } catch (error) {
  //     console.error("Error adding item to cart:", error);
  //   }
  // };

  const add = (item) => {
    for (let i = 0; i < itemQuantities[item._id]; i++) {
      addToCart(item);
    }
  };

  const getSimilarItems = async () => {
    try {
      const response = await fetch("/api/admin/getsimilaritems", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category: item.category,
          itemid: location.state,
        }),
      });
      const data = await response.json();
      setSimilarItem(data);
    } catch (error) {
      console.error("Error fetching similar items:", error);
    }
  };

  useEffect(() => {
    details();
  }, [location.state]);

  useEffect(() => {
    if (item) {
      getSimilarItems();
    }
  }, [item]);

  // used chatgpt
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
        {item && (
          <>
            <img
              src={`/api/items/images/${item.image}`}
              alt={item.name}
              className="w-full md:w-1/3 h-auto object-cover"
            />
            <div className="w-full md:w-2/3 p-4">
              <h1 className="text-3xl font-bold mb-2">{item.name}</h1>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <p className="text-xl font-semibold mb-4">Price: ${item.price}</p>
              <div className="flex items-center mb-4">
                <span className="mr-2">Quantity:</span>
                <button
                  className="bg-gray-200 text-gray-700 font-semibold py-1 px-3 rounded-l"
                  onClick={() => decreaseQuantity(item._id)}
                >
                  -
                </button>
                <span className="bg-gray-100 text-gray-700 font-semibold py-1 px-3">
                  {itemQuantities[item._id] || 0}
                </span>
                <button
                  className="bg-gray-200 text-gray-700 font-semibold py-1 px-3 rounded-r"
                  onClick={() => increaseQuantity(item._id)}
                >
                  +
                </button>
              </div>
              <Button
                onClick={() => add(item)}
                variant="primary"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Add to Cart
              </Button>
              <div
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => {
                  setOpen(true);
                }}
              >
                <BiListPlus />
              </div>
            </div>
          </>
        )}
        <div>
          <h3>Similar Items</h3>
          <div>
            <Card items={similarItem} />
          </div>
        </div>
      </div>
      {open && (
        <InstaCartPopup open={open} setOpen={setOpen} item={location.state} />
      )}
    </div>
  );
};

export default ItemDetails;
