import React, { useState } from "react";
import { Link } from "react-router-dom";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { NavbarElem, NavbarElemImg } from "src/styled/subcomponents/navbar";

interface NavbarElemComponentInterface {
  isDropDown: boolean, 
  dropDownElems: {
    to: string,
    content: any,
    callback: () => void,
  }[], isLink: boolean, to: string, isImage: boolean, content: any, callback: () => void 
}

const NavbarElemComponent:React.FC<NavbarElemComponentInterface> = ({
  isDropDown, 
  dropDownElems,
  isLink, to, isImage, content, callback, 
}: NavbarElemComponentInterface) => {
  const [isDropOpened, toggleIsDropOpened] = useState<boolean>(false);
  return content === "noRender" ? null : isLink ? (
    <Link to={to === "none" ? "" : to}>
      <NavbarElem onClick={callback !== undefined ? callback : () => {}}>
        {isImage === true ? <NavbarElemImg src={content} /> : content}
        {isDropDown === true ? <ArrowDropDownIcon style={{ color: "inherit", fontSize: "inherit" }} /> : null}
      </NavbarElem>
    </Link>
  ) : (
    <NavbarElem onClick={callback !== undefined ? callback : () => {}}>
      {isImage === true ? <NavbarElemImg src={content} /> : content}
      {isDropDown === true ? <ArrowDropDownIcon style={{ color: "inherit", fontSize: "inherit" }} /> : null}
    </NavbarElem>
  );
};

export default NavbarElemComponent;
