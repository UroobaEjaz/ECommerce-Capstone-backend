import React, { useState, useEffect } from "react";
import { ListGroup, Button, Image } from "react-bootstrap";
import { useCartItemsContext } from "../context/CartItemsContext"; // Adjust path as per your context setup

const Cart = () => {
  const { cartItems, setCartItems, setCartItemsNumber } = useCartItemsContext();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch("/api/cart");
        const data = await response.json();
        setCartItems(data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, [setCartItems]);

  const removeFromCart = async (itemId) => {
    try {
      const response = await fetch("/api/cart/remove", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId }),
      });

      if (response.ok) {
        const updatedCartItems = cartItems.filter(
          (cartItem) => cartItem.itemId._id !== itemId
        );
        setCartItems(updatedCartItems);
        setCartItemsNumber(updatedCartItems.length);
      }
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.itemId.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <ListGroup>
      {cartItems.length > 0 ? (
        cartItems.map((cartItem) => (
          <ListGroup.Item
            key={cartItem._id}
            className="d-flex justify-content-between align-items-center"
          >
            <div>
              <strong>{cartItem.itemId.name}</strong>
              <br />
              <Image
                src={`/api/items/images/${cartItem.itemId.image}`}
                alt={cartItem.itemId.name}
                thumbnail
              />
              <br />
              Quantity: {cartItem.quantity}
              <br />
              Price: ${cartItem.itemId.price}
            </div>
            <Button
              variant="danger"
              onClick={() => removeFromCart(cartItem.itemId._id)}
            >
              Remove
            </Button>
          </ListGroup.Item>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
      <ListGroup.Item>
        <h5>Total: ${calculateTotal()}</h5>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Cart;
