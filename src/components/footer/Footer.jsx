import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.webp";
import instagram_icon from "../../assets/instagram.png";
import facebook_icon from "../../assets/facebook.png";
import whatsapp_icon from "../../assets/whatsapp.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="shopify-logo" height={50} />
        <p>Shopify</p>
      </div>
      <ul className="footer-links">
        <li>About</li>
        <li>Products</li>
        <li>Office</li>
        <li>Company</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
          <img src={instagram_icon} alt="" height={30} />
        </div>
        <div className="footer-icon-container">
          <img src={facebook_icon} alt="" height={30} />
        </div>
        <div className="footer-icon-container">
          <img src={whatsapp_icon} alt="" height={30} />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>copyright@2023-All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
