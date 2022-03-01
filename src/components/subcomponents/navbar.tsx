import React, {useState} from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { NavbarContainer, NavbarAlignGroup, NavbarElem, NavbarElemImg,
    RespOpeningCloseBtn, RotatingBtnElem } from "../../styled/subcomponents/navbar";

const NavbarLogo = require("../../assets/sparkledge_logo.png");

const Navbar:React.FC = () => {

    const [isOpened, toggleIsOpened] = useState<boolean>(false);

    const NavbarData:{to: string, isImage: boolean, content: any}[][] = [
        [
            {
                to: "/",
                isImage: true,
                content: NavbarLogo
            },
            {
                to: "/searcher",
                isImage: false,
                content: "Wyszukiwarka"
            }
        ],
        [
            {
                to: "/about",
                isImage: false,
                content: "O nas"
            },
            {
                to: "/signin",
                isImage: false,
                content: "Zaloguj się"
            },
            {
                to: "/signup",
                isImage: false,
                content: "Zarejestruj się"
            }
        ]
    ]

    return <NavbarContainer className="block-center" isOpened={isOpened.toString()}>
        <RespOpeningCloseBtn onClick = {() => toggleIsOpened(!isOpened)}>
            <RotatingBtnElem isrotated={isOpened ? "true" : "false"}>
                <MenuIcon style={{fontSize: "inherit"}}/>
            </RotatingBtnElem>
            <RotatingBtnElem isrotated={isOpened ? "false" : "true"}>
                <CloseIcon style={{fontSize: "inherit"}}/>
            </RotatingBtnElem>
        </RespOpeningCloseBtn>
        <NavbarAlignGroup alignDir="left">
            {NavbarData[0].map((elem, ind) => <Link to = {elem["to"]} key={"left-nav-group-elem-"+ind}>
                <NavbarElem>
                    {elem["isImage"] === true ? <NavbarElemImg src={elem["content"]}/> : elem["content"]}
                </NavbarElem>
            </Link>)}
        </NavbarAlignGroup>
        <NavbarAlignGroup alignDir="right">
            {NavbarData[1].map((elem, ind) => <Link to = {elem["to"]} key={"right-nav-group-elem-"+ind}>
                <NavbarElem>
                    {elem["isImage"] === true ? <NavbarElemImg src={elem["content"]}/> : elem["content"]}
                </NavbarElem>
            </Link>)}
        </NavbarAlignGroup>
    </NavbarContainer>
};

export default Navbar;