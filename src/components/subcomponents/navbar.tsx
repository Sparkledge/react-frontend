import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useLocalStorage from "use-local-storage";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import BackupIcon from "@mui/icons-material/Backup";
import DescriptionIcon from "@mui/icons-material/Description";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import {
  NavbarContainer, NavbarAlignGroup, RespOpeningCloseBtn, RotatingBtnElem, 
} from "../../styled/subcomponents/navbar";

import NavbarElemMap from "../helperComponents/navbar/navbarElemMap";
import { changeGraphicalMode, setNewToken } from "../../redux/actions/generalActions";
import { RootState } from "../../redux/mainReducer";

import logout from "../../connectionFunctions/navbar/logout";

const NavbarLogo = require("../../assets/sparkledge_logo.webp");

const Navbar:React.FC = () => {
  const [isOpened, toggleIsOpened] = useState<boolean>(false);
  const graphicalMode: number = useSelector((state:RootState) => state.generalData.graphicalMode);
  const currentToken:string = useSelector((state: RootState) => state.generalData.currentToken);

  const [memoryUserId, setMemoryUserId] = useLocalStorage<string>("u", "");
  const [refreshUserId, setRefreshUserId] = useLocalStorage<string>("u_r", "");
  const dispatch = useDispatch();

  const NavbarData:{ isDropDown: boolean, 
    dropDownElems: {
      to: string,
      content: any,
      callback: () => void,
    }[],
    isLink: boolean, to: string, isImage: boolean, content: any, callback: () => void }[][] = [
    [
      {
        isDropDown: false,
        dropDownElems: [],
        isLink: true,
        to: currentToken.length === 0 ? "/" : "/panel",
        isImage: true,
        content: NavbarLogo,
        callback: () => toggleIsOpened(false),
      },
      {
        isDropDown: false,
        dropDownElems: [],
        isLink: true,
        to: "/searcher",
        isImage: false,
        content: "Wyszukiwarka",
        callback: () => toggleIsOpened(false),
      },
    ],
    [
      {
        isDropDown: false,
        dropDownElems: [],
        isLink: true,
        to: "/about",
        isImage: false,
        content: "O nas",
        callback: () => toggleIsOpened(false),
      },
      {
        isDropDown: false,
        dropDownElems: [],
        isLink: true,
        to: currentToken.length === 0 ? "/signin" : "/documentUpload",
        isImage: false,
        content: currentToken.length === 0 ? "Zaloguj się" : (
          <DescriptionIcon style={{
            color: "inherit", fontSize: "1.6em", position: "relative", top: "1vh",
          }}
          />
        ),
        callback: () => toggleIsOpened(false),
      },
      {
        isDropDown: false,
        dropDownElems: [],
        isLink: currentToken.length === 0,
        to: currentToken.length === 0 ? "/signup" : "/",
        isImage: false,
        content: currentToken.length === 0 ? "Zarejestruj się" : (
          <ExitToAppIcon style={{
            color: "inherit", fontSize: "1.6em", position: "relative", top: "1vh",
          }}
          />
        ),
        callback: () => {
          currentToken.length === 0 
            ? toggleIsOpened(false) 
            : logout(currentToken, () => dispatch(setNewToken("")), setMemoryUserId, setRefreshUserId, toggleIsOpened);
        },
      },
      {
        isDropDown: false,
        dropDownElems: [],
        isLink: false,
        to: "/",
        isImage: false,
        content: graphicalMode === 0 ? <LightModeIcon style={{ fontSize: "inherit", height: "inherit" }} /> 
          : <DarkModeIcon style={{ fontSize: "inherit", height: "inherit" }} />,
        callback: () => {
          dispatch(changeGraphicalMode());
          toggleIsOpened(false);
        },
      },
    ],
  ];

  return (
    <NavbarContainer className="block-center" isOpened={isOpened.toString()}>
      <RespOpeningCloseBtn onClick={() => toggleIsOpened(!isOpened)}>
        <RotatingBtnElem isrotated={isOpened ? "true" : "false"}>
          <MenuIcon style={{ fontSize: "inherit" }} />
        </RotatingBtnElem>
        <RotatingBtnElem isrotated={isOpened ? "false" : "true"}>
          <CloseIcon style={{ fontSize: "inherit" }} />
        </RotatingBtnElem>
      </RespOpeningCloseBtn>
      <NavbarAlignGroup alignDir="left">
        <NavbarElemMap data={NavbarData[0]} groupName="left" />
      </NavbarAlignGroup>
      <NavbarAlignGroup alignDir="right">
        <NavbarElemMap data={NavbarData[1]} groupName="right" />
      </NavbarAlignGroup>
    </NavbarContainer>
  );
};

export default Navbar;
