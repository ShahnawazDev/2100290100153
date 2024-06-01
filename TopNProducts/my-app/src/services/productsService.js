// services/productsService.js
import axios from 'axios';

export const fetchProducts = async (company, category, top, minPrice, maxPrice) => {
  const response = await axios.get(`http://20.244.56.144/test/companies/${company}/categories/${category}/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`);
  return response.data;
};