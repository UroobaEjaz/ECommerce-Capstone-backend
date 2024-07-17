import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useCartItemsContext } from '../context/CartItemsContext';
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, setCartItems } = useCartItemsContext();
  const [subtotal, setSubtotal] = useState(0);

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
      calculateSubtotal(data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const calculateSubtotal = (items) => {
    let total = 0;
    items.forEach(item => {
      total += item.price; // Calculate total price for each item
    });
    setSubtotal(total);
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
    <div className="container py-4 d-flex justify-content-center align-items-center">
      <div className="text-center">
        <h2 className="mb-4">Your Cart</h2>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {cartItems.length > 0 ? (
            <>
              {cartItems.map((item) => (
                <motion.div
                  key={item._id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="col mb-3"
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
              <div className="col mt-4">
               {/* <h5>Subtotal: ${subtotal.toFixed(2)}</h5> */}
                <Link to='/StripeContainer'>
                  <Button className="mt-3" variant="primary" block>
                    Proceed to Checkout
                  </Button>
                </Link>
              </div>
            </>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
