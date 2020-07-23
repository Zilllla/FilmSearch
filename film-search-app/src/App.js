import React, { Component, useState } from "react";
import Header from "./components/Header.js";
import Search from "./components/Search.js";

import Axios from "axios";

const baseURL = "http://www.omdbapi.com/?apikey=6a79fe1d";


// //API Import
// Axios.get(`baseURL&t=${title}`).then(function(res) {
//   console.log(res);
// });

class App extends Component {
  const [state, setState] = useState({
    search: "",
    data: []
  })

  const handleInput = (event) => {
    let search = event.target.value;
    setState(prevState => {
      return { ...prevState, search: search}
    });

    console.log(state.search);
  }
  render() {
    return (
      <div>
        <Header />
        <Search handleInput={handleInput} />
      </div>
    );
  }
}

export default App;
