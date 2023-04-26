import React from "react";
import "./Product.css";

function Product(props) {
    const { id, image, price, name } = props.item;
    return <>
        <div className="product-section" >
            <div className="product-card" >
                <img src={image} className="card-img-top" alt="..." />
                <div className="product-price"><em>${price}.00</em></div>
                <div className="product-card-body">
                    <h1 className="product-card-title">{name}</h1>
                    <button onClick={() => props.handleClick(props.item)} className="add-to-cart">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    </>;
}

export default Product;