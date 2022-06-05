import React from "react";
import NavBar6 from "../NavBar6";
import "./TabletAbout.css";

class TabletAbout extends React.Component {
  render() {
    const {
      whyThisMatters,
      spanText,
      team,
      unsplash5Aguycw_Pjw1,
      christwideOscar,
      heyMyNameIsChri,
      name,
      welcomeToKidoReso,
      unsplash5Aguycw_Pjw2,
      navBarProps,
    } = this.props;

    return (
      <div className="tablet-about screen">
        <NavBar6 className={navBarProps.className} />
        <div className="matters-1">
          <div className="why-this-matters-1 inter-bold-black-40px">{whyThisMatters}</div>
          <div className="ask-yourself-this-h-1 roboto-normal-white-20px">
            <span className="roboto-normal-black-20px">{spanText}</span>
          </div>
        </div>
        <div className="title-frame-1">
          <div className="team inter-bold-black-48px">{team}</div>
        </div>
        <div className="christ-bio-1">
          <img className="unsplash5a-g-uy-cw_p-jw-2" src={unsplash5Aguycw_Pjw1} />
          <div className="frame-10-2">
            <div className="christwide-oscar-1 inter-normal-black-40px">{christwideOscar}</div>
            <div className="hey-my-name-is-chri-1 inter-normal-black-20px">{heyMyNameIsChri}</div>
          </div>
        </div>
        <div className="nate-bio-1">
          <div className="frame-10-3">
            <div className="name-2 inter-normal-black-40px">{name}</div>
            <div className="welcome-to-kido-reso-1 inter-normal-black-20px">{welcomeToKidoReso}</div>
          </div>
          <img className="unsplash5a-g-uy-cw_p-jw-3" src={unsplash5Aguycw_Pjw2} />
        </div>
      </div>
    );
  }
}

export default TabletAbout;
