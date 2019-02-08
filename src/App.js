import React, { Component } from "react";
import "./App.css";
import DropDownListWrapper from "./DropDownListWrapper";
// import DropDownTextWrapper from "./DropDownTextWrapper";

// import DropDownList from "./DropDownList";
import Data from "./Data.json";

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
        <DropDownListWrapper text={"Options"} data={this.state.data} />
      </div>
    );
  }
}

export default App;
