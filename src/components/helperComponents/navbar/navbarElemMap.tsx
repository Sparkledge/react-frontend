import React from "react";
import {Link} from "react-router-dom"

import { NavbarElem, NavbarElemImg } from "../../../styled/subcomponents/navbar";

interface NavbarElemMapInterface {
    data: {to: string, isImage: boolean, content: any, callback?: () => void}[],
    groupName: string
}

const NavbarElemMap:React.FC<NavbarElemMapInterface> = ({data, groupName} : NavbarElemMapInterface) => {
    return <>{data.map((elem, ind) => <Link to = {elem["to"]} key={groupName+"-nav-group-elem-"+ind}>
        <NavbarElem onClick={elem.callback !== undefined ? elem.callback : () => {}}>
            {elem["isImage"] === true ? <NavbarElemImg src={elem["content"]}/> : elem["content"]}
        </NavbarElem>
    </Link>)}</>
};

export default NavbarElemMap;