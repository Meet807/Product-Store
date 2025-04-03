import React from 'react';
import ProductList from '../components/ProductList.jsx';
import ThemeToggle from '../components/ThemeToggle.jsx';

const HomePage = () => {
  return (
    <div>
      <ThemeToggle />
      <h1>Product Store</h1>
      <ProductList />
    </div>
  );
};

export default HomePage;
