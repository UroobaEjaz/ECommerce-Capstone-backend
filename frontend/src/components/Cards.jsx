//reference: https://www.google.com/search?sca_esv=b8996be4c462e1ec&sca_upv=1&rlz=1C1OPNX_enCA1057CA1057&sxsrf=ADLYWILNwRNlDNp1RIm4pU8diULUBW20LA:1718222177946&q=how+to+create+cards+when+data+is+being+fetched+from+api&tbm=vid&source=lnms&fbs=AEQNm0DVrIRjdA3gRKfJJ-deMT8ZtYOjoIt1NWOMRkEKym4u5PkAZgxJOmIgPx6WieMhF6q1Hq7W6nME2Vp0eHuijF3ZElaTgD0zbj1gkQrti2r6HtU_FSIC_TOIRePmNlS6X7JM5HBW5XbZDBZ4_7u7u_1S0lBKWZanVrzOMi5iZT88U7e3_wgsAQOPU_p9Gb66BSsVUXKxPRPH2pqhwDp-oi5jONlpDQ&sa=X&ved=2ahUKEwiV7b607NaGAxWwADQIHakRAsYQ0pQJegQIDBAB&biw=1396&bih=632&dpr=1.38#fpstate=ive&vld=cid:15d3deed,vid:RYF4_pqhS38,st:0
// to run this install : npm install @mui/material @emotion/react @emotion/styled

// src/components/ItemGrid.js

