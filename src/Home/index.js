import React from "react";
import "./index.css";
import { Icon } from "antd";
import { Comment, Avatar, Form, Button, List, Input } from "antd";
import moment from "moment";

const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Add Comment
      </Button>
    </Form.Item>
  </div>
);

class Home extends React.Component {
  state = {
    comments: [],
    submitting: false,
    value: ""
  };

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: "",
        comments: [
          {
            author: "Han Solo",
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow()
          },
          ...this.state.comments
        ]
      });
    }, 1000);
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    const { comments, submitting, value } = this.state;
    return (
      <article>
        <div className="pic">
          <div className="profile">
            <strong>Loisa_Andalio</strong>
            <br /> @iamloisa
          </div>

          <img
            className="round-pic"
            src="https://pbs.twimg.com/media/DhQ5KawU0AIHDgx.jpg"
          />
        </div>
        <div className="story">
          <div className="profile1">@iamloisa</div>
          <img
            className="round-pic1"
            src="https://pbs.twimg.com/media/DhQ5KawU0AIHDgx.jpg"
          />
        </div>

        <div className="Post" ref="Post">
          <header>
            <div className="Post-user">
              <div className="Post-user-avatar">
                <img
                  src="https://i.ytimg.com/vi/7xWxpunlZ2w/maxresdefault.jpg"
                  alt="Chris"
                />
              </div>
              <div className="Post-user-nickname">
                <span>Chris</span>
              </div>
            </div>
          </header>
          <div className="Post-image">
            <div className="Post-image-bg">
              <img
                alt="Icon Living"
                src="https://www.postmyhub.com/wp-content/uploads/2018/07/adventure.jpg"
              />
            </div>
          </div>
          <div className="Post-caption">
            <Icon type="heart" />
            <br />
            <strong>Chris</strong> Moving the community!
            <div>
              {comments.length > 0 && <CommentList comments={comments} />}
              <Comment
                content={
                  <Editor
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    submitting={submitting}
                    value={value}
                  />
                }
              />
            </div>
          </div>
        </div>
        <div className="Post" ref="Post">
          <header>
            <div className="Post-user">
              <div className="Post-user-avatar">
                <img
                  src="https://i.pinimg.com/originals/07/dc/ae/07dcae38219645387fee0cb543e37e5a.jpg"
                  alt="Chris"
                />
              </div>
              <div className="Post-user-nickname">
                <span>Chris</span>
              </div>
            </div>
          </header>
          <div className="Post-image">
            <div className="Post-image-bg">
              <img
                alt="Icon Living"
                src="https://www.hotel-laurin.com/CustomerData/394/Files/Images/activ-urlaub/wanderurlaub/wanderung-drei-zinnen.jpg"
              />
            </div>
          </div>
          <div className="Post-caption">
            <Icon type="heart" />
            <br />
            <strong>Chris</strong> Moving the community!
            <div>
              {comments.length > 0 && <CommentList comments={comments} />}
              <Comment
                content={
                  <Editor
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    submitting={submitting}
                    value={value}
                  />
                }
              />
            </div>
          </div>
        </div>
        <div className="Post" ref="Post">
          <header>
            <div className="Post-user">
              <div className="Post-user-avatar">
                <img
                  src="https://www.janeallanphotography.com/wp-content/uploads/2018/07/model-portfolio-photo-shoot.jpg"
                  alt="Chris"
                />
              </div>
              <div className="Post-user-nickname">
                <span>Chris</span>
              </div>
            </div>
          </header>
          <div className="Post-image">
            <div className="Post-image-bg">
              <img
                alt="Icon Living"
                src="https://s18798.pcdn.co/dispatch/wp-content/uploads/sites/8960/2019/03/iStock-610259354.jpg"
              />
            </div>
          </div>
          <div className="Post-caption">
            <Icon type="heart" />
            <br />
            <strong>Chris</strong> Moving the community!
            <div>
              {comments.length > 0 && <CommentList comments={comments} />}
              <Comment
                content={
                  <Editor
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    submitting={submitting}
                    value={value}
                  />
                }
              />
            </div>
          </div>
        </div>
      </article>
    );
  }
}
export default Home;
