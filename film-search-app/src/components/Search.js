import React, { Component } from "react";

//onClick handler

//fx to join works with + if necessary

class Search extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Film Name" name="title" />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

export default Search;