{
  /*import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { set } from "mongoose";

// Used Chat gpt for truncate text

const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
};

const Cards = ({ items }) => {
  const [cartItems, setCartItems] = useState([]);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  const addToCart = async (item) => {
    const data = await fetch("/api/cart/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "hello@gmail.com",
        cartItems,
      }),
    });
    setCartItems([...cartItems, item._id]);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    console.log(cartItems);
  };
  return (
    <div
      className="flex flex-wrap justify-center h-1 mt-12"
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {items.length > 0 ? (
        items.map((item) => (
          <Card key={item.name} style={{ margin: 16, maxWidth: 345 }}>
            <CardMedia
              component="img"
              image={`/api/items/images/${item.image}`}
              alt={item.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: "1.1rem", color: "black" }}
              >
                {truncateText(item.description, 8)}
              </Typography>
              <div style={{ marginTop: 10 }}>
                {" "}
                
                <Typography variant="h6" color="text.primary">
                  {`${item.price} $`}
                </Typography>
              </div>
              <Button
                onClick={() => addToCart(item)}
                size="small"
                color="primary"
                sx={{
                  backgroundColor: "darkred",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "red", // darken color on hover if needed
                  },
                  marginTop: 3,
                }}
              >
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography variant="h7" color="text.secondary">
          No items found.
        </Typography>
      )}
    </div>
  );
};

export default Cards; */
}
//reference: https://www.google.com/search?sca_esv=b8996be4c462e1ec&sca_upv=1&rlz=1C1OPNX_enCA1057CA1057&sxsrf=ADLYWILNwRNlDNp1RIm4pU8diULUBW20LA:1718222177946&q=how+to+create+cards+when+data+is+being+fetched+from+api&tbm=vid&source=lnms&fbs=AEQNm0DVrIRjdA3gRKfJJ-deMT8ZtYOjoIt1NWOMRkEKym4u5PkAZgxJOmIgPx6WieMhF6q1Hq7W6nME2Vp0eHuijF3ZElaTgD0zbj1gkQrti2r6HtU_FSIC_TOIRePmNlS6X7JM5HBW5XbZDBZ4_7u7u_1S0lBKWZanVrzOMi5iZT88U7e3_wgsAQOPU_p9Gb66BSsVUXKxPRPH2pqhwDp-oi5jONlpDQ&sa=X&ved=2ahUKEwiV7b607NaGAxWwADQIHakRAsYQ0pQJegQIDBAB&biw=1396&bih=632&dpr=1.38#fpstate=ive&vld=cid:15d3deed,vid:RYF4_pqhS38,st:0
// to run this install : npm install @mui/material @emotion/react @emotion/styled
{
  /*
import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
//import { useCartItemsContext } from "../context/CartItemsContext";
import { useCartItemsContext } from '../context/CartItemsContext';
import { set } from "mongoose";

// Function to truncate text
const truncateText = (text, wordLimit) => {
  if (!text) return "";

  const words = text.split(" ");

  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
};

// Cards component to display items
const Cards = ({ items }) => {
  const [cartItems, setCartItems] = useState([]);
  const [itemQuantities, setItemQuantities] = useState({});
  //const { setCartItemsNumber, setCartItemsContext } = useCartItemsContext();

  const { cartItemsNumber, setCartItemsNumber, setCartItemsContext } = useCartItemsContext(); // Ensure correct usage

  // const addToDatabase = async (id, list) => {
  //   const response = await fetch("/api/cart", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       email: id,
  //       cartItems: list,
  //     }),
  //   });
  //   const data = await response.json();
  //   console.log(data);
  // };

  const addToCart = (item) => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem._id === item._id
    );
    const updatedCartItems = existingItem
      ? cartItems.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      : [...cartItems, { _id: item._id, quantity: 1 }];

    setCartItems(updatedCartItems);
    setCartItemsContext(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [item._id]: (prevQuantities[item._id] || 0) + 1,
    }));

    const id = localStorage.getItem("id");
    // addToDatabase(id, updatedCartItems);
    setCartItemsNumber(updatedCartItems.length);
  };

  const removeFromCart = (item) => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem._id === item._id
    );
    if (!existingItem) return;

    const updatedCartItems =
      existingItem.quantity > 1
        ? cartItems.map((cartItem) =>
            cartItem._id === item._id
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          )
        : cartItems.filter((cartItem) => cartItem._id !== item._id);

    setCartItems(updatedCartItems);
    setCartItemsContext(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

    setItemQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities };
      if (newQuantities[item._id] > 1) {
        newQuantities[item._id] -= 1;
      } else {
        delete newQuantities[item._id];
      }
      return newQuantities;
    });

    const id = localStorage.getItem("id");
    // addToDatabase(id, updatedCartItems);
    setCartItemsNumber(updatedCartItems.length);
  };

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {items.length > 0 ? (
        items.map((item) => (
          <motion.div
            key={item._id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{ width: "18rem", margin: "1rem", display: "flex"}}
          >
            <Card>
              <Card.Img
                variant="top"
                src={`/api/items/images/${item.image}`}
                alt={item.name}
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{truncateText(item.description, 8)}</Card.Text>
                <Card.Text>${item.price}</Card.Text>
                {itemQuantities[item._id] ? (
                  <div>
                    <Button
                      onClick={() => removeFromCart(item)}
                      variant="danger"
                      className="mr-2"
                    >
                      -
                    </Button>
                    <span>{itemQuantities[item._id]}</span>
                    <Button
                      onClick={() => addToCart(item)}
                      variant="success"
                      className="ml-2"
                    >
                      +
                    </Button>
                  </div>
                ) : (
                  <Button onClick={() => addToCart(item)} variant="primary">
                    Add to Cart
                  </Button>
                )}
              </Card.Body>
            </Card>
          </motion.div>
        ))
      ) : (
        <p>No items found.</p>
      )}
    </div>
  );
};

export default Cards; */
}

