import React, { Component } from "react";
import DropDownText from "./DropDownText";

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
      <div className="drop-down-wrapper">
        <div className="drop-down-header-wrapper">
          <div className="drop-down-header-title">{this.props.text}</div>
          <div
            className="icons-header-wrapper cursor-pointer"
            onClick={this.toggleDropDown.bind(this)}
          >
            {this.state.showDropDown ? (
              <i className="fas fa-angle-down" />
            ) : (
              <i className="fas fa-angle-up" />
            )}
          </div>
        </div>

        {this.state.showDropDown && (
          <DropDownText toggleDropDown={this.toggleDropDown.bind(this)} />
        )}
      </div>
    );
  }
}

export default App;
