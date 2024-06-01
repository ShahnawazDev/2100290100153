// components/ProductDetails.js
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsContext } from '../contexts/ProductsContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductsContext);
  const product = products.find(product => product.id === id);

  return (
    <div>
      <h2>{product.productName}</h2>
      <p>{product.price}</p>
      {/* other product details */}
    </div>
  );
};

export default ProductDetails;