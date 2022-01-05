import { useEffect, useState } from 'react';

export const useProducts = () => {
  const [products, setProducts] = useState([{}]);

  const fetchData = async () => {
    const response = await fetch('http://localhost:4321/machines');
    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    const data = await response.json();
    setProducts(data);
    console.log(data);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return products;
};
