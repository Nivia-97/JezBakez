import React from "react";
import { useContext, useState } from "react";
import { ShopCartContext } from "./ShopCartContext";
import "./CartItems.css";
import CartItemList from "./CartItemList";

function CartItems() {
    const { cartList, setCartList } = useContext(ShopCartContext);
    const totalAmount = cartList.reduce((acc, item) => {
        return acc + (item.price * item.quantity);
    }, 0);

    function deleteFromCart(productId){
        const updatedList = cartList.filter((item)=> item.id!==productId);
        setCartList([...updatedList]);
    }


    function decreaseQuantity(productId) {
        setCartList(prevState =>
            prevState.map(item => {
                if (item.id === productId && item.quantity > 1) {
                    return { ...item, quantity: item.quantity - 1 };
                } else {
                    return item;
                }
            })
        );
    }

    function increaseQuantity(productId) {
        setCartList(prevState =>
            prevState.map(item => {
                if (item.id === productId) {
                    return { ...item, quantity: item.quantity + 1 };
                } else {
                    return item;
                }
            })
        );
    }


    return <>
        <div className="row">
            <div className="col-lg-7 cart-list-column">
                <hr className="hr-above-table" />
                <table className="table">
                    <thead>
                        <tr>
                            <th style={{ padding: "15px 0px" }} className="cartlist-head" scope="col">Product</th>
                            <th style={{ padding: "15px 0px" }} className="cartlist-head" scope="col">Price</th>
                            <th style={{ padding: "15px 0px" }} className="cartlist-head" scope="col">Quantity</th>
                            <th style={{ padding: "15px 0px" }} className="cartlist-head" scope="col">Subtotal</th>
                            <th style={{ padding: "15px 0px" }} className="cartlist-head" scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartList.map(listItem => <CartItemList key={cartList.id} cartList={listItem}
                            increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} 
                            handleClick={deleteFromCart} />)}
                    </tbody>
                </table>
                <div className="coupon-code-area">
                    <input className="coupon-code" type="text" placeholder="Coupon code" />
                    <button className="coupon-code-button">Apply coupon</button>
                </div>
            </div>
            <div className="col-lg-5 checkout-column">
                <div className="check-out">
                    <table className="table">
                        <tbody>
                            <tr>
                                <th className="subtotal" scope="row" style={{ padding: "15px 0px" }}>Subtotal</th>
                                <td className="subtotal-amount" style={{ padding: "15px 0px" }}>${totalAmount}.00</td>
                            </tr>
                            <tr>
                                <th className="discount" scope="row" style={{ padding: "15px 0px" }}>Discount</th>
                                <td className="discount-amount" style={{ padding: "15px 0px" }}>0%</td>
                            </tr>
                            <tr>
                                <th className="total" scope="row" style={{ padding: "15px 0px" }}>Total</th>
                                <td className="total-amount" style={{ padding: "15px 0px", fontWeight: "700", color: "rgba(0, 0, 0, 0.6)" }}>
                                    ${totalAmount}.00
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="check-out-button"> Checkout Now </button>
                </div>

            </div>
        </div>
    </>;
}

export default CartItems;