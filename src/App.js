import React, { useState, useEffect } from 'react';
import Products from './components/Products.jsx';
import { getAllProducts } from './services/product.js';
import Cart from './components/Cart.jsx';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const result = await getAllProducts();
      setProducts(result);
    }
    fetchData();
  }, []);
  return (
    <>
      <Products products={products} />
      <Cart />
    </>
  );
}

export default App;
