import React, { Component } from "react";
import "./App.css";
import Header from "./Header/index";
import Home from "./Home/index";
import User from "./User/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="All">
          <Header />
          <section className="App-main">
            <Home
              nickname="IamJemae"
              avatar="https://i.ytimg.com/vi/7xWxpunlZ2w/maxresdefault.jpg"
              caption="Love The Nature!"
              image="https://www.postmyhub.com/wp-content/uploads/2018/07/adventure.jpg"
            />

            <Home
              nickname="Manuel"
              avatar="https://i.pinimg.com/originals/07/dc/ae/07dcae38219645387fee0cb543e37e5a.jpg"
              caption="The best place I've never been"
              image="https://www.hotel-laurin.com/CustomerData/394/Files/Images/activ-urlaub/wanderurlaub/wanderung-drei-zinnen.jpg"
            />

            <Home
              nickname="itsme_shane"
              avatar="https://www.janeallanphotography.com/wp-content/uploads/2018/07/model-portfolio-photo-shoot.jpg"
              caption="Take the good Memories!"
              image="https://s18798.pcdn.co/dispatch/wp-content/uploads/sites/8960/2019/03/iStock-610259354.jpg"
            />

            {/* more posts */}
          </section>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/user" component={User} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
