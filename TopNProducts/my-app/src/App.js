// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductsContextProvider from './contexts/ProductsContext';
import ProductsList from './components/ProductsList';
import ProductDetails from './components/ProductDetails';

function App() {
  console.log("App js loaded" );
  return (
    <ProductsContextProvider>
       <Router>
         <Routes>
         <Route path="/" element={<ProductsList />} />
           <Route path="/product/:id" element={<ProductDetails />} />
         </Routes>
       </Router>
    </ProductsContextProvider>
  );
}

export default App;
