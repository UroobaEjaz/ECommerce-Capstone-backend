/*import React, { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useCartItemsContext } from '../context/CartItemsContext';
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  const { cartItems, removeFromCart, setCartItems } = useCartItemsContext();

  useEffect(() => {
    getCartItems();
  }, []);

  const getCartItems = async () => {
    try {
      const response = await fetch("/api/cart/items", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch cart items');
      }

      const data = await response.json();
      setCartItems(data); // Update context state with fetched items
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const handleRemoveFromCart = async (item) => {
    try {
      await removeFromCart(item); // Call removeFromCart function from context
      getCartItems(); // Refresh cart items after removal
    } catch (error) {
      console.error("Error removing item:", error.message);
    }
  };

  return (
   
        <div className="container py-4">
      <div className="text-center mb-4">
        <h2 className="relative inline-block">
          <FaShoppingCart className="inline-block mr-2 text-xl align-middle" />
          Cart
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1"></span>
        </h2>
      </div>

      <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((item) => (
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
                    <Card.Text>Price: ${item.price}</Card.Text>
                    <Button onClick={() => handleRemoveFromCart(item)} variant="danger">
                      Remove from Cart
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            ))}
            <div className="col mt-3 mb-9 ">
              <Link to='/StripeContainer'>
                <Button className="mt-3" variant="primary" block>
                  Proceed to Checkout
                </Button>
              </Link>
            </div>
          </>
        ) : (
          <p className="text-center">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart; */

// reference: https://www.google.com/search?q=bradtraversy+shopping+app+ecommerce+website&sca_esv=5b98f86993edd4ca&sca_upv=1&rlz=1C1OPNX_enCA1057CA1057&biw=1242&bih=545&tbm=vid&sxsrf=ADLYWIKbU_O_1FsGznMJZp-SJaVae8lwrQ%3A1721586276381&ei=ZFKdZsj_FoDw0PEP2f6LiA4&oq=bradtraversy+shopping+app+ecomm&gs_lp=Eg1nd3Mtd2l6LXZpZGVvIh9icmFkdHJhdmVyc3kgc2hvcHBpbmcgYXBwIGVjb21tKgIIATIFECEYoAEyBRAhGKABMgUQIRigATIFECEYnwVIyBRQ5wRYkQ1wAHgAkAEAmAGCAaABmQWqAQM1LjK4AQPIAQD4AQGYAgegAq4FwgIEECMYJ8ICCBAAGIAEGKIEwgIHECEYoAEYCpgDAIgGAZIHAzUuMqAHqR8&sclient=gws-wiz-video#fpstate=ive&vld=cid:d47fdefa,vid:6AI-gFM8gco,st:0
/*
import React, { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useCartItemsContext } from "../context/CartItemsContext";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  const { cartItems, removeFromCart } = useCartItemsContext();

  useEffect(() => {
    getCartItems();
  }, []);

  const getCartItems = async () => {
    try {
      const response = await fetch("/api/cart/items", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch cart items");
      }

      const data = await response.json();
     // setCartItems(data); // Update context state with fetched items
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const handleRemoveFromCart = async (item) => {
    try {
      await fetch(`/api/cart/remove/${item._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Update the cart context after removing item
      removeFromCart(item);
    } catch (error) {
      console.error("Error removing item:", error.message);
    }
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container py-4">
      <div className="text-center mb-4">
        <h2 className="relative inline-block">
          <FaShoppingCart className="inline-block mr-2 text-xl align-middle" />
          Cart
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1"></span>
        </h2>
      </div>

      <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((item) => (
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
                    <Card.Text>Price: ${item.price}</Card.Text>
                    <Card.Text>Quantity: {item.quantity}</Card.Text>
                    <Button onClick={() => handleRemoveFromCart(item)} variant="danger">
                      Remove from Cart
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            ))}
            <div className="col mt-3">
              <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
              <Link to="/StripeContainer">
                <Button className="mt-3" variant="primary" block>
                  Proceed to Checkout
                </Button>
              </Link>
            </div>
          </>
        ) : (
          <p className="text-center">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;

*/
//// reference: https://www.google.com/search?q=bradtraversy+shopping+app+ecommerce+website&sca_esv=5b98f86993edd4ca&sca_upv=1&rlz=1C1OPNX_enCA1057CA1057&biw=1242&bih=545&tbm=vid&sxsrf=ADLYWIKbU_O_1FsGznMJZp-SJaVae8lwrQ%3A1721586276381&ei=ZFKdZsj_FoDw0PEP2f6LiA4&oq=bradtraversy+shopping+app+ecomm&gs_lp=Eg1nd3Mtd2l6LXZpZGVvIh9icmFkdHJhdmVyc3kgc2hvcHBpbmcgYXBwIGVjb21tKgIIATIFECEYoAEyBRAhGKABMgUQIRigATIFECEYnwVIyBRQ5wRYkQ1wAHgAkAEAmAGCAaABmQWqAQM1LjK4AQPIAQD4AQGYAgegAq4FwgIEECMYJ8ICCBAAGIAEGKIEwgIHECEYoAEYCpgDAIgGAZIHAzUuMqAHqR8&sclient=gws-wiz-video#fpstate=ive&vld=cid:d47fdefa,vid:6AI-gFM8gco,st:0

// reference: https://www.youtube.com/watch?v=lATafp15HWA
//
import React, { useEffect } from "react";
import { ListGroup, Button, Form } from "react-bootstrap";
import { useCartItemsContext } from "../context/CartItemsContext";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaTrash, FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/Navbar";
import { IoBagCheckOutline } from "react-icons/io5";

