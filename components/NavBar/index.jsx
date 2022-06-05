import React from "react";
import { Link } from "react-router-dom";
import RightAction from "../RightAction";
import "./NavBar.css";

class NavBar extends React.Component {
  render() {
    const { about, community, discover, kidologo, kidoResources } = this.props;

    return (
      <div className="nav-bar">
        <div className="left-action">
          <Link to="/desktop-about">
            <div className="about inter-normal-black-16px">{about}</div>
          </Link>
          <Link to="/desktop-community">
            <div className="community inter-normal-black-16px">{community}</div>
          </Link>
          <Link to="/desktop-discover-page-actual">
            <div className="discover inter-normal-black-16px">{discover}</div>
          </Link>
        </div>
        <Link to="/desktop-home">
          <div className="home-image-button">
            <img className="kido-logo" src={kidologo} />
            <div className="kido-resources inter-normal-black-16px">{kidoResources}</div>
          </div>
        </Link>
        <RightAction />
      </div>
    );
  }
}

export default NavBar;