{
  /*


// Import necessary components and functions
import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useCartItemsContext } from '../context/CartItemsContext'; // Adjust path as per your context setup

// Function to truncate text
const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
};

// Cards component to display items
const Cards = ({ items }) => {
  // State to manage cart items and item quantities
  const [cartItems, setCartItems] = useState([]);
  const [itemQuantities, setItemQuantities] = useState({});
  const { cartItemsNumber, setCartItemsNumber, setCartItemsContext } = useCartItemsContext(); // Ensure correct usage

  // Function to add item to cart
  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem._id === item._id);
    const updatedCartItems = existingItem
      ? cartItems.map((cartItem) =>
          cartItem._id === item._id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      : [...cartItems, { _id: item._id, quantity: 1 }];

    setCartItems(updatedCartItems);
    setCartItemsContext(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [item._id]: (prevQuantities[item._id] || 0) + 1,
    }));

    const id = localStorage.getItem("id");
    setCartItemsNumber(updatedCartItems.length);
  };

  // Function to remove item from cart
  const removeFromCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem._id === item._id);
    if (!existingItem) return;

    const updatedCartItems =
      existingItem.quantity > 1
        ? cartItems.map((cartItem) =>
            cartItem._id === item._id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
          )
        : cartItems.filter((cartItem) => cartItem._id !== item._id);

    setCartItems(updatedCartItems);
    setCartItemsContext(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

    setItemQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities };
      if (newQuantities[item._id] > 1) {
        newQuantities[item._id] -= 1;
      } else {
        delete newQuantities[item._id];
      }
      return newQuantities;
    });

    const id = localStorage.getItem("id");
    setCartItemsNumber(updatedCartItems.length);
  };

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {items.length > 0 ? (
        items.map((item) => (
          <motion.div
            key={item._id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{ width: "18rem", margin: "1rem", display: "flex" }}
          >
            <Card>
              <Card.Img
                variant="top"
                src={`/api/items/images/${item.image}`}
                alt={item.name}
                onClick={() => nevigate(`/${item._id}`, { state: item._id })}
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{truncateText(item.description, 8)}</Card.Text>
                <Card.Text>${item.price}</Card.Text>
                {itemQuantities[item._id] ? (
                  <div>
                    <Button
                      onClick={() => removeFromCart(item)}
                      variant="danger"
                      className="mr-2"
                    >
                      -
                    </Button>
                    <span>{itemQuantities[item._id]}</span>
                    <Button
                      onClick={() => addToCart(item)}
                      variant="success"
                      className="ml-2"
                    >
                      +
                    </Button>
                  </div>
                ) : (
                  <Button onClick={() => addToCart(item)} variant="primary">
                    Add to Cart
                  </Button>
                )}
              </Card.Body>
            </Card>
          </motion.div>
        ))
      ) : (
        <p>No items found.</p>
      )}
    </div>
  );
};

export default Cards;

*/
}

/*
import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useCartItemsContext } from '../context/CartItemsContext'; // Adjust path as per your context setup

// Function to truncate text
const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
};

// Cards component to display items
const Cards = ({ items }) => {
  // State to manage cart items and item quantities
  const [itemQuantities, setItemQuantities] = useState({});
  const { cartItems, setCartItems, setCartItemsNumber } = useCartItemsContext(); // Ensure correct usage

  // Function to add item to cart
  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem._id === item._id);
    const updatedCartItems = existingItem
      ? cartItems.map((cartItem) =>
          cartItem._id === item._id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      : [...cartItems, { ...item, quantity: 1 }];

    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [item._id]: (prevQuantities[item._id] || 0) + 1,
    }));

    setCartItemsNumber(updatedCartItems.length);
  };

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {items.length > 0 ? (
        items.map((item) => (
          <motion.div
            key={item._id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{ width: "18rem", margin: "1rem", display: "flex" }}
          >
            <Card>
              <Card.Img variant="top" src={`/api/items/images/${item.image}`} alt={item.name} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{truncateText(item.description, 8)}</Card.Text>
                <Card.Text>${item.price}</Card.Text>
                {itemQuantities[item._id] ? (
                  <div>
                    <Button
                      onClick={() => addToCart(item)}
                      variant="success"
                    >
                      Add More
                    </Button>
                  </div>
                ) : (
                  <Button onClick={() => addToCart(item)} variant="primary">
                    Add to Cart
                  </Button>
                )}
              </Card.Body>
            </Card>
          </motion.div>
        ))
      ) : (
        <p>No items found.</p>
      )}
    </div>
  );
}; */
/*
import React, { useState, useEffect } from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import { useCartItemsContext } from '../context/CartItemsContext'; // Adjust path as per your context setup

// Function to truncate text
const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
};

// Cards component to display items
const Cards = ({ items }) => {
  // State to manage cart items and item quantities
  const [itemQuantities, setItemQuantities] = useState({});
  
  const { cartItems, addToCart} = useCartItemsContext(); // Ensure correct usage
  const [ CartItemsQuantity, setCartItemsQuantity ] = useState(0);
  const [ CartItemsPrice, setCartItemsPrice ] = useState(0);
  
  const getCartItems = async () => {
    try {
      const response = await fetch("/api/cart/items", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      //setItems(data);
      console.log(data);
    } catch (error) {
      console.log("error getting items", error);
    }
  };
  
  const addCartItem = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    
    formData.append("price", CartItemsPrice);
    formData.append("quantity", CartItemsQuantity);

    try {
      const response = await fetch("/api/items/add", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log(data);
      getCartItems();
    } catch (error) {
      console.log("error adding item", error);
    }
  };

  useEffect(() => {
    getCartItems();
  }, []);


  return (
    <div className="d-flex flex-wrap justify-content-center">
     
      {items.length > 0 ? (
        items.map((item) => (
          <motion.div
            key={item._id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{ width: "18rem", margin: "1rem", display: "flex" }}
          >
            <Card>
              <Card.Img
                variant="top"
                src={`/api/items/images/${item.image}`}
                alt={item.name}
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{truncateText(item.description, 8)}</Card.Text>
                <Card.Text>${item.price}</Card.Text>
                {itemQuantities[item._id] ? (
                  <div>
                    <Button onClick={() => addCartItem()} variant="success">
                      Add More
                    </Button>
                    <Badge pill variant="info" className="ml-2">
                      {itemQuantities[item._id]}
                    </Badge>
                  </div>
                ) : (
                  <Button onClick={() => addToCart(item)} variant="primary">
                    Add to Cart
                  </Button>
                )}
              </Card.Body>
            </Card>
          </motion.div>
        ))
      ) : (
        <p>No items found.</p>
      )}
    </div>
  );
};

export default Cards; */

