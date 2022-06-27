import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import useLocalStorage from "use-local-storage";

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { NavbarContainer, NavbarAlignGroup, RespOpeningCloseBtn, RotatingBtnElem } from "../../styled/subcomponents/navbar";

import NavbarElemMap from "../helperComponents/navbar/navbarElemMap";
import { changeGraphicalMode, setNewToken } from "../../redux/actions/generalActions";
import { RootState } from "../../redux/mainReducer";
import axios from "axios";

const NavbarLogo = require("../../assets/sparkledge_logo.webp");

const Navbar:React.FC = () => {

    const [isOpened, toggleIsOpened] = useState<boolean>(false);
    const graphicalMode: number = useSelector((state:RootState) => state.generalData.graphicalMode);
    const currentToken:string = useSelector((state: RootState) => state.generalData.currentToken);

    const [memoryUserId, setMemoryUserId] = useLocalStorage<string>("u","");
    const dispatch = useDispatch();

    const NavbarData:{isLink: boolean, to: string, isImage: boolean, content: any, callback: () => void}[][] = [
        [
            {
                isLink: true,
                to: currentToken.length === 0 ? "/" : "/panel",
                isImage: true,
                content: NavbarLogo,
                callback: () => toggleIsOpened(false)
            },
            {
                isLink: true,
                to: "/searcher",
                isImage: false,
                content: "Wyszukiwarka",
                callback: () => toggleIsOpened(false)
            }
        ],
        [
            {
                isLink: true,
                to: "/about",
                isImage: false,
                content: "O nas",
                callback: () => toggleIsOpened(false)
            },
            {
                isLink: true,
                to: currentToken.length === 0 ? "/signin" : "/documentUpload",
                isImage: false,
                content: currentToken.length === 0 ? "Zaloguj się" : "Opublikuj",
                callback: () => toggleIsOpened(false)
            },
            {
                isLink: currentToken.length === 0 ? true : false,
                to: currentToken.length === 0 ? "/signup" : "/",
                isImage: false,
                content: currentToken.length === 0 ? "Zarejestruj się" : "Wyloguj",
                callback: () => {
                    currentToken.length === 0 ? toggleIsOpened(false) : 
                    axios.get(`${process.env.REACT_APP_CONNECTION_TO_SERVER}/logout?user=${currentToken}`)
                    .then((res) => {
                        if(res.status === 200 || res.status === 204){
                            dispatch(setNewToken(""));
                            setMemoryUserId("");
                            toggleIsOpened(false);
                        }
                    })
                    .catch(() => {});
                }
            },
            {
                isLink: false,
                to: "/",
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