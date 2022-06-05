import React from "react";
import ChevronVariant2 from "../ChevronVariant2";
import "./Card3.css";

class Card3 extends React.Component {
  render() {
    const { dentonCityCountyDaySchool, rectangle4, className, chevronVariant2Props } = this.props;

    return (
      <div className={`card-variant4-2-1 ${className || ""}`}>
        <div className="details-2">
          <div className="rectangle-5-2"></div>
          <div className="flex-col-2">
            <div className="health-services-of-north-texas valign-text-middle inter-semi-bold-black-20px">
              {dentonCityCountyDaySchool}
            </div>
            <div className="footer-2">
              <div className="coming-soon-1 valign-text-middle inter-normal-black-10px">Coming Soon</div>
            </div>
          </div>
          <ChevronVariant2 className={chevronVariant2Props.className} />
        </div>
        <img className="rectangle-4-2" src={rectangle4} />
      </div>
    );
  }
}

export default Card3;