//reference: https://www.google.com/search?sca_esv=b8996be4c462e1ec&sca_upv=1&rlz=1C1OPNX_enCA1057CA1057&sxsrf=ADLYWILNwRNlDNp1RIm4pU8diULUBW20LA:1718222177946&q=how+to+create+cards+when+data+is+being+fetched+from+api&tbm=vid&source=lnms&fbs=AEQNm0DVrIRjdA3gRKfJJ-deMT8ZtYOjoIt1NWOMRkEKym4u5PkAZgxJOmIgPx6WieMhF6q1Hq7W6nME2Vp0eHuijF3ZElaTgD0zbj1gkQrti2r6HtU_FSIC_TOIRePmNlS6X7JM5HBW5XbZDBZ4_7u7u_1S0lBKWZanVrzOMi5iZT88U7e3_wgsAQOPU_p9Gb66BSsVUXKxPRPH2pqhwDp-oi5jONlpDQ&sa=X&ved=2ahUKEwiV7b607NaGAxWwADQIHakRAsYQ0pQJegQIDBAB&biw=1396&bih=632&dpr=1.38#fpstate=ive&vld=cid:15d3deed,vid:RYF4_pqhS38,st:0
// to run this install : npm install @mui/material @emotion/react @emotion/styled
{
  /*
import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
//import { useCartItemsContext } from "../context/CartItemsContext";
import { useCartItemsContext } from '../context/CartItemsContext';
import { set } from "mongoose";
const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
};
const Cards = ({ items }) => {
  const [cartItems, setCartItems] = useState([]);
  const [itemQuantities, setItemQuantities] = useState({});
  //const { setCartItemsNumber, setCartItemsContext } = useCartItemsContext();
  const { cartItemsNumber, setCartItemsNumber, setCartItemsContext } = useCartItemsContext(); // Ensure correct usage
  // const addToDatabase = async (id, list) => {
  //   const response = await fetch("/api/cart", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       email: id,
  //       cartItems: list,
  //     }),
  //   });
  //   const data = await response.json();
  //   console.log(data);
  // };
  const addToCart = (item) => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem._id === item._id
    );
    const updatedCartItems = existingItem
      ? cartItems.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      : [...cartItems, { _id: item._id, quantity: 1 }];
    setCartItems(updatedCartItems);
    setCartItemsContext(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [item._id]: (prevQuantities[item._id] || 0) + 1,
    }));
    const id = localStorage.getItem("id");
    // addToDatabase(id, updatedCartItems);
    setCartItemsNumber(updatedCartItems.length);
  };
  const removeFromCart = (item) => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem._id === item._id
    );
    if (!existingItem) return;
    const updatedCartItems =
      existingItem.quantity > 1
        ? cartItems.map((cartItem) =>
            cartItem._id === item._id
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          )
        : cartItems.filter((cartItem) => cartItem._id !== item._id);
    setCartItems(updatedCartItems);
    setCartItemsContext(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setItemQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities };
      if (newQuantities[item._id] > 1) {
        newQuantities[item._id] -= 1;
      } else {
        delete newQuantities[item._id];
      }
      return newQuantities;
    });
    const id = localStorage.getItem("id");
    // addToDatabase(id, updatedCartItems);
    setCartItemsNumber(updatedCartItems.length);
  };
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {items.length > 0 ? (
        items.map((item) => (
          <motion.div
            key={item._id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{ width: "18rem", margin: "1rem", display: "flex"}}
          >
            <Card>
              <Card.Img
                variant="top"
                src={`/api/items/images/${item.image}`}
                alt={item.name}
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{truncateText(item.description, 8)}</Card.Text>
                <Card.Text>${item.price}</Card.Text>
                {itemQuantities[item._id] ? (
                  <div>
                    <Button
                      onClick={() => removeFromCart(item)}
                      variant="danger"
                      className="mr-2"
                    >
                      -
                    </Button>
                    <span>{itemQuantities[item._id]}</span>
                    <Button
                      onClick={() => addToCart(item)}
                      variant="success"
                      className="ml-2"
                    >
                      +
                    </Button>
                  </div>
                ) : (
                  <Button onClick={() => addToCart(item)} variant="primary">
                    Add to Cart
                  </Button>
                )}
              </Card.Body>
            </Card>
          </motion.div>
        ))
      ) : (
        <p>No items found.</p>
      )}
    </div>
  );
};
export default Cards; */
}

