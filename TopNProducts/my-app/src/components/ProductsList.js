// components/ProductsList.js
import React, { useContext, useEffect } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';

const ProductsList = () => {
  const { products, getProducts } = useContext(ProductsContext);

  useEffect(() => {
    getProducts('AMZ', 'Laptop', 10, 1, 10000);
  }, []);

  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>
          <h2>{product.productName}</h2>
          <p>{product.price}</p>
          {/* other product details */}
        </div>
      ))}
    </div>
  );
};

export default ProductsList;