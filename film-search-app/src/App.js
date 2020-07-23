import React, { Component } from "react";
import Header from "./components/Header.js";
import Search from "./components/Search.js";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Search />
      </div>
    );
  }
}

export default App;
