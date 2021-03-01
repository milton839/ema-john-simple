import React from 'react';
import './CartProduct.css';

const CartProduct = (props) => {
    // console.log(props.cartProduct)
    const product = props.cartProduct;
    console.log(product)
    return (
        <div className="cart_product_details">    
            <div className="cart_product_item_details">
                <div className="cart_product_image">
                    <img src={product.img} alt=""/>
                </div>
                <div className="cart_product_details">
                    <h2>Name: <span>{product.category}</span></h2>
                    <h3>Price: <span>${product.price}</span></h3>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;