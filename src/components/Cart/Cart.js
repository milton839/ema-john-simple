import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total,product) => total + product.price,0);
    //====Ekhane jekono akta use korlei hobe tobe reduce use kora better
    // let total = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const sProduct = cart[i];
    //     total = total + sProduct.price;
    // }
    let shipping = 0;
    if(total > 100){
        shipping = 0;
    }
    else if(total > 30){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99;
    }
    const tax = total/10;
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);
    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {formatNumber(total)}</p>
            <p>Shipping Cost: {shipping}</p>
            <p>Tax + Vat: {formatNumber(tax)}</p>
            <p>Total Price: {grandTotal}</p>
        </div>
    );
};

export default Cart;