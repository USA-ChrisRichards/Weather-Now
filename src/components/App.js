import React, { Component } from "react";
import MainContainer from "./MainContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="seperator">
          <div className="app">
            <div className="image-container">
              <div className="text">Weather Now</div>
            </div>
            <MainContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
