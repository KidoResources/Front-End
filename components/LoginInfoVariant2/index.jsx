import React from "react";
import "./LoginInfoVariant2.css";

class LoginInfoVariant2 extends React.Component {
  render() {
    const {
      medium_Ccexpress3,
      username,
      inputType1,
      inputPlaceholder1,
      password,
      inputType2,
      inputPlaceholder2,
      login,
    } = this.props;

    return (
      <div className="login-info-variant2">
        <img className="medium_ccexpress-3" src={medium_Ccexpress3} />
        <div className="login-7">
          <div className="login-user">
            <div className="username inter-normal-black-24px">{username}</div>
            <div className="user-entry">
              <input
                className="enter-username inter-normal-gravel-24px"
                name="enterusername"
                placeholder={inputPlaceholder1}
                type={inputType1}
                required
              />
            </div>
          </div>
          <div className="login-password">
            <div className="password inter-normal-black-24px">{password}</div>
            <div className="password-entry">
              <input
                className="enter-password inter-normal-gravel-24px"
                name="enterpassword"
                placeholder={inputPlaceholder2}
                type={inputType2}
                required
              />
            </div>
          </div>
          <div className="login-button animate-enter">
            <a href="javascript:SubmitForm('form1')">
              <div className="login-8 inter-normal-white-24px">{login}</div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginInfoVariant2;
