import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Profile from "./components/Profile";

//import Container from "./components/Container";
class App extends Component {
  render() {
    return (
      <div className="All">
        <Header className="Nav" />
        <div>
          <Profile />
        </div>

        <div>
          <Cards />
        </div>
      </div>
    );
  }
}
export default App;
