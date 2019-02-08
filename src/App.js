import React, { Component } from "react";
import "./App.css";
import DropDownListWrapper from "./DropDownListWrapper";
import DropDownTextWrapper from "./DropDownTextWrapper";

class App extends Component {
  render() {
    return (
      <div className="App">
        <DropDownListWrapper text={"Options"} />
        <DropDownTextWrapper text={"Text"} />
      </div>
    );
  }
}

export default App;