const Cart = () => {
  const { cartItems, removeFromCartContext, updateCartItemQuantity } =
    useCartItemsContext();

  useEffect(() => {
    getCartItems();
  }, []);

  const getCartItems = async () => {
    try {
      const response = await fetch("/api/cart/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email ,
          //itemId: item._id
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch cart items");
      }

      const data = await response.json();
      // Update context with fetched items
      // Assuming `setCartItems` is used directly in context
    } catch (error) {
      console.log("Error fetching cart items:", error);
    }
  };

  const handleRemoveFromCart = async (item) => {
    try {
      await fetch(`/api/cart/remove`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email ,
          itemId: item._id,
        }),
      });

      // Update the cart context after removing item
      removeFromCartContext(item);
    } catch (error) {
      console.error("Error removing item:", error.message);
    }
  };

  const handleQuantityChange = (item, newQuantity) => {
    if (newQuantity < 1) return; // Avoid setting quantity to less than 1

    updateCartItemQuantity(item._id, newQuantity);

    // Optionally update server with new quantity
    fetch(`/api/cart/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "uroobanumair", // Replace with dynamic email if possible
        quantity: newQuantity,
        itemId: item._id,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Quantity updated successfully:", data);
        // Optionally show a success message to the user
      })
      .catch((error) => console.error("Error updating quantity:", error));
  };

  const addToWishList = async (item) => {
    try {
      await fetch(`/api/wishlist/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId: item._id }),
      });
      toast.success("Item added to wishlist.");
    } catch (error) {
      console.error("Error adding to wishlist:", error);
      toast.error("Failed to add item to wishlist.");
    }
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <>
      <Navbar />
      {/* <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <header className="text-center">
              <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
                Your Cart
              </h1>
            </header>
            <div className="mt-8">
              <ul className="space-y-4">
                {cartItems.length > 0 ? (
                  <li>
                    <img
                      src={`/api/items/images/${item.image}`}
                      alt={item.name}
                      className="img-thumbnail me-3"
                      style={{ width: "120px", height: "120px" }}
                    />
                    <div>
                      <h3 className="text-sm text-gray-900">{item.name}</h3>
                    </div>
                    <div className="flex flex-1 items-center justify-end gap-2">
                      <form>
                        <Form.Control
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) =>
                            handleQuantityChange(item, parseInt(e.target.value))
                          }
                          className="w-25 font-bold"
                        />
                      </form>
                      <button
                        className="text-gray-600 transition hover:text-red-600"
                        onClick={() => handleRemoveFromCart(item)}
                      >
                        <span className="sr-only">Remove item</span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  </li>
                ) : (
                  <></>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section> */}
      <div className="container pt-20 flex flex-col md:flex-row mt-8">
        <div className="flex-grow md:mr-8">
          <div className="text-center mb-4">
            <h1 className="text-4xl font-bold inline-flex items-center mt-10 mb-7">
              Cart
              <FaShoppingCart className="text-black ml-3 text-4xl" />
            </h1>
          </div>

          <ListGroup>
            {cartItems.length > 0 ? (
              <>
                {cartItems.map((item) => (
                  <ListGroup.Item
                    key={item._id}
                    className="d-flex justify-content-between align-items-center mb-3"
                  >
                    <div className="d-flex align-items-center">
                      <img
                        src={`/api/items/images/${item.image}`}
                        alt={item.name}
                        className="img-thumbnail me-3"
                        style={{ width: "120px", height: "120px" }}
                      />
                      <div>
                        <h5 className="mb-3 text-lg font-bold">{item.name}</h5>
                        <p className="mb-1 font-semibold">
                          Price: ${item.price}
                        </p>
                        <Form.Control
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) =>
                            handleQuantityChange(item, parseInt(e.target.value))
                          }
                          className="w-25 font-bold"
                        />
                      </div>
                    </div>
                    <div>
                      <Button
                        onClick={() => handleRemoveFromCart(item)}
                        variant="danger"
                        className="me-2"
                      >
                        <FaTrash />
                      </Button>
                      <Button
                        onClick={() => addToWishList(item)}
                        variant="primary"
                      >
                        <FaHeart />
                      </Button>
                    </div>
                  </ListGroup.Item>
                ))}
              </>
            ) : (
              <p className="text-center">Your cart is empty.</p>
            )}
          </ListGroup>
        </div>

        <div className="summary-container bg-red-600 p-12 rounded-lg shadow-md md:w-1/4 mt-4 md:mt-0 ml-auto mt-6">
          <h3 className="text-xl font-bold mb-4 text-white ">Order Summary</h3>
          <p className="text-lg mb-2 font-semibold text-white">
            Total Quantity:{" "}
            {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
          </p>
          <p className="text-lg mb-4 font-bold text-white">
            Total Price: ${totalPrice.toFixed(2)}
          </p>
          <Link to="/Payment">
            <Button className="w-full flex items-center justify-center py-2 px-4 text-white bg-primary hover:bg-primary-dark">
              <IoBagCheckOutline className="mr-2 text-xl" />
              Checkout
            </Button>
          </Link>
          <Link to="/">
            <Button className="w-full mt-6" variant="primary">
              Continue Shopping
            </Button>
          </Link>
          <Link to="/WishList">
            <Button className="w-full mt-6" variant="primary">
              View Wishlist
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cart;

// styled: https://chatgpt.com/c/fdfa28a7-a60e-4beb-83e8-e2b11d4ea8c3
