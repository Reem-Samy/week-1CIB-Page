import React from "react";
import "./Header.css";
import heroImg from "../../assets/hero.png";
import Button from "../Common/Button";

const Header = () => {
  return (
    <header className="hero">
      <div className="hero-bg">
        <img src={heroImg} alt="Hero" className="hero-img" />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content container">
        <h1 className="hero-title">CIB</h1>

        <p className="hero-description">
          Delivering value to our clients, our
          <br />
          community and our shareholders
        </p>

        <Button text="Discover more" />
      </div>
    </header>
  );
};

export default Header;
