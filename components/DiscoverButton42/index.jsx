import React from "react";
import "./DiscoverButton42.css";

class DiscoverButton42 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`discover-button-2 ${className || ""}`}>
        <div className="education valign-text-middle inter-normal-white-16px">Education</div>
      </div>
    );
  }
}

export default DiscoverButton42;
