import React from "react";
import "./About.css";
import aboutUsImage from "../images/about-image.jpg";
import chef1 from "../images/chef-1.jpg";
import chef2 from "../images/chef-2.jpg";
import chef3 from "../images/chef-3.jpg";

function About() {
    return <>
        <div className="about-page-header"></div>

        <section id="about-us">
            <div className="about-us-container">
                <div className="row">
                    <div className="col-lg-6 about-us-details">
                        <h1>Welcome to our bakery</h1>
                        <p className="about-us-main">Baked goods have been around for thousands of years.
                            The art of baking was developed early during the Roman Empire.</p>
                        <p className="about-us-note">At our cake shop, we believe that every occasion deserves a 
                        delicious and beautifully crafted cake. That's why we use only the finest ingredients to 
                        create our handmade cakes, cupcakes, and cookies. Our passionate and skilled bakers are 
                        committed to bringing joy and sweetness to every customer. Whether you're celebrating a 
                        milestone or simply treating yourself, our desserts are sure to satisfy your cravings and 
                        leave you with a smile on your face. Come and indulge in the sweetness today! </p>
                    </div>
                    <div className="col-lg-6">
                        <img className="about-us-image" src={aboutUsImage} alt="about-image" />
                    </div>
                </div>
            </div>
        </section>

        <section id="about-chefs">
            <div className="about-chefs">
                <div className="row">
                    <div className="col-lg-3">
                        <h1>Our Chefs</h1>
                        <p className="chef-about">We have awesome chefs in our team. We are also always looking for new people
                            to join our team. Our chefs know their stuff very well.</p>
                    </div>
                    <div className="col-lg-3 chef">
                        <img src={chef1} alt="" />
                        <h2>Rachel</h2>
                        <p className="talent"><em>Expert in Cake Making</em></p>
                    </div>
                    <div className="col-lg-3 chef">
                        <img src={chef2} alt="" />
                        <h2>Thomas</h2>
                        <p className="talent"><em>Expert in Sandwich Making</em></p>
                    </div>
                    <div className="col-lg-3 chef">
                        <img src={chef3} alt="" />
                        <h2>Michael</h2>
                        <p className="talent"><em>Expert in Pizzas</em></p>
                    </div>
                </div>
            </div>
        </section>
    </>;
}

export default About;