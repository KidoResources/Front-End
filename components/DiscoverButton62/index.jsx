import React from "react";
import "./DiscoverButton62.css";

class DiscoverButton62 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`discover-button-6 ${className || ""}`}>
        <div className="nutrition valign-text-middle inter-normal-white-16px">Nutrition</div>
      </div>
    );
  }
}

export default DiscoverButton62;
