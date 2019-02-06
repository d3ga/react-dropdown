import React, { Component } from "react";
import "./App.css";
import Data from "./Data.json";
import DropDown from "./DropDown";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data
    };
  }

  render() {
    return (
      <div className="App">
        <DropDown data={this.state.data} />
      </div>
    );
  }
}

export default App;
