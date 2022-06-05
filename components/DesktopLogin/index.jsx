import React from "react";
import NavBar from "../NavBar";
import LoginInfoVariant2 from "../LoginInfoVariant2";
import "./DesktopLogin.css";

class DesktopLogin extends React.Component {
  render() {
    const { navBarProps, loginInfoVariant2Props } = this.props;

    return (
      <form className="desktop-login screen" name="form1" action="form1" method="post">
        <NavBar
          about={navBarProps.about}
          community={navBarProps.community}
          discover={navBarProps.discover}
          kidologo={navBarProps.kidologo}
          kidoResources={navBarProps.kidoResources}
        />
        <LoginInfoVariant2 {...loginInfoVariant2Props} />
      </form>
    );
  }
}

export default DesktopLogin;
