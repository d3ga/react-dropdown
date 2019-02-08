import React from "react";

function DropDownListItem(props) {
  return (
    <li className="drop-down-list-item cursor-pointer">{props.data.title}</li>
  );
}

export default DropDownListItem;
