// components/ProductsList.js
import React, { useContext, useEffect } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';

const ProductsList = () => {
  const { products, getProducts } = useContext(ProductsContext);

  useEffect(() => {
    getProducts('AMZ', 'Laptop', 10, 1, 10000);
  }, [getProducts]);

  function printProduct(product,index){
    if(index === 0)
  console.log("Product details:" + product.productName + " " + product.price + " " + product.rating + " " + product.discount + " " + product.availability);

  };

  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>
          {printProduct(product,index)}
          <h2>{product.productName}</h2>
          <p>{product.price}</p>
          <p>{product.rating}</p>
          <p>{product.discount}</p>
          <p>{product.availability}</p>
          {/* other product details */}
        </div>
      ))}
    </div>
  );
};

export default ProductsList;