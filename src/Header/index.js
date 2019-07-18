import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/">
          <div className="logo">
            <img src="https://images.vexels.com/media/users/3/137201/isolated/preview/83b5f2a86fa0ec9f938664da94a9bc55-instagram-silhouette-stroke-logo-by-vexels.png" />
          </div>
        </Link>
        <ul className="nav-links">
          <Link to="/user">
            <div className="user">
              <img
                className="userlogo"
                src="https://png.pngtree.com/svg/20160308/db33b0089e.svg"
              />
            </div>
          </Link>
        </ul>
      </nav>
    );
  }
}
export default Header;
