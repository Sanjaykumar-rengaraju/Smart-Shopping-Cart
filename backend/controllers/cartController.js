const Cart = require('../models/Cart');

// Add product to cart
const addToCart = async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        let cart = await Cart.findOne();

        if (!cart) {
            cart = new Cart({ items: [] });
        }

        const productIndex = cart.items.findIndex(item => item.product.toString() === productId);
        if (productIndex > -1) {
            cart.items[productIndex].quantity += quantity;
        } else {
            cart.items.push({ product: productId, quantity });
        }

        await cart.save();
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add product to cart' });
    }
};

// Get cart details
const getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne().populate('items.product');
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch cart' });
    }
};

module.exports = { addToCart, getCart };