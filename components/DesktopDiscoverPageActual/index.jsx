import React from "react";
import NavBar3 from "../NavBar3";
import DiscoverButton32 from "../DiscoverButton32";
import DiscoverButton42 from "../DiscoverButton42";
import DiscoverButton52 from "../DiscoverButton52";
import DiscoverButton62 from "../DiscoverButton62";
import DiscoverButton72 from "../DiscoverButton72";
import Card from "../Card";
import CardVariant4 from "../CardVariant4";
import Card3 from "../Card3";
import "./DesktopDiscoverPageActual.css";

class DesktopDiscoverPageActual extends React.Component {
  render() {
    const { card1Props, cardVariant41Props, card31Props, card2Props, cardVariant42Props, card32Props } = this.props;

    return (
      <div className="desktop-discover-page-actual screen">
        <NavBar3 />
        <div className="action-buttons">
          <DiscoverButton32 />
          <DiscoverButton42 />
          <DiscoverButton52 />
          <DiscoverButton62 />
          <DiscoverButton72 />
        </div>
        <div className="list-of-cards">
          <div className="cards">
            <Card
              dentonCityCountyDaySchool={card1Props.dentonCityCountyDaySchool}
              prototype={card1Props.prototype}
              rectangle4={card1Props.rectangle4}
              chevronVariant2Props={card1Props.chevronVariant2Props}
            />
            <CardVariant4
              name={cardVariant41Props.name}
              rectangle4={cardVariant41Props.rectangle4}
              chevronVariant2Props={cardVariant41Props.chevronVariant2Props}
            />
            <Card3
              dentonCityCountyDaySchool={card31Props.dentonCityCountyDaySchool}
              rectangle4={card31Props.rectangle4}
              chevronVariant2Props={card31Props.chevronVariant2Props}
            />
          </div>
          <div className="cards-1">
            <Card
              dentonCityCountyDaySchool={card2Props.dentonCityCountyDaySchool}
              prototype={card2Props.prototype}
              rectangle4={card2Props.rectangle4}
              className={card2Props.className}
              chevronVariant2Props={card2Props.chevronVariant2Props}
            />
            <CardVariant4
              name={cardVariant42Props.name}
              rectangle4={cardVariant42Props.rectangle4}
              className={cardVariant42Props.className}
              chevronVariant2Props={cardVariant42Props.chevronVariant2Props}
            />
            <Card3
              dentonCityCountyDaySchool={card32Props.dentonCityCountyDaySchool}
              rectangle4={card32Props.rectangle4}
              className={card32Props.className}
              chevronVariant2Props={card32Props.chevronVariant2Props}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DesktopDiscoverPageActual;
