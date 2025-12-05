import React from "react";
import "./NewsLetter.css";
const NewsLetter = () => {
  return (
    <div className="newsLetter">
      <h1>Get Exclusive offer on Your Email </h1>
      <p>Subscribes to our newsletter and stay updated</p>
      <div className="">
        <input type="email" placeholder="Your Email Id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
