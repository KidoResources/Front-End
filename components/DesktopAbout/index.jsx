import React from "react";
import NavBar2 from "../NavBar2";
import "./DesktopAbout.css";

class DesktopAbout extends React.Component {
  render() {
    const {
      whyThisMatters,
      spanText,
      title,
      unsplash5Aguycw_Pjw1,
      christwideOscar,
      heyMyNameIsChri,
      name,
      welcomeToKidoReso,
      unsplash5Aguycw_Pjw2,
      navBar2Props,
    } = this.props;

    return (
      <div className="desktop-about screen">
        <NavBar2 kidologo={navBar2Props.kidologo} kidoResources={navBar2Props.kidoResources} />
        <div className="matters">
          <div className="why-this-matters inter-bold-black-40px">{whyThisMatters}</div>
          <div className="ask-yourself-this-h roboto-normal-white-20px">
            <span className="roboto-normal-black-20px">{spanText}</span>
          </div>
        </div>
        <div className="title-frame">
          <h1 className="title inter-bold-black-48px">{title}</h1>
        </div>
        <div className="christ-bio">
          <img className="unsplash5a-g-uy-cw_p-jw" src={unsplash5Aguycw_Pjw1} />
          <div className="frame-10">
            <div className="christwide-oscar inter-normal-black-40px">{christwideOscar}</div>
            <div className="hey-my-name-is-chri inter-normal-black-20px">{heyMyNameIsChri}</div>
          </div>
        </div>
        <div className="nate-bio">
          <div className="frame-10-1">
            <div className="name inter-normal-black-40px">{name}</div>
            <div className="welcome-to-kido-reso inter-normal-black-20px">{welcomeToKidoReso}</div>
          </div>
          <img className="unsplash5a-g-uy-cw_p-jw-1" src={unsplash5Aguycw_Pjw2} />
        </div>
      </div>
    );
  }
}

export default DesktopAbout;
