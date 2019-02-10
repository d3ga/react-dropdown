import React, { Component } from "react";

class DropDownListItem extends Component {
  render() {
    let option = this.props.data.title;

    return (
      <li
        className="drop-down-list-item cursor-pointer"
        onClick={element => this.props.selectedOption(element, option)}
      >
        {this.props.data.title}
      </li>
    );
  }
}

export default DropDownListItem;
