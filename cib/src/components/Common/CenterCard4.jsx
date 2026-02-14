import React from "react";
import "./CenterCard4.css"
import global from "../../assets/global.png";


const CenterCards4 = () => {
  return (
    <div className="card4">
      <img src={global} alt= "icon"/>
      <div className='cards-box-text'>
     <div className="card4-p">Online</div>
      <p className='cardparagraph-2'>Chat with 'Zaki' our digital assistant to guide you through our products and services, or reach out on social media.</p>
      </div>
    </div>
  );
};

export default CenterCards4;