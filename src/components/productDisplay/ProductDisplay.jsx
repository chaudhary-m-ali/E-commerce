import React from "react";
import "./productDisplay.css";
import star_icon from "../../assets/star_icon.png";
import star_dull_icon from "../../assets/star_dull_icon.png";
import { useContext } from "react";
import { ShopDataContext } from "../context/ShopContext";
const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart, cartItem } = useContext(ShopDataContext);
  console.log("intial value of cartItem", cartItem);
  return (
    <div className="productDisplay">
      <div className="productDisplay-left">
        <div className="productDisplay-img-list">
          <img src={product.image} alt="" height={150} />
          <img src={product.image} alt="" height={150} />
          <img src={product.image} alt="" height={150} />
        </div>
        <div className="productDisplay-img">
          <img
            className="productDisplay-main-img"
            src={product.image}
            alt=""
            height={300}
          />
        </div>
      </div>
      <div className="productDisplay-right">
        <h1>{product.name}</h1>
        <div className="productDisplay-right-star">
          <img src={star_icon} alt="" height={20} />
          <img src={star_icon} alt="" height={20} />
          <img src={star_icon} alt="" height={20} />
          <img src={star_icon} alt="" height={20} />
          <img src={star_dull_icon} alt="" height={20} />
          <p>(130)</p>
        </div>
        <div className="productDisplay-right-prices">
          <div className="productDisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productDisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productDisplay-right-description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus velit
          pariatur officiis, minus asperiores vitae veritatis laborum ea
          architecto eos sapiente, quo nihil sunt incidunt labore magni ipsa.
          Provident, sint.
        </div>
        <div className="productDisplay-right-size">
          <h1>Select size</h1>
          <div className="productDisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>Xl</div>
            <div>XXl</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          Add to Cart
        </button>
        <div className="productDisplay-right-category">
          <span>
            Category: <span>Women,T-shirt,Crop Top</span>
          </span>
        </div>
        <div className="productDisplay-right-category">
          <span>
            Tags: <span>Modern,Latest,Trend Shorts</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
