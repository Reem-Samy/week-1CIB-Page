import React from "react";
import "./NewsCard.css";
import news from "../../assets/news.png";

const NewsCard = () => {
  return (
    <div className="newsCard">
      <img className="newsImg" src={news} alt="" />

      <div className="newsBody">
        <p className="newsDate">08/10/2025 - Commercial International Bank (CIB) Has Partnered with CI Capital to Successfully Closes the Seventh Securitization Bond Issuance for Halan Consumer Finance, Worth EGP 3.4 Billion</p>
        <h3 className="newsTitle">Commercial International Bank (CIB) Has Partnered with CI Capital to Successfully Closes the Seventh Securitization Bond Issuance for Halan Consumer Finance, Worth EGP 3.4 Billion</h3>
        <p className="newsDesc">CIB, Egypt’s leading and largest private sector bank, has successfully partnered with CI Capital to complete the seventh issuance for Halan Consumer Finance, valued at EGP 3.4 billion.</p>
      </div>
    </div>
  );
};

export default NewsCard;
