// WishlistPage.jsx
import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCartItemsContext } from "../context/CartItemsContext";

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const { addToCart } = useCartItemsContext();

  useEffect(() => {
    // Fetch wishlist items from the API
    const fetchWishlist = async () => {
      try {
        const response = await fetch("/api/wishlist/items");
        const data = await response.json();
        setWishlistItems(data);
      } catch (error) {
        console.log("Error fetching wishlist items", error);
      }
    };

    fetchWishlist();
  }, []);

  // Function to handle removing item from wishlist
  const handleRemoveFromWishlist = async (itemId) => {
    try {
      const response = await fetch(`/api/wishlist/remove/${itemId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Update local wishlist state
        setWishlistItems(prevItems => prevItems.filter(item => item._id !== itemId));
        toast.success("Item removed from wishlist!");
      } else {
        toast.error("Failed to remove item from wishlist.");
      }
    } catch (error) {
      console.log("Error removing item from wishlist", error);
      toast.error("Failed to remove item from wishlist.");
    }
  };

  // Function to handle adding item to cart
  const handleAddToCart = async (item) => {
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
          cartItemsQuantity: 1, // Default quantity
        }),
      });

      if (response.ok) {
        // Add item to cart context
        addToCart({ ...item, quantity: 1 });
        toast.success("Item added to cart!");
      } else {
        toast.error("Failed to add item to cart.");
      }
    } catch (error) {
      console.log("Error adding item to cart", error);
      toast.error("Failed to add item to cart.");
    }
  };

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {wishlistItems.length > 0 ? (
        wishlistItems.map(item => (
          <Card key={item._id} style={{ width: "18rem", margin: "1rem" }}>
            <Card.Img variant="top" src={`/api/items/images/${item.image}`} alt={item.name} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Card.Text>${item.price}</Card.Text>
              <Button
                variant="outline-danger"
                onClick={() => handleRemoveFromWishlist(item._id)}
              >
                Remove from Wishlist
              </Button>
              <Button
                variant="primary"
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>No items in wishlist.</p>
      )}
    </div>
  );
};

export default WishlistPage;
