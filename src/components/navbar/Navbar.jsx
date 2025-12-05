import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.webp";
import cart_icon from "../../assets/cart_icon.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} height={50} alt="shopify-logo" />
        <p>Shopify</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("home");
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "  #626262" }}>
            Home
          </Link>
          {menu === "home" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link
            to="mens"
            style={{ textDecoration: "none", color: "  #626262" }}
          >
            Men
          </Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link
            to="/womens"
            style={{ textDecoration: "none", color: "  #626262" }}
          >
            {" "}
            Women
          </Link>
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Kids");
          }}
        >
          <Link
            to="kids"
            style={{ textDecoration: "none", color: "  #626262" }}
          >
            Kids
          </Link>
          {menu === "Kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link
          to="/login"
          style={{ textDecoration: "none", color: "  #626262" }}
        >
          <button>Login</button>
        </Link>
        <Link to="/cart" style={{ textDecoration: "none", color: "  #626262" }}>
          <img src={cart_icon} alt="cart_icon" height={40} />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
