// services/productsService.js
import axios from 'axios';

let token = null;
let tokenExpiration = null;

const getAuthToken = async () => {
  const currentTime = Date.now() / 1000; // convert to seconds

  if (!token || currentTime > tokenExpiration) {
    const authResponse = await axios.post('/test/auth', {
      companyName: "goMart",
      clientID: "2db15012-a488-4450-a2c6-8c0086afee04",
      clientSecret: "TvjiJPvrgdDCwxmI",
      ownerName: "Shahnawaz",
      ownerEmail: "shahnawaz.2125cse@kiet.edu",
      rollNo: "2100290100153"
    });

    token = authResponse.data.access_token;
    tokenExpiration = currentTime + authResponse.data.expires_in;
  }

  return token;
};

export const fetchProducts = async (company, category, top, minPrice, maxPrice) => {
  const token = await getAuthToken();

  const response = await axios.get(`/test/companies/${company}/categories/${category}/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
};