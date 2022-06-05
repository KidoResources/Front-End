import React from "react";
import NavBar6 from "../NavBar6";
import DiscoverButton32 from "../DiscoverButton32";
import DiscoverButton42 from "../DiscoverButton42";
import DiscoverButton52 from "../DiscoverButton52";
import DiscoverButton62 from "../DiscoverButton62";
import DiscoverButton72 from "../DiscoverButton72";
import Cards from "../Cards";
import "./TabletDiscoverPageActual.css";

class TabletDiscoverPageActual extends React.Component {
  render() {
    const {
      navBarProps,
      discoverButton4Props,
      discoverButton5Props,
      discoverButton6Props,
      discoverButton7Props,
      cards1Props,
      cards2Props,
    } = this.props;

    return (
      <div className="tablet-discover-page-actual screen">
        <NavBar6 className={navBarProps.className} />
        <div className="action-buttons-1">
          <DiscoverButton32 />
          <DiscoverButton42 className={discoverButton4Props.className} />
          <DiscoverButton52 className={discoverButton5Props.className} />
          <DiscoverButton62 className={discoverButton6Props.className} />
          <DiscoverButton72 className={discoverButton7Props.className} />
        </div>
        <div className="list-of-cards-1">
          <Cards
            card21Props={cards1Props.card21Props}
            card22Props={cards1Props.card22Props}
            card23Props={cards1Props.card23Props}
          />
          <Cards
            className={cards2Props.className}
            card21Props={cards2Props.card21Props}
            card22Props={cards2Props.card22Props}
            card23Props={cards2Props.card23Props}
          />
        </div>
      </div>
    );
  }
}

export default TabletDiscoverPageActual;
