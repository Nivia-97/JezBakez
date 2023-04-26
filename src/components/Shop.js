import React from "react";
import { useContext } from "react";
import "./Shop.css";
import productItems from "./Items";
import Product from "./Product";
import { ShopCartContext } from "./ShopCartContext";

function Shop() {
    const {cartList, setCartList} = useContext(ShopCartContext);

    function addToCart(item){
        {!cartList.includes(item) && setCartList([...cartList, item])}
    }

    return <>
        <div className="shop-page-header"></div>
        <div className="product-area">
            {productItems.map(item => <Product key={item.id} item={item} handleClick={addToCart}/>)}
        </div>
    </>;
}

export default Shop;