import React from "react";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { ShopCartContext } from "./ShopCartContext";

function Navbar() {
    const { cartList, setCartList } = useContext(ShopCartContext);
    const itemsInCart = cartList.length;
    const navigate = useNavigate();

    const navLinkStyles = ({ isActive }) => {
        return {
            color: isActive && "#f195b2"
        }
    }

    return <div className="navbar-background">
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <h1 className="navbar-brand brand-logo"><em><span style={{ color: "#f195b2" }}>Jez</span><span style={{ color: "#94c9d9" }}>Bakez</span></em></h1>
                <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav flex-grow-1 pe-3 ">
                            <li className="nav-item">
                                <NavLink style={navLinkStyles} className="nav-link" to='/'>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink style={navLinkStyles} className="nav-link" to='/about'>About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink style={navLinkStyles} className="nav-link" to='/shop'>Shop</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink style={navLinkStyles} className="nav-link" to='/contact'>Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink style={navLinkStyles} className="nav-link" to='/login'>Login</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="cart-area">
                    <button className="cart-button" onClick={() => navigate('cart')}>
                        <i class="fa-sharp fa-solid fa-cart-shopping"></i>
                        {itemsInCart>0 && <span class="position-absolute top-20 translate-middle badge cart-indicator">
                            {itemsInCart}
                            <span class="visually-hidden">unread messages</span>
                        </span>}
                    </button>
                </div>
                <button className="navbar-toggler hamburger-icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span><i class="fa-solid fa-bars"></i></span>
                </button>
            </div>
        </nav>
    </div>;
}

export default Navbar;