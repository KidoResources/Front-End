import React from "react";
import DiscoverButton2 from "../DiscoverButton2";
import "./DiscoverText.css";

class DiscoverText extends React.Component {
  render() {
    return (
      <div className="discover-text-1">
        <div className="home-inro-1">
          <div className="your-story-your-way-1 inter-normal-black-32px">Your Story, Your Way</div>
          <p className="our-website-enables-1 inter-normal-black-16px">
            Our Website, enables the abblity to accesss and discover companies and resources. Our product is free, fun
            and easy to use.
          </p>
          <DiscoverButton2 />
        </div>
      </div>
    );
  }
}

export default DiscoverText;
