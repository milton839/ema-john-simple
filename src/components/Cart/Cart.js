import React from 'react';
import './Cart.css';
import CartProduct from '../CartProduct/CartProduct';

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
        <div className="cart_details">
            <div className="cart_item">
                <h1>Product Order Summary</h1>
                <h2>Items Ordered: <span className="product_color">${cart.length}</span></h2>
                <h2>Product Price: <span className="product_color">${formatNumber(total)}</span></h2>
                <h2>Shipping Cost: <span className="product_color">${shipping}</span></h2>
                <h2>Tax + Vat: <span className="product_color">${formatNumber(tax)}</span></h2>
                <h2>Total Price: <span className="product_color">${grandTotal}</span></h2>
            </div>
            <h1>Cart Product Details</h1>
            {
                cart.map(cartProduct =><CartProduct cartProduct={cartProduct}></CartProduct>)
            }
        </div>
    );
};

export default Cart;