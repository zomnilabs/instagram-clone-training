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
