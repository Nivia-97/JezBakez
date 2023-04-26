import React from "react";
import "./Footer.css";

function Footer() {
    return <>
        <div className="newsletter">
            <div className="row">
                <div className="col-lg-6 newsletter-col-1">
                    <p>Join our Newsletter list to get all the latest offers, discounts and other benefits.</p>
                </div>
                <div className="col-lg-6 newsletter-col-2">
                    <input type="search" placeholder="Email Address" />
                    <button><span>Subscribe</span></button>
                </div>
            </div>
        </div>
        <div className="footer">
            <div className="row footer-main">
                <div className="col-lg-3 col-sm-6 shop-info">
                    <h1><em>JezBakez</em></h1>
                    <p>Elevate your taste buds with our exquisite cake creations.</p>
                    <div><i className="fa-brands fa-facebook-f "></i>
                    <i className="fa-brands fa-instagram "></i>
                    <i className="fa-brands fa-twitter "></i>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 info">
                    <h2>Quick Links</h2>
                    <p>Your Account</p>
                    <p>View Order</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Condition</p>
                </div>
                <div className="col-lg-3 col-sm-6 info">
                <h2>Work Times</h2>
                    <p>Mon:Fri : 8am-8pm</p>
                    <p>Sat : 9am-4pm</p>
                    <p>Sun : Closed</p>
                </div>
                <div className="col-lg-3 col-sm-6 info">
                    <h2>Contact Info</h2>
                    <h4>(+91) 431-275</h4>
                    <p>JezBakez store</p>
                    <p>Baker Street, India</p>
                    <h5>jezbakezdemo@gmail.com</h5>
                </div>
            </div>
            <hr />
            <div className="copyright">
                <p>JezBakez © 2023 All Rights Reserved</p>
                <p>coded by <span>Nivia</span></p>
            </div>
        </div>
    </>;
}

export default Footer;