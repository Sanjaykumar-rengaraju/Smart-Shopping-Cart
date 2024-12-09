import React from 'react';
import CartDisplay from '../components/Cart/CartDisplay';
import Checkout from '../components/Cart/Checkout';

const CartPage = () => {
    return (
        <div className="cart-page">
            <h1>Your Cart</h1>
            <CartDisplay />
            <Checkout total={100.0} /> {/* Replace with actual total */}
        </div>
    );
};

export default CartPage;