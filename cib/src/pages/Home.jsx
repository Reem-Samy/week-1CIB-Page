import React, { Component } from 'react';
import "./Home.css"
import Navbar from './../components/Layout/Navbar';
import Header from "../components/Layout/Header";
import SubNav from "../components/Common/SubNav";
import SmallMenuTap from "../components/Common/SmallMenuTap";
import SectionTitle from "../components/Common/SectionTitle";
import Card from "../components/Common/Card";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";


const  Home= () => {
    return ( 
    <div className="home">
      <Navbar />
      <Header />
       <SubNav />

       <section className="applyOnlineSection">
  <div className="container">
    <SmallMenuTap text="APPLY ONLINE" />
    <SectionTitle title="Apply online now for cards and loans with ease!" />

<div className="applyCardsGrid">
  <Card icon={icon1} title="Apply for a New Account" />
  <Card icon={icon2} title="Apply for a card" />
  <Card icon={icon3} title="Apply for a loan or overdraft" />
</div>

  </div>
</section>



     </div>
  
     );
}
 
export default Home;