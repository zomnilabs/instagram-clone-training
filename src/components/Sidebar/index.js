import React from "react";
import "./Sidebar.css";
class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <div className="profile">
          <strong>Loisa_Andalio</strong>
          <br /> @iamloisa
        </div>

        <img
          className="round-pic"
          src="https://pbs.twimg.com/media/DhQ5KawU0AIHDgx.jpg"
        />

        <div className="story">
          <div className="profile1">@iamloisa</div>
          <img
            className="round-pic1"
            src="https://pbs.twimg.com/media/DhQ5KawU0AIHDgx.jpg"
          />
        </div>
      </div>
    );
  }
}
export default Sidebar;
