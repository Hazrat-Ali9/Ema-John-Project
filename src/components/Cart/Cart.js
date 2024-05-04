import React from 'react';

const Cart = (props) => {
    return (
        <div>
            <h3>Order Summary</h3>
                <p>Selected Items: {props.cart.length}</p>
                <p>Total Price: $1140</p>
                <p>Total Shipping Charge: $5</p>
                <p>Tax: $114</p>
                <p>Grand Total: $1559</p>

                <div>
                    <button>Clear Cart</button>
                    
                </div>
                <div>
                <button>Review Order</button>
                </div>
        </div>
    );
};

export default Cart;