import React, { useState, useEffect } from 'react';
import Card from '../components/Cards'; // Assuming Card component displays individual product cards

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Example fetch data function
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        if (response.ok) {
          const data = await response.json();
          setProducts(data); // Set products state with fetched data
        } else {
          throw new Error('Failed to fetch products');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
