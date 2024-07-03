/*import React, { useState, useEffect } from 'react';
import Cards from './Cards';

const SaltyCravingsChips = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChipsItems = async () => {
      try {
        const response = await fetch('/api/items/getByName', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: 'chips' }), // Searching for items with 'chips' in the name
        });

        if (!response.ok) {
          throw new Error('Failed to fetch chips items');
        }

        const data = await response.json();
        setItems(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchChipsItems();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <Cards items={items} />
      )}
    </div>
  );
};

export default SaltyCravingsChips; 
*/

import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import Cards from './Cards';

const chunkArray = (array, chunkSize) => {
  const results = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    results.push(array.slice(i, i + chunkSize));
  }
  return results;
};

const SaltyCravingsChips = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchChipsItems = async () => {
      try {
        const response = await fetch('/api/items/getByCategory', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ category: 'Chips' }), // Fetch items with 'chips' in the category
        });

        if (!response.ok) {
          throw new Error('Failed to fetch chips items');
        }

        const data = await response.json();
        setItems(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchChipsItems();
  }, []);

  const chunkedItems = chunkArray(items, 4);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className=''>
      <div className="relative mt-4">
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <div>
            <Carousel activeIndex={index} onSelect={handleSelect} controls={false} indicators={false} pause={false}>
              {chunkedItems.map((chunk, slideIndex) => (
                <Carousel.Item key={slideIndex}>
                  <div className="flex justify-center gap-4">
                    {chunk.map((item) => (
                      <div key={item._id} className="w-1/5 flex justify-center">
                        <Cards items={[item]} />
                      </div>
                    ))}
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 z-10"
              onClick={() => setIndex((index + chunkedItems.length - 1) % chunkedItems.length)}
            >
              <GoArrowLeft />
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 z-10"
              onClick={() => setIndex((index + 1) % chunkedItems.length)}
            >
              <GoArrowRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SaltyCravingsChips;
