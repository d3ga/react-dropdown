import React, { Component } from "react";
import "./App.css";
import DropDownListWrapper from "./DropDownListWrapper";
import DropDownTextWrapper from "./DropDownTextWrapper";

// import DropDownList from "./DropDownList";
import Data from "./Data.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data,
      selectedOption: []
    };
  }

  selectedOption(e, option) {
    let selectedOption = this.state.selectedOption;
    console.log(selectedOption.length);

    this.setState(state => {
      if (!selectedOption.length) {
        state.selectedOption.push(option);
      } else if (selectedOption.length === 1) {
        state.selectedOption.pop();
        state.selectedOption.push(option);
      }
      return state;
    });
  }

  render() {
    return (
      <div className="App">
        <DropDownListWrapper
          text={"Options"}
          data={this.state.data}
          selectedOption={this.selectedOption.bind(this)}
        />
        <DropDownTextWrapper text={"Text"} />
      </div>
    );
  }
}

export default App;