{
  /*
// Import necessary components and functions
import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useCartItemsContext } from '../context/CartItemsContext'; // Adjust path as per your context setup
// Function to truncate text
const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
};
// Cards component to display items
const Cards = ({ items }) => {
  // State to manage cart items and item quantities
  const [cartItems, setCartItems] = useState([]);
  const [itemQuantities, setItemQuantities] = useState({});
  const { cartItemsNumber, setCartItemsNumber, setCartItemsContext } = useCartItemsContext(); // Ensure correct usage
  // Function to add item to cart
  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem._id === item._id);
    const updatedCartItems = existingItem
      ? cartItems.map((cartItem) =>
          cartItem._id === item._id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      : [...cartItems, { _id: item._id, quantity: 1 }];
    setCartItems(updatedCartItems);
    setCartItemsContext(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [item._id]: (prevQuantities[item._id] || 0) + 1,
    }));
    const id = localStorage.getItem("id");
    setCartItemsNumber(updatedCartItems.length);
  };
  // Function to remove item from cart
  const removeFromCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem._id === item._id);
    if (!existingItem) return;
    const updatedCartItems =
      existingItem.quantity > 1
        ? cartItems.map((cartItem) =>
            cartItem._id === item._id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
          )
        : cartItems.filter((cartItem) => cartItem._id !== item._id);
    setCartItems(updatedCartItems);
    setCartItemsContext(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setItemQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities };
      if (newQuantities[item._id] > 1) {
        newQuantities[item._id] -= 1;
      } else {
        delete newQuantities[item._id];
      }
      return newQuantities;
    });
    const id = localStorage.getItem("id");
    setCartItemsNumber(updatedCartItems.length);
  };
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {items.length > 0 ? (
        items.map((item) => (
          <motion.div
            key={item._id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{ width: "18rem", margin: "1rem", display: "flex" }}
          >
            <Card>
              <Card.Img variant="top" src={`/api/items/images/${item.image}`} alt={item.name} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{truncateText(item.description, 8)}</Card.Text>
                <Card.Text>${item.price}</Card.Text>
                {itemQuantities[item._id] ? (
                  <div>
                    <Button
                      onClick={() => removeFromCart(item)}
                      variant="danger"
                      className="mr-2"
                    >
                      -
                    </Button>
                    <span>{itemQuantities[item._id]}</span>
                    <Button
                      onClick={() => addToCart(item)}
                      variant="success"
                      className="ml-2"
                    >
                      +
                    </Button>
                  </div>
                ) : (
                  <Button onClick={() => addToCart(item)} variant="primary">
                    Add to Cart
                  </Button>
                )}
              </Card.Body>
            </Card>
          </motion.div>
        ))
      ) : (
        <p>No items found.</p>
      )}
    </div>
  );
};
export default Cards;
*/
}

