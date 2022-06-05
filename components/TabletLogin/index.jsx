import React from "react";
import NavBar6 from "../NavBar6";
import LoginInfoVariant22 from "../LoginInfoVariant22";
import "./TabletLogin.css";

class TabletLogin extends React.Component {
  render() {
    const { loginInfoVariant22Props, loginInfoVariant22Props2 } = this.props;

    return (
      <div className="tablet-login screen">
        <NavBar6 className={loginInfoVariant22Props.className} />
        <LoginInfoVariant22
          medium_Ccexpress3={loginInfoVariant22Props2.medium_Ccexpress3}
          username={loginInfoVariant22Props2.username}
          enterUsername={loginInfoVariant22Props2.enterUsername}
          password={loginInfoVariant22Props2.password}
          enterPassword={loginInfoVariant22Props2.enterPassword}
          login={loginInfoVariant22Props2.login}
        />
      </div>
    );
  }
}

export default TabletLogin;
