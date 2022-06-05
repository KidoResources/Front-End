import React from "react";
import { Link } from "react-router-dom";
import LeftAction from "../LeftAction";
import RightAction from "../RightAction";
import "./NavBar2.css";

class NavBar2 extends React.Component {
  render() {
    const { kidologo, kidoResources } = this.props;

    return (
      <div className="nav-bar-1">
        <LeftAction />
        <Link to="/desktop-home">
          <div className="home-image-button-1">
            <img className="kido-logo-1" src={kidologo} />
            <div className="kido-resources-1 inter-normal-black-16px">{kidoResources}</div>
          </div>
        </Link>
        <RightAction />
      </div>
    );
  }
}

export default NavBar2;
