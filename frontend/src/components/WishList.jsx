import React, { useState, useEffect } from 'react';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [itemId, setItemId] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchWishlistItems();
  }, []);

  const fetchWishlistItems = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/wishlist/items');
      const data = await response.json();
      setWishlistItems(data);
    } catch (error) {
      console.error('Error fetching wishlist items:', error);
    }
  };

  const addToWishlist = async (e) => {
    e.preventDefault();

    if (!itemId) {
      setMessage('Item ID is required');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/addToWishList', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ itemId }),
      });
      const data = await response.json();

      if (response.ok) {
        setMessage('Item added to wishlist successfully');
        fetchWishlistItems(); // Refresh the wishlist items
      } else {
        setMessage(data.message || 'Error adding item to wishlist');
      }
    } catch (error) {
      console.error('Error adding item to wishlist:', error);
      setMessage('Internal server error');
    }
  };

  return (
    <div>
      <h2>Wishlist</h2>
      <form onSubmit={addToWishlist}>
        <input
          type="text"
          value={itemId}
          onChange={(e) => setItemId(e.target.value)}
          placeholder="Enter item ID"
        />
        <button type="submit">Add to Wishlist</button>
      </form>
      {message && <p>{message}</p>}
      <ul>
        {wishlistItems.map((item) => (
          <li key={item._id}>{item.item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;
