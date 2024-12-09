import React, { useState } from 'react';
import { uploadProduct } from '../../services/productService';

const ProductUpload = () => {
    const [productData, setProductData] = useState({ name: '', price: '', stock: '', image: null });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData({ ...productData, [name]: value });
    };

    const handleFileChange = (e) => {
        setProductData({ ...productData, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await uploadProduct(productData);
            alert('Product uploaded successfully!');
        } catch (error) {
            console.error('Error uploading product:', error);
        }
    };

    return (
        <div className="product-upload">
            <h2>Upload New Product</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Product Name" onChange={handleChange} required />
                <input type="number" name="price" placeholder="Price" onChange={handleChange} required />
                <input type="number" name="stock" placeholder="Stock" onChange={handleChange} required />
                <input type="file" name="image" onChange={handleFileChange} required />
                <button type="submit">Upload Product</button>
            </form>
        </div>
    );
};

export default ProductUpload;