import React from "react";
import { useNavigate } from "react-router-dom";
import servicesOffering from "./ServicesOffering";
import Services from "./Services";
import "./Home.css";
import desktopTitleImage from "../images/desktop-background.jpg";
import mobileTitleImage from "../images/mobile-background.jpg";
import aboutImage from "../images/about-image.jpg";


function Home() {
    const navigate = useNavigate();
    return <>
        <section id="title">
            <picture>
                <source media="(max-width:600px )" srcset={mobileTitleImage} />
                <img class="header-img" src={desktopTitleImage} alt="header-image" />
            </picture>
            <div className="title-info">
                <h1>Quality Products...</h1>
                <p>Experience the sweet moments of life with our heavenly cakes and desserts - 
                crafted with love and care to make every celebration a memorable one.</p>
                <button onClick={()=>navigate('shop')}>Purchase Now</button>
            </div>
        </section>

        <section id="brief-about">
            <div className="about-container">
                <div className="row">
                    <div className="col-lg-6 about-details">
                        <h1>Welcome to our bakery</h1>
                        <p className="brief-main">Baked goods have been around for thousands of years.
                            The art of baking was developed early during the Roman Empire.</p>
                        <p className="note">We understand that cakes are an important part of life's celebrations, 
                        and we feel honored to be a part of your special moments. From birthdays to weddings, 
                        baby showers to corporate events, we are here to help you make every occasion a little sweeter. </p>
                        <button onClick={()=>navigate('about')}>know more about us</button>
                    </div>
                    <div className="col-lg-6">
                        <img className="about-image" src={aboutImage} alt="about-image" />
                    </div>
                </div>
            </div>
        </section>

        <section id="services">
            <div className="services-offering">
                <h1>Services We Offer</h1>
                {servicesOffering.map(item => <Services 
                    key={item.id} image={item.image} service={item.service} description={item.description} />)}
            </div>
        </section>
    </>;
}

export default Home;