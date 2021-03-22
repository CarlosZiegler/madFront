import React, { useState, useEffect } from 'react';
import { getCart, updateCart } from '../services/cart.js';
import Item from './Item';

export default function Cart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getCart();

      setProducts(result.products);
    }
    fetchData();
  }, []);
  console.log(products);
  return (
    <div style={{ textAlign: 'center' }}>
      <h3>Products in cart</h3>
      <hr />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {products.map((product, index) => (
          <Item product={product.productId} qtd={product.qtd} key={index} />
        ))}
      </div>
    </div>
  );
}
