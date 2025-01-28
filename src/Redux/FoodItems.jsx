import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './cartSlice';

const FoodItems = () => {
  const [foodItems, setFoodItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://freecvbd.com/api/food-items')
      .then((response) => response.json())
      .then((data) => setFoodItems(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      <h2>Food Items</h2>
      <ul>
        {foodItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodItems;
