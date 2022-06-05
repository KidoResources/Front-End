import React from "react";
import { Link } from "react-router-dom";
import HomeImageButton from "../HomeImageButton";
import "./NavBar4.css";

class NavBar4 extends React.Component {
  render() {
    const { about, community, discover, signUp, login } = this.props;

    return (
      <div className="nav-bar-4">
        <div className="left-action-9">
          <Link to="/desktop-about">
            <div className="about-11 inter-normal-black-16px">{about}</div>
          </Link>
          <Link to="/desktop-community">
            <div className="community-10 inter-normal-black-16px">{community}</div>
          </Link>
          <Link to="/desktop-discover-page-actual">
            <div className="discover-9 inter-normal-black-16px">{discover}</div>
          </Link>
        </div>
        <HomeImageButton />
        <div className="right-action-9">
          <Link to="/desktop-login">
            <div className="frame-24-9 border-1px-terracotta">
              <div className="sign-up-9 inter-normal-black-16px">{signUp}</div>
            </div>
          </Link>
          <Link to="/desktop-login">
            <div className="login-11 inter-normal-black-16px">{login}</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBar4;
