import React from "react";
import "./LoginInfoVariant22.css";

class LoginInfoVariant22 extends React.Component {
  render() {
    const { medium_Ccexpress3, username, enterUsername, password, enterPassword, login } = this.props;

    return (
      <div className="login-info-variant2-1">
        <img className="medium_ccexpress-3-1" src={medium_Ccexpress3} />
        <div className="login-12">
          <div className="login-user-1">
            <div className="username-1 inter-normal-black-24px">{username}</div>
            <div className="user-entry-1">
              <div className="enter-username-1 inter-normal-gravel-24px">{enterUsername}</div>
            </div>
          </div>
          <div className="login-password-1">
            <div className="password-1 inter-normal-black-24px">{password}</div>
            <div className="password-entry-1">
              <div className="enter-password-1 inter-normal-gravel-24px">{enterPassword}</div>
            </div>
          </div>
          <div className="login-button-1">
            <div className="login-13 inter-normal-white-24px">{login}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginInfoVariant22;
