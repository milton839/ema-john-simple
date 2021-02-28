import React from 'react';

const CartProduct = (props) => {
    // console.log(props.cartProduct)
    const product = props.cartProduct;
    console.log(product)
    return (
        <div>
            <h2>this is cart product</h2>
        </div>
    );
};

export default CartProduct;