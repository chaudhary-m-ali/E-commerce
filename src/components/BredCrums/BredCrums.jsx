import React from "react";
import "./BredCrums.css";
import arrow_icon from "../../assets/arrow_icon.png";
const BredCrums = (props) => {
  const { product } = props;
  return (
    <div className="bredCrums">
      Home <img src={arrow_icon} alt="arrow-icon" height={10} />
      Shop <img src={arrow_icon} alt="arrow-icon" height={10} />
      {product.category} <img src={arrow_icon} alt="arrow-icon" height={10} />
      {product.name}
    </div>
  );
};

export default BredCrums;
