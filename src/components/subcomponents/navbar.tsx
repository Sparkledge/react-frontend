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
// TODO: make sure this is responsive
// TODO: block scrolling when menu is expanded
// TODO: remove break in navbar when in hamurger mode
// TODO: ...

const NavbarItemWrapper = styled.div`
  box-sizing: border-box;
  padding: 0.3rem 0.6rem;

  // to remove
  border: 1px solid lime;

  min-height: 100%;
  @media screen and (max-width: 1000px) {
    min-height: 5rem;
  }

  display: inline-flex;
  flex-direction: row;
  align-items: center;  
`;

const NavbarItem = styled.div`
  box-sizing: border-box;

  border: 1px solid transparent;
  border-radius: 16px;

  /* height: 100%; */
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

  background: transparent;

  &:hover {
    background: ${(props) => props.theme.hoverBgPrimary};
  }
`;

const NavbarItemButton = styled.button`
  cursor: pointer;
`;

const NavbarExpandButton = styled.button`
  cursor: pointer;

  height: fit-content;

  display: none;
  @media screen and (max-width: 1000px) {
    display: inline-block;
    margin-left: auto;
  }
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

const NavbarContainer = styled.div<NavbarProps>`
  box-sizing: border-box;

  height: 5rem;
  width: 100%;
  padding-inline: 0.4rem;

  // to remove
  border: 2px solid blue;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    height: ${(props) => props.isOpened ? "100vh" : "5rem"};
    overflow: ${(props) => props.isOpened ? "scroll" : "hidden"};
    gap: 0;
    scroll-behavior: contain;
  }

  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  position: fixed;
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

  const handleMenuHidden = () => {
    setIsMenuExpanded(false);
  };

  return (
    <NavbarContainer isOpened={isMenuExpanded}>
      <NavbarItemWrapper>
        <NavbarItem as={Link} to="/">
          LOGO
        </NavbarItem>

        <NavbarItem as={NavbarExpandButton} onClick={handleMenuExpanded}>
          {isMenuExpanded ? "x" : "="}
        </NavbarItem>
      </NavbarItemWrapper>

      <NavbarItemWrapper>
        <NavbarItem as={Link} to="/" onClick={handleMenuHidden}>
          wyszukiwarka
        </NavbarItem>
      </NavbarItemWrapper>

      <NavbarItemBreak />

      <NavbarItemWrapper>
        <NavbarItem as={Link} to="/faq" onClick={handleMenuHidden}>
          o nas
        </NavbarItem>
      </NavbarItemWrapper>

      <NavbarItemWrapper>
        <NavbarItem as={Link} to="/" onClick={handleMenuHidden}>
          zarejestruj się
        </NavbarItem>
      </NavbarItemWrapper>

      <NavbarItemWrapper>
        <NavbarItem as={Link} to="/" onClick={handleMenuHidden}>
          zaloguj się
        </NavbarItem>
      </NavbarItemWrapper>

      <NavbarItemWrapper>
        <NavbarItem as={Link} to="/" onClick={handleMenuHidden}>
          TEST
        </NavbarItem>
      </NavbarItemWrapper>

      <NavbarItemWrapper>
        <NavbarItem as={Link} to="/" onClick={handleMenuHidden}>
          TEST
        </NavbarItem>
      </NavbarItemWrapper>

      <NavbarItemWrapper>
        <NavbarItem as={NavbarItemButton} onClick={() => { handleThemeChanged(); handleMenuHidden(); }}>
          {graphicalMode
            ? <LightModeIcon style={{ fontSize: "inherit", height: "inherit" }} />
            : <DarkModeIcon style={{ fontSize: "inherit", height: "inherit" }} />}
        </NavbarItem>
      </NavbarItemWrapper>

    </NavbarContainer>
  );
};

export default Navbar;
