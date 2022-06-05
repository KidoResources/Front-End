import React from "react";
import "./LeftNav.css";

class LeftNav extends React.Component {
  render() {
    return (
      <div className="left-nav">
        <div className="nav-links">
          <div className="kido-resources-4 valign-text-middle inter-normal-black-32px">KIDO Resources</div>
          <div className="nav-links-item valign-text-middle inter-normal-black-16px">About us</div>
          <div className="nav-links-item valign-text-middle inter-normal-black-16px">Blog</div>
          <div className="place valign-text-middle inter-normal-black-16px">Contact</div>
        </div>
        <p className="kido-resources-copywrite-2022 valign-text-middle inter-normal-gray-16px">
          Kido Resources Copywrite @ 2022
        </p>
      </div>
    );
  }
}

export default LeftNav;
