import React from 'react';
import { getCart, updateCart } from '../services/cart.js';

export default function Item({ product, qtd }) {
  console.log(qtd);
  async function handleChange() {
    console.log('To be implemented');
    /* const cart = await getCart();
    const products = cart.products;
    products.forEach(product => delete product._id);
    products.findIndex(el => el.productId === product.id) > -1
      ? products[products.findIndex(el => el.productId === product.id)].qtd++
      : products.push({ productId: product.id, qtd: 1 });
    const newCart = { _id: cart.id, products: products, couponsId: cart.couponsId };
    await updateCart(newCart); */
  }

  return (
    <div
      style={{
        padding: '10px',
        margin: '5px',
        border: '1px solid black',
        width: '350px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <h4>
        <small>{product.name}</small>
      </h4>
      <h4>
        Quantity: <small>{qtd}</small>
      </h4>
    </div>
  );
}
