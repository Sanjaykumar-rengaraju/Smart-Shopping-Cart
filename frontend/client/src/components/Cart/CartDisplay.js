import React, { useEffect, useState } from 'react';
import { getCart } from '../../services/cartService';

const CartDisplay = () => {
    const [cart, setCart] = useState(null);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const data = await getCart();
                setCart(data);
            } catch (error) {
                console.error('Failed to fetch cart:', error);
            }
        };
        fetchCart();
    }, []);

    return (
        <div className="cart-display">
            {cart ? (
                <>
                    <h2>Your Cart</h2>
                    <ul>
                        {cart.items.map((item, index) => (
                            <li key={index}>
                                <strong>Product:</strong> {item.product.name} | 
                                <strong> Price:</strong> ${item.product.price} | 
                                <strong> Quantity:</strong> {item.quantity}
                            </li>
                        ))}
                    </ul>
                    <p><strong>Total:</strong> ${cart.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0).toFixed(2)}</p>
                </>
            ) : (
                <p>Loading your cart...</p>
            )}
        </div>
    );
};

export default CartDisplay;