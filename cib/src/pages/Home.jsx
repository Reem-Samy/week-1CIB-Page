import React from "react";
import "./Home.css"
import Navbar from "./../components/Layout/Navbar";
import Header from "../components/Layout/Header";
import SubNav from "../components/Common/SubNav";
import SmallMenuTap from "../components/Common/SmallMenuTap";
import SectionTitle from "../components/Common/SectionTitle";
import Card from "../components/Common/Card";

import SubTitle from "../components/Common/SubTitle";
import CenterCard from "../components/Common/CenterCard";
import Button from "../components/Common/Button";

import NewsCard from "../components/Common/NewsCard";
import CenterCard2 from '../components/Common/CenterCard2';
import CenterCard3 from '../components/Common/CenterCard3';
import CenterCard4 from "../components/Common/CenterCard4";

import Footer from "../components/Layout/Footer";





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

<Card />
<Card />
<Card />

</div>

  </div>
</section>


<section className="learningSection">
  <div className="container">
    <SectionTitle title="Learning Center" />
    <SubTitle text="Learn more about banking and your finances" />

    <div className="learningGrid">

<CenterCard />
<CenterCard />
<CenterCard />

    </div>

    <div className="learningBtn">
      <Button text="View more" />
    </div>
  </div>
</section>



<section className="newsSection">
  <div className="container">
    <SectionTitle title="News" />

    <NewsCard />
    <NewsCard />
    <NewsCard />

    <div className="newsBtn">
      <Button text="View All News" />
    </div>
  </div>
</section>



<section className="blueBannerSection">
  <div className="container">
    <div className="bannerCard">
      <div className="bannerTopBorder"></div>

      <h3 className="bannerTitle">
        CIB on an international scale
      </h3>

      <p className="bannerDesc">
        Learn more about CIB's presence outside of Egypt
      </p>

      <Button text="Learn more" />
    </div>
  </div>
</section>

<section className='section-8'>
        <div className='icons-box'>
        <div className='title-box'>
          <SmallMenuTap text="Sustainable finance" />
        <SectionTitle title=" Sustainability is an integral part of the way we work" />
        </div>

        <div className='cards-box'>
<CenterCard2 />
<CenterCard2 />
<CenterCard2 />
        </div>

        <Button text="Learn More" />
        </div>

    </section>


    <section className='section-9'>
        <div className='icons-box'>
        <div className='title-box'>
        <SmallMenuTap text="Awards" />
        <SectionTitle title=" CIB's integrity and quality are recognized internationally" />
        </div>

        <div className='cards-box'>
<CenterCard3 />
<CenterCard3 />
<CenterCard3 />
        </div>
        
        <Button text="See all our awards" />
        </div>

    </section>

    <section className='section-9'>
        <div className='icons-box'>
        <div className='title-box'>
        <SmallMenuTap text="We care" />
        <SectionTitle title=" CIB's integrity and quality are recognized internationally" />
        </div>

        <div className='cards-box'>
<CenterCard4 />
<CenterCard4 />
<CenterCard4 />
        </div>
        
        </div>

    </section>

<Footer/>

     </div>
  
     );
}
 
export default Home;