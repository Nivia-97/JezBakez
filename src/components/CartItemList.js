import React, { useState } from "react";
import "./CartItemList.css";

function CartItemList(props) {
    return <>
        <tr>
            <td className="cart-product">
                <img className="cart-image" src={props.cartList.image} height="70px" width="70px" />
                <p className="cart-product-name">{props.cartList.name}</p>
            </td>
            <td>
                <p className="cart-product-price">${props.cartList.price}.00</p>
            </td>
            <td>
                <div class="btn-group quantity-btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn quantity-btn"
                        onClick={() => props.decreaseQuantity(props.cartList.id)}>
                        -
                    </button>
                    <span className="item-quantity"><h6>{props.cartList.quantity}</h6></span>
                    <button type="button" class="btn quantity-btn"
                        onClick={() => props.increaseQuantity(props.cartList.id)}>
                        +
                    </button>
                </div>
            </td>
            <td>
                <p className="cart-product-subtotal">${props.cartList.quantity * props.cartList.price}.00</p>
            </td>
            <td><i className="fa-solid fa-trash-can delete-item" onClick={()=>props.handleClick(props.cartList.id)}></i></td>
        </tr>
    </>;
}

export default CartItemList;