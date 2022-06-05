import React from "react";
import { Link } from "react-router-dom";
import Frame18 from "../Frame18";
import "./DesktopCommunity.css";

class DesktopCommunity extends React.Component {
  render() {
    const { goHome } = this.props;

    return (
      <div className="desktop-community screen">
        <div className="frame-19">
          <Frame18 />
          <Link to="/desktop-home">
            <div className="frame-15">
              <div className="go-home inter-normal-white-24px">{goHome}</div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default DesktopCommunity;
