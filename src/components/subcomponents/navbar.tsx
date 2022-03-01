import React, {useState} from "react";
import {useDispatch} from "react-redux";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { NavbarContainer, NavbarAlignGroup, RespOpeningCloseBtn, RotatingBtnElem } from "../../styled/subcomponents/navbar";

import NavbarElemMap from "../helperComponents/navbar/navbarElemMap";
import { changeGraphicalMode } from "../../redux/actions/generalActions";

const NavbarLogo = require("../../assets/sparkledge_logo.png");

const Navbar:React.FC = () => {

    const [isOpened, toggleIsOpened] = useState<boolean>(false);

    const dispatch = useDispatch();

    const NavbarData:{to: string, isImage: boolean, content: any, callback?: () => void}[][] = [
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
            },
            {
                to: "/#/",
                isImage: false,
                content: "Tryb",
                callback: () => {
                    dispatch(changeGraphicalMode())
                }
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
            <NavbarElemMap data={NavbarData[0]} groupName="left"/>
        </NavbarAlignGroup>
        <NavbarAlignGroup alignDir="right">
            <NavbarElemMap data={NavbarData[1]} groupName="right"/>
        </NavbarAlignGroup>
    </NavbarContainer>
};

export default Navbar;