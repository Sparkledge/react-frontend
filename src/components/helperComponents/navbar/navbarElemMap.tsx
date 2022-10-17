import React from "react";
import { Link } from "react-router-dom";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { NavbarElem, NavbarElemImg } from "src/styled/subcomponents/navbar";
import NavbarElemComponent from "./navbarElemComponent";

interface NavbarElemMapInterface {
  data: { isDropDown: boolean, 
    dropDownElems: {
      to: string,
      content: any,
      callback: () => void,
    }[], isLink: boolean, to: string, isImage: boolean, content: any, callback: () => void }[],
  groupName: string
}

const NavbarElemMap:React.FC<NavbarElemMapInterface> = ({ data, groupName } : NavbarElemMapInterface) => (
  <>
    {data.map((elem, ind) => <NavbarElemComponent {...elem} />)}
  </>
);

export default NavbarElemMap;
