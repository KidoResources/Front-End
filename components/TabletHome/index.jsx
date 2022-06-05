import React from "react";
import DiscoverButton from "../DiscoverButton";
import NavBar6 from "../NavBar6";
import DiscoverText from "../DiscoverText";
import LeftNav from "../LeftNav";
import NewsLetter from "../NewsLetter";
import "./TabletHome.css";

class TabletHome extends React.Component {
  render() {
    const {
      imageheader,
      theFutureOfInformationIsHere,
      powerMovesCalendar,
      weeklyUpdates,
      eachUpdateConsists1,
      olGardeningTogether,
      growthAndCare,
      eachUpdateConsists2,
      croodsComments,
      community,
      eachUpdateConsists3,
      coolKidsStudy,
      newsLetterProps,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="tablet-home screen">
          <div className="overlap-group-3">
            <div className="imageheader" style={{ backgroundImage: `url(${imageheader})` }}></div>
            <div className="info-header-1">
              <div className="the-future-of-information-is-here-1 inter-bold-white-48px">
                {theFutureOfInformationIsHere}
              </div>
              <DiscoverButton />
            </div>
            <NavBar6 />
          </div>
          <div className="colums-1">
            <div className="card-5">
              <img className="power-moves-calendar-1" src={powerMovesCalendar} />
              <div className="card-text-1">
                <div className="weekly-updates-1 inter-normal-black-32px">{weeklyUpdates}</div>
                <p className="each-update-consists-1 inter-normal-black-16px">{eachUpdateConsists1}</p>
              </div>
            </div>
            <div className="card-4">
              <img className="ol-gardening-together" src={olGardeningTogether} />
              <div className="card-text-1">
                <div className="growth-and-care-1 inter-normal-black-32px">{growthAndCare}</div>
                <p className="each-update-consists-1 inter-normal-black-16px">{eachUpdateConsists2}</p>
              </div>
            </div>
            <div className="card-4">
              <img className="croods-comments-1" src={croodsComments} />
              <div className="card-text-1">
                <div className="community-11 inter-normal-black-32px">{community}</div>
                <p className="each-update-consists-1 inter-normal-black-16px">{eachUpdateConsists3}</p>
              </div>
            </div>
          </div>
          <div className="frame-26-1">
            <DiscoverText />
            <img className="cool-kids-study" src={coolKidsStudy} />
          </div>
          <div className="footer-5">
            <LeftNav />
            <NewsLetter className={newsLetterProps.className} />
          </div>
        </div>
      </div>
    );
  }
}

export default TabletHome;
