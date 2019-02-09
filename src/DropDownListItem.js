// import React from "react";

// function DropDownListItem(props) {
//   return (
//     <li className="drop-down-list-item cursor-pointer">{props.data.title}</li>
//   );
// }

// export default DropDownListItem;

import React, { Component } from "react";

class DropDownListItem extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   selected: []
  //   // };
  // }

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
