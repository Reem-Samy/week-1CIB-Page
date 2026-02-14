import React from "react";
import "./CenterCard.css";
import center1 from "../../assets/center1.png";

const CenterCard = () => {
  return (
    <div className="centerCard">
      <img className="centerCard-img" src={center1} alt="" />

      <div className="centerCard-body">
        <h3 className="centerCard-title">
          Buying and making a home
        </h3>

        <p className="centerCard-desc">
          So for all of you travelers, take a vacation without spending a fortune with these helpful tips and tricks.
        </p>

        <a className="centerCard-link" href="#">
          Read more
        </a>
      </div>
    </div>
  );
};

export default CenterCard;

