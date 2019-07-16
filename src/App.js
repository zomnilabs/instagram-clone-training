import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Cards from "./components/Cards";
//import Container from "./components/Container";
class App extends Component {
  render() {
    return (
      <div>
        <Header className="Nav" />
        {/* <div>
          <Container />
        </div> */}
        <div>
          <Cards />
        </div>
      </div>
    );
  }
}
export default App;
