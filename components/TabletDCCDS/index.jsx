import React from "react";
import LocationButton from "../LocationButton";
import NavBar6 from "../NavBar6";
import AboutUs from "../AboutUs";
import DetailsCard from "../DetailsCard";
import DetailsCard2 from "../DetailsCard2";
import "./TabletDCCDS.css";

class TabletDCCDS extends React.Component {
  render() {
    const {
      dentonCityCountyDaySchool,
      rectangle6,
      loremIpsumDolorSi,
      whatWeOffer,
      detailsCardProps,
      detailsCardProps3,
      detailsCardProps4,
      detailsCardProps5,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="tablet-dccds screen">
          <div className="overlap-group1-1">
            <div className="text-title-1">
              <div className="denton-city-county-day-school-4 valign-text-middle inter-bold-white-48px">
                {dentonCityCountyDaySchool}
              </div>
              <LocationButton className={detailsCardProps.className} />
            </div>
            <NavBar6 />
          </div>
          <div className="about-w-pic-1">
            <img className="rectangle-6-1" src={rectangle6} />
            <div className="about-us-4">
              <AboutUs className={detailsCardProps3.className} />
              <div className="about-text-1">
                <p className="lorem-ipsum-dolor-si-3 valign-text-middle inter-normal-black-16px">{loremIpsumDolorSi}</p>
              </div>
            </div>
          </div>
          <div className="rectangle-9"></div>
          <div className="what-offer-1">
            <div className="what-we-offer-1 valign-text-middle inter-semi-bold-black-48px">{whatWeOffer}</div>
            <div className="d-cards-1">
              <DetailsCard rectangle7={detailsCardProps4.rectangle7} className={detailsCardProps4.className} />
              <DetailsCard2 className={detailsCardProps5.className} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TabletDCCDS;
