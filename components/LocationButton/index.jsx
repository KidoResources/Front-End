import React from "react";
import Component1 from "../Component1";
import "./LocationButton.css";

class LocationButton extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`location-button ${className || ""}`}>
        <Component1 />
      </div>
    );
  }
}

export default LocationButton;