/*
import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useCartItemsContext } from '../context/CartItemsContext'; // Adjust path as per your context setup
import { useCartItemsContext } from "../context/CartItemsContext";
import { useNavigate } from "react-router-dom";

// Function to truncate text
const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
};
  if (!text) return "";

// Cards component to display items
const Cards = ({ items }) => {
  // State to manage cart items and item quantities
  const [itemQuantities, setItemQuantities] = useState({});
  const { cartItems, setCartItems, setCartItemsNumber } = useCartItemsContext(); // Ensure correct usage
  // Function to add item to cart
  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem._id === item._id);
    const updatedCartItems = existingItem
      ? cartItems.map((cartItem) =>
          cartItem._id === item._id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      : [...cartItems, { ...item, quantity: 1 }];
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [item._id]: (prevQuantities[item._id] || 0) + 1,
    }));
    setCartItemsNumber(updatedCartItems.length);
  };
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {items.length > 0 ? (
        items.map((item) => (
          <motion.div
            key={item._id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{ width: "18rem", margin: "1rem", display: "flex" }}
          >
            <Card>
              <Card.Img variant="top" src={`/api/items/images/${item.image}`} alt={item.name} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{truncateText(item.description, 8)}</Card.Text>
                <Card.Text>${item.price}</Card.Text>
                {itemQuantities[item._id] ? (
                  <div>
                    <Button
                      onClick={() => addToCart(item)}
                      variant="success"
                    >
                      Add More
                    </Button>
                  </div>
                ) : (
                  <Button onClick={() => addToCart(item)} variant="primary">
                    Add to Cart
                  </Button>
                )}
              </Card.Body>
            </Card>
          </motion.div>
        ))
      ) : (
        <p>No items found.</p>
      )}
    </div>
  );
};
export default Cards;   */
/*
import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { useCartItemsContext } from "../context/CartItemsContext"; // Adjust path as per your context setup

// Function to truncate text
const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
};

const Cards = ({ items }) => {
  // State to manage cart items and item quantities
  const [itemQuantities, setItemQuantities] = useState({});
  const { cartItems, setCartItems, setCartItemsNumber } = useCartItemsContext(); // Ensure correct usage
  const navigate = useNavigate();

  // Function to add item to cart
  const addToCart = async (item) => {
    // Add logic to handle adding to cart
    setCartItems((prevItems) => {
      const updatedItems = { ...prevItems, [item._id]: (prevItems[item._id] || 0) + 1 };
      setCartItemsNumber(Object.values(updatedItems).reduce((acc, qty) => acc + qty, 0));
      return updatedItems;
    });
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [item._id]: (prevQuantities[item._id] || 0) + 1,
    }));
  };

  return (
    <div className="cards-container">
      {items && items.length > 0 ? (
        items.map((item) => (
          <motion.div
            key={item._id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="item-card">
              <Card.Img
                variant="top"
                src={`/api/items/images/${item.image}`}
                alt={item.name}
                onClick={() => navigate(`/${item._id}`, { state: item._id })}
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{truncateText(item.description, 8)}</Card.Text>
                <Card.Text>${item.price}</Card.Text>
                {itemQuantities[item._id] ? (
                  <div>
                    <Button onClick={() => addToCart(item)} variant="success">
                      Add More
                    </Button>
                  </div>
                ) : (
                  <Button onClick={() => addToCart(item)} variant="primary">
                    Add to Cart
                  </Button>
                )}
              </Card.Body>
            </Card>
          </motion.div>
        ))
      ) : (
        <p>No items found.</p>
      )}
    </div>
  );
};

export default Cards;*/


