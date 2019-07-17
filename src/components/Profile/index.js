import React from "react";
import "./index.css";
import { Icon } from "antd";

class Profile extends React.Component {
  render() {
    return (
      <div className="Header">
        <button className="button">
          <Icon type="plus" />
          <div className="ant-upload-text">Upload</div>
        </button>
        <div>
          <h1>
            <strong>Maica Zapanta</strong>
          </h1>
          <ul>
            <li>posts</li>
            <li>followers</li>
            <li>following</li>
          </ul>
        </div>
        <div />
      </div>
    );
  }
}
export default Profile;
