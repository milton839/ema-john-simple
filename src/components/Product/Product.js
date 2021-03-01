import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {name,img,seller,price,stock} = props.product;
    console.log(props)
    return (
        <div className="product">
            <div className="product_image">
                <img src={img} alt=""/>
            </div>
            <div className="product_details">
                <h2>{name}</h2>
                <p>By: <span>{seller}</span></p>
                <p>Price: <span>${price}</span></p>
                <p>Only <span>{stock}</span> left in stock - order soon</p>
                <button className="product_button" onClick={() => props.handleAddProduct(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart} /> add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;