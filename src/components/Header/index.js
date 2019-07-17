import React from "react";
import "./index.css";

class Header extends React.Component {
  render() {
    return (
      <nav className="Nav">
        <div className="Nav-menus">
          <div className="Nav-brand">
            <a className="Nav-brand-logo">Instagram</a>
            <a className="Nav-user-logo">user</a>
          </div>
        </div>
      </nav>
    );
  }
}
export default Header;
