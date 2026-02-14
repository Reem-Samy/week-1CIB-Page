import React from "react";
import "./Card.css";
import icon1 from "../../assets/icon1.png"

const Card = () => {
  return (
    <div className="applyCard">
      <div className="applyIcon">
        <img src={icon1} alt="" />
      </div>

      <p className="applyText">Apply for a New Account</p>
    </div>
  );
};

export default Card;
