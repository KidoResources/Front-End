import React from "react";
import Card2 from "../Card2";
import "./Cards.css";

class Cards extends React.Component {
  render() {
    const { className, card21Props, card22Props, card23Props } = this.props;

    return (
      <div className={`cards-2 ${className || ""}`}>
        <Card2
          dentonCityCountyDaySchool={card21Props.dentonCityCountyDaySchool}
          rectangle4={card21Props.rectangle4}
          className={card21Props.className}
        />
        <Card2
          dentonCityCountyDaySchool={card22Props.dentonCityCountyDaySchool}
          rectangle4={card22Props.rectangle4}
          className={card22Props.className}
        />
        <Card2
          dentonCityCountyDaySchool={card23Props.dentonCityCountyDaySchool}
          rectangle4={card23Props.rectangle4}
          className={card23Props.className}
        />
      </div>
    );
  }
}

export default Cards;
