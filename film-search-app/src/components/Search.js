import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Film Name" id="title" />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

export default Search;
