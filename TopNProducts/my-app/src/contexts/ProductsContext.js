// contexts/ProductsContext.js
import React, { createContext, useState } from 'react';
import { fetchProducts } from '../services/productsService';

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
  const [products, setProducts] = useState([]);

  const getProducts = async (company, category, top, minPrice, maxPrice) => {
    const data = await fetchProducts(company, category, top, minPrice, maxPrice);
    setProducts(data);
  };

  return (
    <ProductsContext.Provider value={{ products, getProducts }}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;