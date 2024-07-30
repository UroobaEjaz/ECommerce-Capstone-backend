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
import { Card, Button, Form } from "react-bootstrap";
import { motion } from "framer-motion";
import { useCartItemsContext } from "../context/CartItemsContext";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Cart = () => {
  const { cartItems, removeFromCartContext, updateCartItemQuantity } = useCartItemsContext();
  
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
        body: JSON.stringify({ email: "uroobanumair",
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
          email: "uroobanumair",
          itemId: item._id }),
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
        email: "uroobanumair",
        quantity: newQuantity ,
        itemId: item._id }),
    }).catch(error => console.error("Error updating quantity:", error));
  };

  const addToWishList = async(item) => {
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
  }

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
                    <Card.Text>
                      Quantity: 
                      <Form.Control
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item, parseInt(e.target.value))}
                        style={{ width: '70px', display: 'inline-block', marginLeft: '10px' }}
                      />
                    </Card.Text>
                    <Button onClick={() => handleRemoveFromCart(item)} variant="danger">
                      Remove from Cart
                    </Button>
                    <Button onClick={() => addToWishList(item)} variant="primary">
                      Add to Wishlist 
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            ))}
            <div className="col mt-3">
              <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
              <Link to="/Payment">
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