import React, { Component } from "react";

class Navbar extends Component {
  state = {
    search: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSearch = (event, state) => {
    event.preventDefault();
    this.props.fetchCity(state);
  };
  render() {
    console.log(this.state.search);
    return (
      <div>
        <div className="topnav">
          <div className="search-container">
            <form
              action=""
              className="search"
              onSubmit={event =>
                this.props.handleSearch(event, this.state.search)
              }
            >
              <input
                onChange={this.handleChange}
                className="search-field"
                type="text"
                placeholder="Search.."
                name="search"
              ></input>
              <button className="search-btn" type="submit">
                search
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
