import React from "react";
import "./DiscoverButton.css";

class DiscoverButton extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`discover-button-12 ${className || ""}`}>
        <div className="discover-resources-1 inter-bold-white-32px">Discover Resources</div>
      </div>
    );
  }
}

export default DiscoverButton;
