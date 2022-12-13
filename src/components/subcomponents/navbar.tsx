import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocalStorage } from "usehooks-ts";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import { changeGraphicalMode, setNewToken, toggleOpeningNotifications } from "src/redux/actions/generalActions";
import { RootState } from "src/redux/mainReducer";

import logout from "src/connectionFunctions/navbar/logout";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarLogo = require("src/assets/sparkledge_logo.webp");

// TODO: extract constants from styled-components
// TODO: move styled-components to separate files
// TODO: solve problem with black square below navbar
// TODO: find way to place menu expand button in top right corner
// TODO: make sure this is responsive
// TODO: ...

const NavbarItemLink = styled(Link)`
  box-sizing: border-box;

  border: 1px solid transparent;
  border-radius: 16px;
  background: transparent;

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
  white-space: nowrap;

  transition: 0.2s all;

  &:hover {
    background: ${(props) => props.theme.hoverBgPrimary};
  }
`;

const NavbarItemButton = styled(NavbarItemLink)`
  cursor: pointer;
`;

const NavbarExpandButton = styled(NavbarItemLink)`
  cursor: pointer;

  display: none;
  @media screen and (max-width: 1000px) {
    display: inline-block;
  }

  position: sticky;
  top: 0;
  right: 0;
`;

const NavbarImg = styled.img`
  padding: 0.8rem 1.2rem;
  height: 2rem;
`;

const NavbarItemBreak = styled.div`
  flex-grow: 1;
`;

type NavbarProps = {
  isOpened: boolean;
};

const NavbarContainer2 = styled.div<NavbarProps>`
  box-sizing: border-box;

  height: 5rem;
  width: 100%;

  padding: 0.4rem 0.8rem;

  border: 2px solid blue;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    height: ${(props) => props.isOpened ? "fit-content" : "5rem"};
  }

  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  position: sticky;
  top: 0;

  // this needs to change at some point
  z-index: 10;
  overflow: hidden;

  background: ${(props) => props.theme.navBgColor};
`;

const Navbar:React.FC = () => {
  const graphicalMode: number = useSelector((state: RootState) => state.generalData.graphicalMode);

  const [memoryUserId, setMemoryUserId] = useLocalStorage<string>("u", "");
  const [refreshUserId, setRefreshUserId] = useLocalStorage<string>("u_r", "");
  const dispatch = useDispatch();

  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  const handleThemeChanged = () => {
    dispatch(changeGraphicalMode());
  };

  const handleMenuExpanded = () => {
    setIsMenuExpanded(!isMenuExpanded);
  };

  return (
    <NavbarContainer2 isOpened={isMenuExpanded}>
      <NavbarExpandButton as="button" onClick={handleMenuExpanded}>
        =
      </NavbarExpandButton>

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

      <NavbarItemButton as="button" onClick={handleThemeChanged}>
        {graphicalMode
          ? <LightModeIcon style={{ fontSize: "inherit", height: "inherit" }} />
          : <DarkModeIcon style={{ fontSize: "inherit", height: "inherit" }} />}
      </NavbarItemButton>

    </NavbarContainer2>
  );
};

export default Navbar;
