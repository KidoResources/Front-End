import React from "react";
import LeftAction from "../LeftAction";
import HomeImageButton from "../HomeImageButton";
import RightAction from "../RightAction";
import "./NavBar6.css";

class NavBar6 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`nav-bar-5 ${className || ""}`}>
        <LeftAction />
        <HomeImageButton />
        <RightAction />
      </div>
    );
  }
}

export default NavBar6;
