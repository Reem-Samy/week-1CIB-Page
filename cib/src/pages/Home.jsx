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

import NewsCard from "../components/Common/NewsCard";

import news from "../assets/news.png";





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


<section className="newsSection">
  <div className="container">
    <SectionTitle title="News" />

    <div className="newsList">
      <NewsCard
        img={news}
        dateLine="08/10/2025 - Commercial International Bank (CIB) Has Partnered with CI Capital to Successfully Closes the Seventh Securitization Bond Issuance for Halan Consumer Finance, Worth EGP 3.4 Billion"
        title="Commercial International Bank (CIB) Has Partnered with CI Capital to Successfully Closes the Seventh Securitization Bond Issuance for Halan Consumer Finance, Worth EGP 3.4 Billion"
        desc="CIB, Egypt’s leading and largest private sector bank, has successfully partnered with CI Capital to complete the seventh issuance for Halan Consumer Finance, valued at EGP 3.4 billion."
      />

      <NewsCard
        img={news}
        dateLine="08/09/2025 - Commercial International Bank (CIB) Successfully Closes EGP 2.3 Billion Securitization Bond Issuance for GlobalCorp Financial Services"
        title="Commercial International Bank (CIB) Successfully Closes EGP 2.3 Billion Securitization Bond Issuance for GlobalCorp Financial Services"
        desc="CIB, Egypt’s leading and largest private sector bank, has successfully completed its seventh securitization bond issuance for GlobalCorp Financial Services."
      />

      <NewsCard
        img={news}
        dateLine="21/08/2025 - Commercial International Finance Company (CIFC) Records EGP 4.1 billion in Its First Year of Operations"
        title="Commercial International Finance Company (CIFC) Records EGP 4.1 billion in its First Year of Operations"
        desc="CIB is pleased to announce that its subsidiary, CIFC, has delivered remarkable results since its inception."
      />
    </div>

    <div className="newsBtn">
      <Button text="View All News" />
    </div>
  </div>
</section>




     </div>
  
     );
}
 
export default Home;