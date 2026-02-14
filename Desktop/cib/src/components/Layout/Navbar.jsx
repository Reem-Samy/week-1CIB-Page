import React, { Component } from 'react';
import "./Navbar.css"
import logo from "../../assets/logo.png";

const Navbar = () => {
    return ( 
        <nav className="navbar">
  <div className="navbar-container">
    <img src={logo} alt="" className="logo" />

    <ul className="nav-links">
      <li><a href="#">About Us</a></li>
      <li><a href="#">Investor Relations</a></li>
      <li><a href="#">Responsible Banking</a></li>
      <li><a href="#">Newsroom</a></li>
      <li><a href="#">Learning Center</a></li>
      <li><a href="#">Careers</a></li>
      <li><a href="#">Others</a></li>
    </ul>
  </div>
</nav>
     );
}
 
export default Navbar;

