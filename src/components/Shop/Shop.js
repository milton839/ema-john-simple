import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import CartProduct from '../CartProduct/CartProduct';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const first10 = fakeData.slice(0,80);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([])
    const handleAddProduct = (product)=>{
        const newCart = [...cart,product];
        setCart(newCart);
    }
    return (
        <div className="shop_container">
            <div className="product_container">
                <CartProduct cartProduct={handleAddProduct}></CartProduct>
                {
                    products.map(product =><Product 
                        handleAddProduct={handleAddProduct}
                        product={product}>
                        </Product>)
                }
            </div>
            <div className="cart_container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;