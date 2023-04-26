import React, { createContext, useState } from "react";

export const ShopCartContext = createContext();

export function CartProvider(props){
    const [cartList, setCartList] = useState([]);

    return (
        <ShopCartContext.Provider value = {{cartList, setCartList}}>
            {props.children}
        </ShopCartContext.Provider>
    );
}