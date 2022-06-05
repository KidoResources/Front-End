import React from "react";
import { Link } from "react-router-dom";
import ChevronVariant2 from "../ChevronVariant2";
import "./Card.css";

class Card extends React.Component {
  render() {
    const { dentonCityCountyDaySchool, prototype, rectangle4, className, chevronVariant2Props } = this.props;

    return (
      <Link to="/desktop-dccds">
        <div className={`card ${className || ""}`}>
          <div className="details">
            <div className="rectangle-5"></div>
            <div className="flex-col">
              <div className="denton-city-county-day-school valign-text-middle inter-semi-bold-black-20px">
                {dentonCityCountyDaySchool}
              </div>
              <div className="footer">
                <div className="prototype valign-text-middle inter-normal-black-10px">{prototype}</div>
              </div>
            </div>
            <ChevronVariant2 className={chevronVariant2Props.className} />
          </div>
          <img className="rectangle-4" src={rectangle4} />
        </div>
      </Link>
    );
  }
}

export default Card;
