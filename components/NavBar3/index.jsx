import React from "react";
import { Link } from "react-router-dom";
import "./NavBar3.css";

class NavBar3 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`nav-bar-2 ${className || ""}`}>
        <div className="left-action-7 inter-normal-black-16px">
          <Link to="/desktop-about">
            <div className="about-7 inter-normal-black-16px">About</div>
          </Link>
          <div className="community-7">Community</div>
          <div className="discover-7">Discover</div>
        </div>
        <Link to="/desktop-home">
          <div className="home-image-button-2">
            <img className="kido-logo-2" src="/img/kidologo-1@2x.png" />
            <div className="kido-resources-2 inter-normal-black-16px">KIDO Resources</div>
          </div>
        </Link>
        <div className="right-action-7">
          <Link to="/desktop-login">
            <div className="frame-24-7 border-1px-terracotta">
              <div className="sign-up-7 inter-normal-black-16px">Sign Up</div>
            </div>
          </Link>
          <Link to="/desktop-login">
            <div className="login-9 inter-normal-black-16px">Login</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBar3;
