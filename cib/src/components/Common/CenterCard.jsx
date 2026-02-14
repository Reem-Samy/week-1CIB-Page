import React from "react";
import "./CenterCard.css";

const CenterCard = ({ img, title, desc }) => {
  return (
    <div className="centerCard">
      <img className="centerCard-img" src={img} alt={title} />

      <div className="centerCard-body">
        <h3 className="centerCard-title">{title}</h3>
        <p className="centerCard-desc">{desc}</p>
        <a className="centerCard-link" href="#">
          Read more
        </a>
      </div>
    </div>
  );
};

export default CenterCard;
