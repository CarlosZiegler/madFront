import React from 'react';

import Product from './Product';

export default function Products({ products }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h3>List of Available Products</h3>
      <hr />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
