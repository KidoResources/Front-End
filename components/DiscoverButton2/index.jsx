import React from "react";
import "./DiscoverButton2.css";

class DiscoverButton2 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`discover-button-14 ${className || ""}`}>
        <div className="discover-now-1 valign-text-middle inter-normal-white-16px">Discover Now</div>
      </div>
    );
  }
}

export default DiscoverButton2;
