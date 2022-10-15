import React, { useState } from "react";
import { Link } from "react-router-dom";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { NavbarElemColumn, NavbarElem, NavbarElemImg } from "src/styled/subcomponents/navbar";

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
  ) : isDropDown ? (
    <NavbarElemColumn>
      <NavbarElem onClick={() => { if (callback !== undefined) callback; toggleIsDropOpened(!isDropOpened); }}>
        {isImage === true ? <NavbarElemImg src={content} /> : content}
        {isDropDown === true ? isDropOpened
          ? <ArrowDropUpIcon style={{ color: "inherit", fontSize: "inherit" }} />
          : <ArrowDropDownIcon style={{ color: "inherit", fontSize: "inherit" }} /> : null}
      </NavbarElem>
      {
        dropDownElems.map((elem) => (
          <Link to={elem.to === "none" ? "" : elem.to}>
            <NavbarElem onClick={() => { if (elem.callback !== undefined) elem.callback; toggleIsDropOpened(!isDropOpened); }}>
              {elem.content}
            </NavbarElem>
          </Link>
        ))
      }
    </NavbarElemColumn>
  ) : (
    <NavbarElem onClick={callback !== undefined ? callback : () => {}}>
      {isImage === true ? <NavbarElemImg src={content} /> : content}
    </NavbarElem>
  );
};

export default NavbarElemComponent;
