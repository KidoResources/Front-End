import React from "react";
import "./ChevronVariant2.css";

class ChevronVariant2 extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={`chevron-variant2-5 ${className || ""}`}>
        <div className="line-container">
          <img className="line-1" src="/img/line-1@2x.png" />
          <img className="line-2" src="/img/line-2@2x.png" />
        </div>
      </div>
    );
  }
}

export default ChevronVariant2;
