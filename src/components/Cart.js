import React from "react";
import { useContext } from "react";
import { ShopCartContext } from "./ShopCartContext";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import CartItems from "./CartItems";

function Cart() {
    const { cartList, setCartList } = useContext(ShopCartContext);
    const navigate = useNavigate();
    return <>
        <div className="cart-page-header"></div>
        <section id="cart-section">
            <div className="cart-section">
                {cartList <= 0 ?
                    <div>
                        <div className="cart-empty">Your cart is currently empty.</div>
                        <button className="return-to-shop" onClick={() => navigate('/shop')}>
                            Return to shop</button>
                    </div>
                    :
                    <CartItems />
                }
            </div>
        </section>
    </>;
}

export default Cart;