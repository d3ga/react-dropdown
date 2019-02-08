import React, { Fragment } from "react";
import DropDownListItem from "./DropDownListItem";

function DropDownList(props) {
  return (
    <Fragment>
      <div className="drop-down-background">
        <ul className="drop-down-list">
          <div className="close-drop-down-icon-wrapper">
            <i
              class="fas fa-times cursor-pointer"
              onClick={props.toggleDropDown}
            />
          </div>
          {Object.keys(props.data).map(id => {
            return <DropDownListItem key={id} data={props.data[id]} />;
          })}
        </ul>
      </div>
    </Fragment>
  );
}

export default DropDownList;
