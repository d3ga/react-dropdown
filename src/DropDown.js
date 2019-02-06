import React from "react";

function DropDownListItem(props) {
  return (
    <li className="dropdown-list-item cursor-pointer">{props.data.title}</li>
  );
}

export default DropDownListItem;
