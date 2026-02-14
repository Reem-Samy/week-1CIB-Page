import React from "react";
import "./Footer.css";

import logo from "../../assets/cib-logo.png";
import googlePlay from "../../assets/google.png";
import app from "../../assets/app.png";

import FooterLinks from "../Common/FooterLinks";
import FooterLinksFinal from "../Common/FooterLinksFinal";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="large-box">
          <div className="top-section">
            <div className="logo-section">
              <img src={logo} alt="CIB Logo" />
            </div>

            <div className="links-section">
              <div className="column">
                <FooterLinks />
                <FooterLinks />
                <FooterLinks />
                <FooterLinks />
              </div>

              <div className="column">
                <FooterLinks />
                <FooterLinks />
                <FooterLinks />
                <FooterLinks />
              </div>

              <div className="column">
                <FooterLinks />
                <FooterLinks />
                <FooterLinks />
                <FooterLinks />
              </div>
            </div>

            <div className="store-section">
              <img src={googlePlay} alt="Google Play" />
              <img src={app} alt="App Store" />
            </div>
          </div>

          <div className="divider"></div>

          <div className="down-box">
            <div className="bottom-section">
              <p>CBE Approvals</p>
              <p>Cookie Policy</p>
              <p>Privacy Policy</p>
              <p>User Agreements</p>
            </div>

            <div className="box-image">
              <FooterLinksFinal />
              <FooterLinksFinal />
              <FooterLinksFinal />
              <FooterLinksFinal />
              <FooterLinksFinal />
              <FooterLinksFinal />
            </div>
          </div>
        </div>
      </footer>

      <div className="regtangle">
        <p className="paragraph">
          Copyright ©️ 2025 Commercial International Bank
        </p>
      </div>
    </>
  );
};

export default Footer;
