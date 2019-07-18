import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      // <nav className="Nav">
      //   <div className="Nav-menus">
      //     <div className="Nav-brand">
      //       <a className="Nav-brand-logo" href="/">
      //         Instagram
      //       </a>
      //       <a className="Nav-user-logo" href="/">
      //         user
      //       </a>
      //     </div>
      //   </div>
      // </nav>

      <nav>
        <Link to="/">
          <h3>Instagram</h3>
        </Link>
        <ul className="nav-links">
          <Link to="/user">
            <li>User</li>
          </Link>
        </ul>
      </nav>
    );
  }
}
export default Header;
