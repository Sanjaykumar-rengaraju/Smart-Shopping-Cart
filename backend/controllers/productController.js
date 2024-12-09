const Product = require('../models/Product');
const { recognizeImage } = require('../services/imageRecognition');

// Add a new product
const addProduct = async (req, res) => {
    try {
        const { name, price, stock } = req.body;
        const image = req.file.path;
        const product = new Product({ name, price, stock, image });
        await product.save();
        res.status(201).json({ message: 'Product added successfully', product });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add product' });
    }
};

// Get all products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
};

// Recognize product from image
const recognizeProduct = async (req, res) => {
    try {
        const imagePath = req.file.path;
        const productName = await recognizeImage(imagePath);
        const product = await Product.findOne({ name: productName });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: 'Failed to recognize product' });
    }
};

module.exports = { addProduct, getProducts, recognizeProduct };