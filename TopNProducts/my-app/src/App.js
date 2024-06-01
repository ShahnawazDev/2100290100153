// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductsContextProvider from './contexts/ProductsContext';
import ProductsList from './components/ProductsList';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <ProductsContextProvider>
      <Router>
        <Routes>
          <Route path="/" exact component={ProductsList} />
          <Route path="/product/:id" component={ProductDetails} />
        </Routes>
      </Router>
    </ProductsContextProvider>
  );
}

export default App;
