import React from 'react';
import ProductList from '../components/Products/ProductList';
import ProductUpload from '../components/Products/ProductUpload';

const HomePage = () => {
    return (
        <div className="home-page">
            <h1>Welcome to Smart Shopping Cart</h1>
            <ProductUpload />
            <ProductList />
        </div>
    );
};

export default HomePage;