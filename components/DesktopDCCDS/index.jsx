import React from "react";
import NavBar3 from "../NavBar3";
import LocationButton from "../LocationButton";
import AboutUs from "../AboutUs";
import DetailsCard from "../DetailsCard";
import DetailsCard2 from "../DetailsCard2";
import LeftNav from "../LeftNav";
import NewsLetter from "../NewsLetter";
import "./DesktopDCCDS.css";

class DesktopDCCDS extends React.Component {
  render() {
    const {
      dentonCityCountyDaySchool,
      rectangle6,
      loremIpsumDolorSi,
      whatWeOffer,
      navBar3Props,
      detailsCardProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="desktop-dccds screen">
          <NavBar3 className={navBar3Props.className} />
          <div className="title-1">
            <div className="text-title">
              <div className="denton-city-county-day-school-1 valign-text-middle inter-bold-white-48px">
                {dentonCityCountyDaySchool}
              </div>
              <LocationButton />
            </div>
          </div>
          <div className="overlap-group1">
            <div className="about-w-pic">
              <img className="rectangle-6" src={rectangle6} />
              <div className="about-us">
                <AboutUs />
                <div className="about-text">
                  <p className="lorem-ipsum-dolor-si valign-text-middle inter-normal-black-16px">{loremIpsumDolorSi}</p>
                </div>
              </div>
            </div>
            <div className="what-offer">
              <div className="what-we-offer valign-text-middle inter-semi-bold-black-48px">{whatWeOffer}</div>
              <div className="d-cards">
                <DetailsCard rectangle7={detailsCardProps.rectangle7} />
                <DetailsCard2 />
              </div>
            </div>
            <div className="frame-28">
              <div className="rectangle-8"></div>
            </div>
          </div>
          <div className="footer-3">
            <LeftNav />
            <NewsLetter />
          </div>
        </div>
      </div>
    );
  }
}

export default DesktopDCCDS;