import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useCartItemsContext } from "../context/CartItemsContext"; // Adjust path as per your context setup
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// Function to truncate text
const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
};

// Cards component to display items
const Cards = ({ items = [] }) => {
  const { cartItems, addToCart, increaseQuantity, decreaseQuantity } = useCartItemsContext(); // Ensure correct usage
  const [itemQuantities, setItemQuantities] = useState({});
  // wishlist added
  const [wishlist, setWishlist] = useState([]);

  // Function to handle quantity change
  const handleQuantityChange = (item, change) => {
    setItemQuantities((prevQuantities) => {
      const currentQuantity = prevQuantities[item._id] || 0;
      const newQuantity = Math.max(0, currentQuantity + change); // Ensure quantity is not negative
      return { ...prevQuantities, [item._id]: newQuantity };
    });
  };

  // Function to handle adding item to cart
  const handleAddToCart = async (item) => {
    const quantity = itemQuantities[item._id] || 1; // Default to 1 if not set

    try {
      const response = await fetch("/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "uroobanumair", // Replace with actual user email
          itemId: item._id,
          cartItemsPrice: item.price,
          cartItemsQuantity: quantity,
        }),
      });

      const data = await response.json();
      console.log(data);

      // Add or update item in context
      if (cartItems.find(cartItem => cartItem._id === item._id)) {
        increaseQuantity(item);
      } else {
        addToCart({ ...item, quantity });
      }

      // Reset the quantity for this item after adding to cart
      setItemQuantities((prevQuantities) => ({
        ...prevQuantities,
        [item._id]: 0,
      }));
    } catch (error) {
      console.log("Error adding item", error);
    }
  };
// wishlist adding function
// Function to handle adding item to wishlist
 // Function to handle adding item to wishlist
 const handleAddToWishlist = async (item) => {
  try {
    const response = await fetch("/api/wishlist/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        itemId: item._id,
      }),
    });

    const data = await response.json();
    console.log(data);

    // Show success toast message
    toast.success("Item successfully added to the wishlist!");
  } catch (error) {
    console.log("Error adding item to wishlist", error);
    // Show error toast message
    toast.error("Failed to add item to wishlist.");
  }
};

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {items.length > 0 ? (
        items.map((item) => (
          <motion.div
            key={item._id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{ width: "18rem", margin: "1rem", display: "flex" }}
          >
            <Card>
              <Card.Img
                variant="top"
                src={`/api/items/images/${item.image}`}
                alt={item.name}
                onClick={() => nevigate(`/${item._id}`, { state: item._id })}
                className="cursor-pointer"
              />
              <Card.Body>
                <Card.Title
                  onClick={() => nevigate(`/${item._id}`, { state: item._id })}
                  className="cursor-pointer"
                >
                  {item.name}
                </Card.Title>
                <Card.Text
                  onClick={() => nevigate(`/${item._id}`, { state: item._id })}
                  className="cursor-pointer"
                >
                  {truncateText(item.description, 8)}
                </Card.Text>
                <Card.Text>${item.price}</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <Button onClick={() => handleQuantityChange(item, -1)} variant="secondary">-</Button>
                  <span>{itemQuantities[item._id] || 0}</span>
                  <Button onClick={() => handleQuantityChange(item, 1)} variant="secondary">+</Button>
                </div>
                <Button onClick={() => handleAddToCart(item)} variant="primary">
                  Add to Cart
                </Button>
                <Button onClick={() => handleAddToWishlist(item)} variant="outline-danger">
                  ❤️ Add to Wishlist
                </Button>
              </Card.Body>
            </Card>
          </motion.div>
        ))
      ) : (
        <p>No items found.</p>
      )}
    </div>
  );
};

export default Cards;
