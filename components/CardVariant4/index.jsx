import React from "react";
import ChevronVariant2 from "../ChevronVariant2";
import "./CardVariant4.css";

class CardVariant4 extends React.Component {
  render() {
    const { name, rectangle4, className, chevronVariant2Props } = this.props;

    return (
      <div className={`card-variant4-1 ${className || ""}`}>
        <div className="details-1">
          <div className="rectangle-5-1"></div>
          <div className="flex-col-1">
            <div className="name-1 valign-text-middle inter-semi-bold-black-20px">{name}</div>
            <div className="footer-1">
              <div className="coming-soon valign-text-middle inter-normal-black-10px">Coming Soon</div>
            </div>
          </div>
          <ChevronVariant2 className={chevronVariant2Props.className} />
        </div>
        <img className="rectangle-4-1" src={rectangle4} />
      </div>
    );
  }
}

export default CardVariant4;
