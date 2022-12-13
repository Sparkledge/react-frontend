import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocalStorage } from "usehooks-ts";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import GroupIcon from "@mui/icons-material/Group";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import DescriptionIcon from "@mui/icons-material/Description";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import {
  NavbarContainer, NavbarAlignGroup, RespOpeningCloseBtn, RotatingBtnElem, 
} from "src/styled/subcomponents/navbar";

import NavbarElemMap from "src/components/helperComponents/navbar/navbarElemMap";
import { changeGraphicalMode, setNewToken, toggleOpeningNotifications } from "src/redux/actions/generalActions";
import { RootState } from "src/redux/mainReducer";

import logout from "src/connectionFunctions/navbar/logout";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarLogo = require("src/assets/sparkledge_logo.webp");

const NavbarItemLink = styled(Link)`
  box-sizing: border-box;

  /* border: 2px solid red; */
  height: 100%;
  padding: 0.8rem 1.2rem;
  
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  text-decoration: none;
  font-family: ${(props) => props.theme.fonts.main};
  color: ${(props) => props.theme.color};

  font-size: 1.2rem;

  transition: 0.4s all;

  &:hover {
    /* border: 2px solid white; */
    border-radius: 16px;

    background: #ffffff55;
  }
`;

const NavbarImg = styled.img`
  max-height: 100%;
  width: auto;
`;

const NavbarItemBreak = styled.div`
  flex-grow: 1;
`;

const NavbarContainer2 = styled.div`
  box-sizing: border-box;

  height: 5rem;
  width: 100%;

  padding: 0.2rem;

  border: 2px solid blue;

  display: flex;
  flex-direction: row;

  position: sticky;
  top: 0;

  // this needs to change at some point
  z-index: 10;

  background: ${(props) => props.theme.navBgColor};
`;

const Navbar:React.FC = () => {
  const [isOpened, toggleIsOpened] = useState<boolean>(false);
  const graphicalMode: number = useSelector((state: RootState) => state.generalData.graphicalMode);

  const [memoryUserId, setMemoryUserId] = useLocalStorage<string>("u", "");
  const [refreshUserId, setRefreshUserId] = useLocalStorage<string>("u_r", "");
  const dispatch = useDispatch();

  const handleThemeChange = () => {
    dispatch(changeGraphicalMode);
  };

  return (
    <NavbarContainer2>
      <NavbarItemLink to="/">
        <NavbarImg src={NavbarLogo} alt="sparkledge logo" />
      </NavbarItemLink>
      <NavbarItemLink to="/">
        wyszukiwarka
      </NavbarItemLink>

      <NavbarItemBreak />

      <NavbarItemLink to="/">
        o nas
      </NavbarItemLink>

      <NavbarItemLink to="/">
        zaloguj się
      </NavbarItemLink>

      <NavbarItemLink to="/">
        zarejestruj się
      </NavbarItemLink>

      <NavbarItemLink to="/">
        <DarkModeIcon style={{ fontSize: "inherit", height: "inherit" }} />
      </NavbarItemLink>

    </NavbarContainer2>
  );
};

export default Navbar;
