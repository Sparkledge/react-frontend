import React from "react";
import { Link } from "react-router-dom";

import { NavbarElem, NavbarElemImg } from "../../../styled/subcomponents/navbar";

interface NavbarElemMapInterface {
  data: { isLink: boolean, to: string, isImage: boolean, content: any, callback: () => void }[],
  groupName: string
}

const NavbarElemMap:React.FC<NavbarElemMapInterface> = ({ data, groupName } : NavbarElemMapInterface) => (
  <>
    {data.map((elem, ind) => elem.content === "noRender" ? null : elem.isLink ? (
      <Link to={elem.to === "none" ? "" : elem.to}>
        <NavbarElem onClick={elem.callback !== undefined ? elem.callback : () => {}}>
          {elem.isImage === true ? <NavbarElemImg src={elem.content} /> : elem.content}
        </NavbarElem>
      </Link>
    ) : (
      <NavbarElem onClick={elem.callback !== undefined ? elem.callback : () => {}}>
        {elem.isImage === true ? <NavbarElemImg src={elem.content} /> : elem.content}
      </NavbarElem>
    ))}
  </>
);

export default NavbarElemMap;
