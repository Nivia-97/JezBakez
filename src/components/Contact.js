import React from "react";
import "./Contact.css";

function Contact() {
    return <>
        <div className="contact-page-header"></div>
        <div className="contact-area">
            <h1>Get In Touch</h1>
            <p className="contact-sub-head"><em>Do you have anything in your mind to let us know? Kindly don't delay to connect
                to us by means of our contact form.</em></p>
            <div className="row">
                <div className="col-lg-9">
                    <form>
                        <input className="name" type="text" placeholder="Your Name" />
                        <input className="email" type="email" placeholder="Email Address" />
                        <input className="subject" type="text" placeholder="Subject" />
                        <textarea className="message" type="textarea" placeholder="Write Message" />
                        <button className="submit">Submit Now</button>
                    </form>
                </div>
                <div className="col-lg-3">
                    <div className="contact-info">
                        <h4>Address:</h4>
                        <p>JezBakez Store</p>
                        <p>Baker Street, India</p>
                    </div>
                    <div className="contact-info">
                        <h4>Phone:</h4>
                        <p>(+91) 431-275</p>
                    </div>
                    <div className="contact-info">
                        <h4>Email:</h4>
                        <p>jezbakezdemo@gmail.com</p>
                    </div>
                    <div className="contact-info">
                        <h4>Opening Hours:</h4>
                        <p>Mon:Fri : 8am-8pm</p>
                        <p>Sat : 9am-4pm</p>
                        <p>Sun : Closed</p>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default Contact;