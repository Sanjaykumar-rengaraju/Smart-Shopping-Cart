import React, { useState } from 'react';
import { recognizeProduct } from '../../services/productService';

const ProductRecognition = () => {
    const [image, setImage] = useState(null);
    const [result, setResult] = useState('');

    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await recognizeProduct(image);
            setResult(data.name);
        } catch (error) {
            console.error('Error recognizing product:', error);
            setResult('Error recognizing product');
        }
    };

    return (
        <div className="product-recognition">
            <h2>Product Recognition</h2>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} required />
                <button type="submit">Recognize Product</button>
            </form>
            {result && <p>Recognized Product: {result}</p>}
        </div>
    );
};

export default ProductRecognition;