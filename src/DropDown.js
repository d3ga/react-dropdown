import React, { Component, Fragment } from "react";
import DropDownListItem from "./DropDownListItem";

class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      <Fragment>
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
            {Object.keys(this.props.data).map(id => {
              return <DropDownListItem key={id} data={this.props.data[id]} />;
            })}
          </ul>
        )}
      </Fragment>
    );
  }
}

export default DropDown;
