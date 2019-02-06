import React, { Component } from "react";
import "./App.css";
import Data from "./Data.json";
import DropDown from "./DropDown";
import DropDownListItem from "./DropDownListItem";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data,
      showDropDown: false
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
      <div className="App">
        <DropDown />
        <div className="dropdown-container">
          <div
            className="dropdown-header cursor-pointer"
            onClick={this.toggleDropDown.bind(this)}
          >
            {this.state.showDropDown ? (
              <i className="dropdown-header-icon fas fa-angle-down" />
            ) : (
              <i className="dropdown-header-icon fas fa-angle-up" />
            )}
            <div className="dropdown-header-title">Menu</div>
          </div>

          {this.state.showDropDown && (
            <ul className="dropdown-list">
              {Object.keys(this.state.data).map(id => {
                return <DropDownListItem key={id} data={this.state.data[id]} />;
              })}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default App;
