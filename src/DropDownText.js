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
        Lorem ipsum dolor sit amet, mutat eleifend quo ex, cu utroque salutatus
        gubergren quo. Sanctus corrumpit dissentiet mei ea, eam ea partem
        possit, nec mazim latine tacimates cu. Munere temporibus his et. Eum
        dicant probatus torquatos ad, vix nemore oporteat eleifend et. Ad eam
        facilisis scriptorem eloquentiam. Ius utroque electram hendrerit an, at
        recteque periculis pro, eu mel nemore equidem. Ne mel probo corpora
        electram, ut eum ornatus expetenda delicatissimi. Est at appetere
        atomorum, vix saperet graecis an. Pro ea mucius aliquip necessitatibus.
      </div>
    </div>
  );
}

export default DropDownText;
