import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    // Fetch wishlist items from the API
    const fetchWishlist = async () => {
      try {
        const response = await fetch("api/wishlist/items");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setWishlistItems(data);
      } catch (error) {
        console.log("Error fetching wishlist items", error);
        toast.error("Failed to fetch wishlist items.");
      }
    };

    fetchWishlist();
  }, []);

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {wishlistItems.length > 0 ? (
        wishlistItems.map(wishlistItem => {
          const item = wishlistItem.item;
          return (
            <Card key={item._id} style={{ width: "18rem", margin: "1rem" }}>
              <Card.Img variant="top" src={`/api/items/images/${item.image}`} alt={item.name} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>${item.price}</Card.Text>
              </Card.Body>
            </Card>
          );
        })
      ) : (
        <p>No items in wishlist.</p>
      )}
    </div>
  );
};

export default WishlistPage;
