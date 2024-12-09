import api from './api';

export const getProducts = async () => {
    const response = await api.get('/products');
    return response.data;
};

export const uploadProduct = async (productData) => {
    const formData = new FormData();
    formData.append('name', productData.name);
    formData.append('price', productData.price);
    formData.append('stock', productData.stock);
    formData.append('image', productData.image);
    const response = await api.post('/products/add', formData);
    return response.data;
};

export const recognizeProduct = async (image) => {
    const formData = new FormData();
    formData.append('image', image);
    const response = await api.post('/products/recognize', formData);
    return response.data;
};