import React from "react";
import "./Card.css";

const Card = ({ icon, title }) => {
  return (
    <div className="applyCard">
      <div className="applyIcon">
        <img src={icon} alt="icon" />
      </div>

      <p className="applyText">{title}</p>
    </div>
  );
};

export default Card;
