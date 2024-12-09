import React from 'react';
import QRCode from 'qrcode.react';

const Checkout = ({ total }) => {
    const paymentUrl = 'https://example-shop.com/payment'; // Replace with actual payment URL

    return (
        <div className="checkout">
            <h2>Checkout</h2>
            <p>Total Amount: ${total.toFixed(2)}</p>
            <QRCode value={paymentUrl} />
            <button onClick={() => window.location.href = paymentUrl}>Pay Now</button>
        </div>
    );
};

export default Checkout;