import React from "react";

function DropDownText(props) {
  return (
    <div className="drop-down-background">
      <div className="close-drop-down-icon-wrapper">
        <i
          className="fas fa-times cursor-pointer"
          onClick={props.toggleDropDown}
        />
      </div>
      <div className="drop-down-text">
        I often compare open source to science. To where science took this whole
        notion of developing ideas in the open and improving on other peoples'
        ideas and making it into what science is today and the incredible
        advances that we have had. And I compare that to witchcraft and alchemy,
        where openness was something you didn't do. <br />
        <i>Linus Torvalds</i>
      </div>
    </div>
  );
}

export default DropDownText;
