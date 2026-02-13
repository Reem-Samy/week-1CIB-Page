import React, { Component } from 'react';
import "./Home.css"
import Navbar from './../components/Layout/Navbar';
import Header from "../components/Layout/Header";
import SubNav from "../components/Common/SubNav";
import SmallMenuTap from "../components/Common/SmallMenuTap";

const  Home= () => {
    return ( 
    <div className="home">
      <Navbar />
      <Header />
       <SubNav />

       


     </div>
  
     );
}
 
export default Home;