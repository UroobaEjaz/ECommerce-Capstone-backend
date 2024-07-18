import React, { useEffect } from "react";
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

export default Cart;
