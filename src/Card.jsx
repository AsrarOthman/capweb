import React from "react";
import "./Card.css";

const Card = ({ title, image, description }) => {
  return (
    <div className="my-card">
      <img src={image} alt={title} className="my-card-img" />
      <div className="my-card-body">
        <h3 className="my-card-title">{title}</h3>
        <p className="my-card-desc">{description}</p>
        <a href="#us">
          <button className="my-card-btn">Contact Us</button>
        </a>
      </div>
    </div>
  );
};

export default Card;
