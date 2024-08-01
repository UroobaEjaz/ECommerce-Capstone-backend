import React, { createContext, useState, useContext, useEffect } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    fetchWishlistItems();
  }, []);

  const fetchWishlistItems = async () => {
    try {
      const response = await fetch('/api/wishlist/items');
      const data = await response.json();
      setWishlistItems(data);
    } catch (error) {
      console.error('Error fetching wishlist items:', error);
    }
  };

 {/* const addToWishlist = async (itemId) => {
    try {
      const response = await fetch('/api/addToWishList', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ itemId }),
      });

      if (response.ok) {
        const data = await response.json();
        setWishlistItems((prevItems) => [...prevItems, data]);
      } else {
        console.error('Error adding item to wishlist');
      }
    } catch (error) {
      console.error('Error adding item to wishlist:', error);
    }
  };
*/}
  return (
    <WishlistContext.Provider value={{ wishlistItems }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlistContext = () => {
  return useContext(WishlistContext);
};


// reference: https://www.youtube.com/watch?v=3yrMcx02jXs