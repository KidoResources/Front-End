import React from "react";
import "./AboutUs.css";

class AboutUs extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`about-us-1 ${className || ""}`}>
        <div className="about-9 valign-text-middle inter-medium-black-48px">About</div>
      </div>
    );
  }
}

export default AboutUs;
