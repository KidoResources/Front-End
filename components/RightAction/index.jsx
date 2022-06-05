import React from "react";
import "./RightAction.css";

class RightAction extends React.Component {
  render() {
    return (
      <div className="right-action inter-normal-black-16px">
        <div className="frame-24 border-1px-terracotta">
          <div className="sign-up">Sign Up</div>
        </div>
        <div className="login">Login</div>
      </div>
    );
  }
}

export default RightAction;
