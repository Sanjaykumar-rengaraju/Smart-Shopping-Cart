import React from 'react';
import ProductUpload from '../components/Products/ProductUpload';

const ProductPage = () => {
    return (
        <div className="product-page">
            <h1>Manage Products</h1>
            <ProductUpload />
        </div>
    );
};

export default ProductPage;