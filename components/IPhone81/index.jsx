import React from "react";
import DiscoverButton from "../DiscoverButton";
import DiscoverButton2 from "../DiscoverButton2";
import "./IPhone81.css";

class IPhone81 extends React.Component {
  render() {
    const {
      overlapGroup,
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
      yourStoryYourWay,
      ourWebsiteEnables,
      coolKidsStudy,
      discoverButtonProps,
      discoverButton2Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="iphone-8-1 screen">
          <div className="overlap-group-4" style={{ backgroundImage: `url(${overlapGroup})` }}>
            <div className="info-header-2">
              <div className="the-future-of-information-is-here-2">{theFutureOfInformationIsHere}</div>
              <DiscoverButton className={discoverButtonProps.className} />
            </div>
          </div>
          <div className="colums-2">
            <div className="card-7">
              <img className="power-moves-calendar-2" src={powerMovesCalendar} />
              <div className="card-text-2">
                <div className="weekly-updates-2 inter-normal-black-32px">{weeklyUpdates}</div>
                <p className="each-update-consists-2 inter-normal-black-16px">{eachUpdateConsists1}</p>
              </div>
            </div>
            <div className="card-6">
              <img className="ol-gardening-together-1" src={olGardeningTogether} />
              <div className="card-text-2">
                <div className="growth-and-care-2 inter-normal-black-32px">{growthAndCare}</div>
                <p className="each-update-consists-2 inter-normal-black-16px">{eachUpdateConsists2}</p>
              </div>
            </div>
            <div className="card-6">
              <img className="croods-comments-2" src={croodsComments} />
              <div className="card-text-2">
                <div className="community-12 inter-normal-black-32px">{community}</div>
                <p className="each-update-consists-2 inter-normal-black-16px">{eachUpdateConsists3}</p>
              </div>
            </div>
          </div>
          <div className="frame-27">
            <div className="discover-text-2">
              <div className="home-inro-2">
                <div className="your-story-your-way-2 inter-normal-black-32px">{yourStoryYourWay}</div>
                <p className="our-website-enables-2 inter-normal-black-16px">{ourWebsiteEnables}</p>
                <DiscoverButton2 className={discoverButton2Props.className} />
              </div>
            </div>
            <img className="cool-kids-study-1" src={coolKidsStudy} />
          </div>
        </div>
      </div>
    );
  }
}

export default IPhone81;
