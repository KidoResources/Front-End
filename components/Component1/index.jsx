import React from "react";
import "./Component1.css";

class Component1 extends React.Component {
  render() {
    return (
      <div className="component-1">
        <div className="overlap-group">
          <img className="polygon-1" src="/img/polygon-1@2x.png" />
          <div className="ellipse-1"></div>
          <div className="ellipse-2"></div>
        </div>
      </div>
    );
  }
}

export default Component1;
