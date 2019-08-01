import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <form className="form">
          <input type="text" name="text" placeholder="Search users..." />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    );
  }
}

export default Search;
