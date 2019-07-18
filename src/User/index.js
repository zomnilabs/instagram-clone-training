import React from "react";
import "antd/dist/antd.css";
import { Card, Col, Row, Icon } from "antd";
import "./index.css";

const { Meta } = Card;
class User extends React.Component {
  render() {
    return (
      <div className="Whole">
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
        <div className="images">
          <Row gutter={16}>
            <Col span={7}>
              <Card
                hoverable
                style={{ width: 300 }}
                cover={
                  <img
                    alt="example"
                    src="https://upload.wikimedia.org/wikipedia/commons/4/42/Shaqi_jrvej.jpg"
                  />
                }
              />
            </Col>
            <Col span={7}>
              <Card
                hoverable
                style={{ width: 300 }}
                cover={
                  <img
                    alt="example"
                    src="https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall.jpg"
                  />
                }
              />
            </Col>
            <Col span={7}>
              <Card
                hoverable
                style={{ width: 300 }}
                cover={
                  <img
                    alt="example"
                    src="https://therightsofnature.org/wp-content/uploads/2018/01/turkey-3048299_1920.jpg"
                  />
                }
              />
            </Col>
          </Row>
          <br />
          <Row gutter={16}>
            <Col span={7}>
              <Card
                hoverable
                style={{ width: 300 }}
                cover={
                  <img
                    alt="example"
                    src="https://croatia.hr/sites/default/files/styles/image_full_width/public/2017-08/02_01_slide_nature.jpg?itok=ItAHmLlp"
                  />
                }
              />
            </Col>
            <Col span={7}>
              <Card
                hoverable
                style={{ width: 300 }}
                cover={
                  <img
                    alt="example"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuYQ4RScX8_nl1YD8EG9c9-A4oRfTntSwAri0Zdzry0tGCCpbj"
                  />
                }
              />
            </Col>
            <Col span={7}>
              <Card
                hoverable
                style={{ width: 300 }}
                cover={
                  <img
                    alt="example"
                    src="http://www.jakpost.travel/imgfiles/full/64/643907/4k-ultra-hd-nature-wallpapers.jpg"
                  />
                }
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default User;
