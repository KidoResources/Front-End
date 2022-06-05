import React from "react";
import "./Card2.css";

class Card2 extends React.Component {
  render() {
    const { dentonCityCountyDaySchool, rectangle4, className } = this.props;

    return (
      <div className={`card-8 ${className || ""}`}>
        <div className="details-3">
          <div className="rectangle-5-4"></div>
          <div className="flex-col-3">
            <div className="denton-city-county-day-school-2 valign-text-middle inter-semi-bold-black-20px">
              {dentonCityCountyDaySchool}
            </div>
            <div className="footer-6">
              <div className="coming-soon-2 valign-text-middle inter-normal-black-10px">Coming Soon</div>
            </div>
          </div>
        </div>
        <img className="rectangle-4-3" src={rectangle4} />
      </div>
    );
  }
}

export default Card2;
