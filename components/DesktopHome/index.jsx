import React from "react";
import { Link } from "react-router-dom";
import NavBar4 from "../NavBar4";
import NewsLetter from "../NewsLetter";
import "./DesktopHome.css";

class DesktopHome extends React.Component {
  render() {
    const {
      overlapGroup,
      theFutureOfInformationIsHere,
      discoverResources,
      powerMovesCalendar,
      weeklyUpdates,
      eachUpdateConsists1,
      alluraTeamwork,
      growthAndCare,
      eachUpdateConsists2,
      croodsComments,
      community,
      eachUpdateConsists3,
      yourStoryYourWay,
      ourWebsiteEnables,
      discoverNow,
      happyBunchDesk,
      kidoResources,
      aboutUs,
      blog,
      place,
      kidoResourcesCopywrite2022,
      navBar4Props,
      newsLetterProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="desktop-home screen">
          <NavBar4
            about={navBar4Props.about}
            community={navBar4Props.community}
            discover={navBar4Props.discover}
            signUp={navBar4Props.signUp}
            login={navBar4Props.login}
          />
          <div className="overlap-group-2" style={{ backgroundImage: `url(${overlapGroup})` }}>
            <div className="info-header">
              <div className="the-future-of-information-is-here inter-bold-white-48px">
                {theFutureOfInformationIsHere}
              </div>
              <Link to="/desktop-discover-page-actual">
                <div className="discover-button-10">
                  <div className="discover-resources inter-bold-white-32px">{discoverResources}</div>
                </div>
              </Link>
            </div>
          </div>
          <div className="colums">
            <div className="card-3">
              <img className="power-moves-calendar" src={powerMovesCalendar} />
              <div className="card-text">
                <div className="weekly-updates inter-normal-black-32px">{weeklyUpdates}</div>
                <p className="each-update-consists inter-normal-black-16px">{eachUpdateConsists1}</p>
              </div>
            </div>
            <div className="card-2">
              <img className="allura-teamwork" src={alluraTeamwork} />
              <div className="card-text">
                <div className="growth-and-care inter-normal-black-32px">{growthAndCare}</div>
                <p className="each-update-consists inter-normal-black-16px">{eachUpdateConsists2}</p>
              </div>
            </div>
            <div className="card-2">
              <img className="croods-comments" src={croodsComments} />
              <div className="card-text">
                <div className="community-9 inter-normal-black-32px">{community}</div>
                <p className="each-update-consists inter-normal-black-16px">{eachUpdateConsists3}</p>
              </div>
            </div>
          </div>
          <div className="frame-26">
            <div className="discover-text">
              <div className="home-inro">
                <div className="your-story-your-way inter-normal-black-32px">{yourStoryYourWay}</div>
                <p className="our-website-enables inter-normal-black-16px">{ourWebsiteEnables}</p>
                <Link to="/desktop-discover-page-actual">
                  <div className="discover-button-11">
                    <div className="discover-now valign-text-middle inter-normal-white-16px">{discoverNow}</div>
                  </div>
                </Link>
              </div>
            </div>
            <img className="happy-bunch-desk" src={happyBunchDesk} />
          </div>
          <div className="footer-4">
            <div className="left-nav-2">
              <div className="nav-links-2">
                <div className="kido-resources-6 valign-text-middle inter-normal-black-32px">{kidoResources}</div>
                <Link to="/desktop-about">
                  <div className="about-us-3 valign-text-middle inter-normal-black-16px">{aboutUs}</div>
                </Link>
                <div className="blog valign-text-middle inter-normal-black-16px">{blog}</div>
                <div className="place-2 valign-text-middle inter-normal-black-16px">{place}</div>
              </div>
              <p className="kido-resources-copywrite-2022-2 valign-text-middle inter-normal-gray-16px">
                {kidoResourcesCopywrite2022}
              </p>
            </div>
            <NewsLetter className={newsLetterProps.className} />
          </div>
        </div>
      </div>
    );
  }
}

export default DesktopHome;
