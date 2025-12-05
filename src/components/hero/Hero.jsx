import React from "react";
import "./Hero.css";
import hand_icon from "../../assets/hand_icon.png";
import men from "../../assets/p8.webp";
import arrow_icon from "../../assets/arrow_icon.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Best Deals ! Best Prices !</h2>
        <div className="hero-hand-icon">
          <p>New</p>
          <img src={hand_icon} alt="hand_icon" height={60} />
        </div>
        <p>collections</p>
        <p>for everone</p>
        <div className="hero-latest-btn">
          <div>latest collection</div>
          <img src={arrow_icon} alt="arrow_icon" height={30} />
        </div>
      </div>
      <div className="hero-right">
        <img src={men} alt="" height={500} />
      </div>
    </div>
  );
};

export default Hero;
