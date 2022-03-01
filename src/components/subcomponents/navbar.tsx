import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { NavbarContainer, NavbarAlignGroup, RespOpeningCloseBtn, RotatingBtnElem } from "../../styled/subcomponents/navbar";

import NavbarElemMap from "../helperComponents/navbar/navbarElemMap";
import { changeGraphicalMode } from "../../redux/actions/generalActions";
import { RootState } from "../../redux/mainReducer";

const NavbarLogo = require("../../assets/sparkledge_logo.png");

const Navbar:React.FC = () => {

    const [isOpened, toggleIsOpened] = useState<boolean>(false);
    const graphicalMode: number = useSelector((state:RootState)=> state.generalData.graphicalMode);

    const dispatch = useDispatch();

    const NavbarData:{to: string, isImage: boolean, content: any, callback: () => void}[][] = [
        [
            {
                to: "/",
                isImage: true,
                content: NavbarLogo,
                callback: () => toggleIsOpened(false)
            },
            {
                to: "/searcher",
                isImage: false,
                content: "Wyszukiwarka",
                callback: () => toggleIsOpened(false)
            }
        ],
        [
            {
                to: "/about",
                isImage: false,
                content: "O nas",
                callback: () => toggleIsOpened(false)
            },
            {
                to: "/signin",
                isImage: false,
                content: "Zaloguj się",
                callback: () => toggleIsOpened(false)
            },
            {
                to: "/signup",
                isImage: false,
                content: "Zarejestruj się",
                callback: () => toggleIsOpened(false)
            },
            {
                to: "/#/",
                isImage: false,
                content: graphicalMode === 0 ? <LightModeIcon style={{fontSize: "inherit", height: "inherit"}}/> : 
                <DarkModeIcon style={{fontSize: "inherit", height: "inherit"}}/>,
                callback: () => {
                    dispatch(changeGraphicalMode());
                    toggleIsOpened(false);
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