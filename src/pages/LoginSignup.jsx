import React from "react";
import "../css/loginsignup.css";
const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="your name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="password" />
          <button>Continue</button>
          <p className="loginsignup-login">
            Already have an account?
            <span>Login here</span>
          </p>
          <div className="loginsignup-agree">
            <input type="checkbox" name="" id="" />
            <p>By continuing, i agree to the term of use & privacy policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
