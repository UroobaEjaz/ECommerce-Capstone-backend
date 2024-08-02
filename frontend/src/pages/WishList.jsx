/*import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// wishlist page reference: https://www.google.com/search?sca_esv=0c6ef13e064fd2d5&sca_upv=1&rlz=1C1OPNX_enCA1057CA1057&sxsrf=ADLYWILPUR1kUmcR8B_1aeujCSvfsRDEFw:1721598694492&q=wishlist+page+react&tbm=vid&source=lnms&fbs=AEQNm0DYVld7NGDZ8Pi819Yg8r6em07j6rW9d2jUMtr8MB7htoxbI0iAKNRPykigVf3e9aputkbr8jzmN5LYbANOqrq5HYnx4MjtyMxZ94LvgeHWmGBcuWUoydKfNaoB5JMdZlMtXmg2De2y5O7nn-eTbNdYHsRiT1RQ-pB6qp3ejXJ5VpdCk5NA1Jug5hVR16L7F-A1C1p-4xpfp7qj2HsGNaipPZQOiw&sa=X&ved=2ahUKEwi54YX1jrmHAxW3ADQIHdKgAXMQ0pQJegQIFBAB&biw=1242&bih=545&dpr=1.1#fpstate=ive&vld=cid:7d5fc40d,vid:PvjfJmoWq90,st:0

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    // Fetch wishlist items from the API
    const fetchWishlist = async () => {
      try {
        const response = await fetch("/api/wishlist/items");
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

  const removeFromWishlist = async (itemId) => {
    try {
      const response = await fetch(`/api/wishlist/remove/${itemId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Remove the item from the local state after successful deletion
      setWishlistItems(wishlistItems.filter(wishlistItem => wishlistItem.item._id !== itemId));
      toast.success("Item removed from wishlist.");
    } catch (error) {
      console.log("Error removing wishlist item", error);
      toast.error("Failed to remove item from wishlist.");
    }
  };
// Function to handle adding item to cart
const addToCart = async (item) => {
  //const quantity = itemQuantities[item._id] || 1; // Default to 1 if not set

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
       // cartItemsQuantity: quantity,
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
                <Button variant="danger" onClick={() => removeFromWishlist(item._id)}>Remove</Button>
                <Button variant="primary" onClick={() => addToCart(item._id)}>Add to Cart</Button>
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

export default WishlistPage; */

import React, { useState, useEffect } from "react";
import { ListGroup, Button } from "react-bootstrap";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCartItemsContext } from "../context/CartItemsContext"; // Import cart context
import { Link } from "react-router-dom";
import { FaShoppingCart, FaTrash} from "react-icons/fa";
import { FaHeart, FaHome } from "react-icons/fa";
import Navbar from "@/components/Navbar";

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const { cartItems, addToCartContext } = useCartItemsContext(); // Use cart context

  useEffect(() => {
    // Fetch wishlist items from the API
    const fetchWishlist = async () => {
      try {
        const response = await fetch("/api/wishlist/items");
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

  const removeFromWishlist = async (itemId) => {
    try {
      const response = await fetch(`/api/wishlist/remove`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Remove the item from the local state after successful deletion
      setWishlistItems(wishlistItems.filter(wishlistItem => wishlistItem.item._id !== itemId));
      toast.success("Item removed from wishlist.");
    } catch (error) {
      console.log("Error removing wishlist item:", error);
      toast.error("Failed to remove item from wishlist.");
    }
  };

  const addToCart = async (item) => {
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
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);

      // Update cart context
      addToCartContext({ ...item, quantity: 1 });
      toast.success("Item added to cart.");
    } catch (error) {
      console.log("Error adding item to cart", error);
      toast.error("Failed to add item to cart.");
    }
  };

  return (
    <>
    <Navbar />
    <div className="d-flex flex-column align-items-center pt-16">
        <h1 className="text-4xl font-bold inline-flex items-center mt-12 mb-7">
        Your Wishlist
        <FaHeart className="text-red-500 ml-3 text-4xl" />
      </h1>
      <ListGroup className="w-75 mt-3">
        {wishlistItems.length > 0 ? (
          wishlistItems.map((wishlistItem, index) => {
            const item = wishlistItem.item;
            return (
              <ListGroup.Item
                key={item._id}
                className="d-flex justify-content-between align-items-center"
                style={{ marginTop: index > 0 ? '10px' : '0' }} // Add top margin between items
              >
                <div>
                  <img
                    src={`/api/items/images/${item.image}`}
                    alt={item.name}
                    style={{ width: "50px", height: "50px", objectFit: "cover", marginRight: "10px" }}
                  />
                  {item.name} - ${item.price}
                </div>
                <div>
                  <Button variant="danger" onClick={() => removeFromWishlist(item._id)} style={{ marginRight: '10px' }}><FaTrash/></Button>
                  <Button variant="primary" onClick={() => addToCart(item)}><FaShoppingCart/></Button>
                </div>
              </ListGroup.Item>
            );
          })
        ) : (
          <ListGroup.Item>No items in wishlist.</ListGroup.Item>
        )}
      </ListGroup>
      <div className="mt-6">
      <Button className="btn btn-primary mb-4">
        <Link to="/cart" className="text-white text-decoration-none w-full">
          <FaShoppingCart />
        </Link>
      </Button>
      <Button className="btn btn-primary mb-4 ml-4">
        <Link to="/" className="text-white text-decoration-none text-center">
          <FaHome />
        </Link>
      </Button>
    </div>
    </div>
    </>
  );

};

export default WishlistPage;
