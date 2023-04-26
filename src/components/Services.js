import React from "react";
import "./Services.css";

function Services(props){
    return <div className="services">
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-3 services-img-col">
                    <img className="services-img" src={props.image} alt="..." />
                </div>
                <div className="col-md-9">
                    <div className="card-body">
                        <h5 className="card-title">{props.service}</h5>
                        <p className="card-text">{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default Services;