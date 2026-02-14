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

import SubTitle from "../components/Common/SubTitle";
import CenterCard from "../components/Common/CenterCard";
import Button from "../components/Common/Button";
import center1 from "../assets/center1.png";
import center2 from "../assets/center2.png";
import center3 from "../assets/center3.png";



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


<section className="learningSection">
  <div className="container">
    <SectionTitle title="Learning Center" />
    <SubTitle text="Learn more about banking and your finances" />

    <div className="learningGrid">
      <CenterCard
        img={center1}
        title="Buying and making a home"
        desc="Buying a home can be an emotional process, but it&apos;s important to approach it logically."
      />
      <CenterCard
        img={center2}
        title="Traveling on a budget"
        desc="So for all of you travelers, take a vacation without spending a fortune with these helpful tips and tricks."
      />
      <CenterCard
        img={center3}
        title="University life tips"
        desc="The impact of a good education can be transformative."
      />
    </div>

    <div className="learningBtn">
      <Button text="View more" />
    </div>
  </div>
</section>



     </div>
  
     );
}
 
export default Home;