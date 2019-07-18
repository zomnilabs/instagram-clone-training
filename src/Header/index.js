import React from "react";
import "./header.css";

class Header extends React.Component {
  render() {
    return (
      <nav className="Nav">
        <div className="Nav-menus">
          <div className="Nav-brand">
            <a className="Nav-brand-logo" href="/">
              Instagram
            </a>
            <a className="Nav-user-logo" href="/">
              user
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
export default Header;
