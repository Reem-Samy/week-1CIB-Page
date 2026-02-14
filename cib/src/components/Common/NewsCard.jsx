import React from "react";
import "./NewsCard.css";

const NewsCard = ({ img, dateLine, title, desc }) => {
  return (
    <div className="newsCard">
      <img className="newsImg" src={img} alt={title} />

      <div className="newsBody">
        <p className="newsDate">{dateLine}</p>
        <h3 className="newsTitle">{title}</h3>
        <p className="newsDesc">{desc}</p>
      </div>
    </div>
  );
};

export default NewsCard;
