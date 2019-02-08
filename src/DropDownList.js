import React, { Fragment } from "react";
import DropDownListItem from "./DropDownListItem";

function DropDownList(props) {
  return (
    <Fragment>
      <ul className="dropdown-list">
        {Object.keys(props.data).map(id => {
          return <DropDownListItem key={id} data={props.data[id]} />;
        })}
      </ul>
    </Fragment>
  );
}

export default DropDownList;
