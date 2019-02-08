import React, { Component, Fragment } from "react";
import DropDownList from "./DropDownList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropDown: true
    };
  }

  toggleDropDown() {
    this.setState(state => {
      state.showDropDown = !state.showDropDown;
      return state;
    });
  }

  render() {
    return (
      <div className="drop-down-header-wrapper">
        <i
          class="fas fa-times cursor-pointer"
          onClick={this.toggleDropDown.bind(this)}
        />

        <div className="drop-down-header">
          <div className="drop-down-header-title">{this.props.text}</div>
        </div>

        <div
          className="icons-header-wrapper cursor-pointer"
          onClick={this.toggleDropDown.bind(this)}
        >
          {this.state.showDropDown ? (
            <i class="fas fa-angle-down" />
          ) : (
            <i class="fas fa-angle-up" />
          )}
        </div>

        {this.state.showDropDown && <DropDownList data={this.props.data} />}
      </div>
    );
  }
}

export default App;
