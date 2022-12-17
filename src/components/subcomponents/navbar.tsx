import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocalStorage } from "usehooks-ts";

import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import AddIcon from "@mui/icons-material/Add";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

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
// TODO: ...

const NavbarItemWrapper = styled.div`
  box-sizing: border-box;
  padding: 0.3rem; 

  min-height: 100%;
  @media screen and (max-width: 1000px) {
    min-height: 5rem;
    border-bottom: 1px solid ${(props) => props.theme.navBottomBorderColor};
  }

  display: inline-flex;
  flex-direction: row;
  align-items: center;  
`;

const NavbarItem = styled.div`
  box-sizing: border-box;

  border: 1px solid transparent;
  border-radius: 16px;

  height: 100%;
  padding-inline: 1rem;
  
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

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

const NavbarItemDescription = styled.div`
  display: none;
  @media screen and (max-width: 1000px) {
    display: block;
  }
`;

const NavbarItemButton = styled.button`
  box-sizing: border-box;

  cursor: pointer;
`;

const NavbarExpandButton = styled.button`
  box-sizing: border-box;

  cursor: pointer;

  aspect-ratio: 1/1;

  display: none;
  @media screen and (max-width: 1000px) {
    display: flex;
    margin-left: auto;
  }
`;

const NavbarImg = styled.img`
  box-sizing: border-box;
  
  padding: 0.8rem 1.2rem;
  height: 2rem;
`;

const NavbarItemBreak = styled.div`
  flex-grow: 1;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

type NavbarProps = {
  isOpened: boolean;
};

const NavbarContainer = styled.div<NavbarProps>`
  box-sizing: border-box;

  height: 5rem;
  width: 100%;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    height: ${(props) => props.isOpened ? "100vh" : "5rem"};
    overflow: ${(props) => props.isOpened ? "scroll" : "hidden"};
  }

  display: flex;
  flex-direction: row;
  
  position: fixed;
  top: 0;

  // this needs to change at some point
  z-index: 10;

  overflow: hidden;
  border-bottom: 1px solid ${(props) => props.theme.navBottomBorderColor};

  transition: 0.2s height;

  background: ${(props) => props.theme.navBgColor};
`;

const Navbar:React.FC = () => {
  const isDarkModeOn = useSelector((state: RootState) => state.generalData.graphicalMode);

  const [memoryUserId, setMemoryUserId] = useLocalStorage<string>("u", "");
  const [refreshUserId, setRefreshUserId] = useLocalStorage<string>("u_r", "");
  const dispatch = useDispatch();

  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const ref = useRef<HTMLDivElement>(null);

  const handleMenuHidden = () => {
    setIsMenuExpanded(false);
    // reset scroll position
    if (ref && ref.current) {
      ref.current.scrollTop = 0;
    }

    enableBodyScroll(document.body);
  };

  const toggleMenu = () => {
    if (isMenuExpanded) {
      handleMenuHidden();
    } else {
      setIsMenuExpanded(true);
      disableBodyScroll(document.body);
    }
  };

  const handleThemeChanged = () => {
    dispatch(changeGraphicalMode());
  };

  return (
    <NavbarContainer ref={ref} isOpened={isMenuExpanded}>
      <NavbarItemWrapper>
        <NavbarItem as={Link} title="sparkledge" to="/">
          LOGO
        </NavbarItem>

        <NavbarItem as={NavbarExpandButton} title="otwórz/zamknij" onClick={toggleMenu}>
          {isMenuExpanded ? <CloseIcon /> : <MenuIcon />}
        </NavbarItem>
      </NavbarItemWrapper>

      <NavbarItemBreak />

      <NavbarItemWrapper>
        <NavbarItem as={Link} title="wyszukiwarka" to="/" onClick={handleMenuHidden}>
          wyszukiwarka
        </NavbarItem>
      </NavbarItemWrapper>

      {isLoggedIn ? (
        <>
          <NavbarItemWrapper>
            <NavbarItem as={Link} title="wyloguj się" to="/" onClick={handleMenuHidden}>
              wyloguj się
            </NavbarItem>
          </NavbarItemWrapper>

          <NavbarItemWrapper>
            <NavbarItem as={Link} title="dodaj dokument" to="/" onClick={handleMenuHidden}>
              <AddIcon />

              <NavbarItemDescription>
                dodaj dokument
              </NavbarItemDescription>
            </NavbarItem>
          </NavbarItemWrapper>

          <NavbarItemWrapper>
            <NavbarItem as={Link} title="ustawienia" to="/" onClick={handleMenuHidden}>
              <SettingsIcon />
              
              <NavbarItemDescription>
                ustawienia
              </NavbarItemDescription>
            </NavbarItem>
          </NavbarItemWrapper>
        </>
      ) : (
        <>
          <NavbarItemWrapper>
            <NavbarItem as={Link} title="zarejestruj się" to="/" onClick={handleMenuHidden}>
              zarejestruj się
            </NavbarItem>
          </NavbarItemWrapper>

          <NavbarItemWrapper>
            <NavbarItem as={Link} title="zaloguj się" to="/" onClick={handleMenuHidden}>
              zaloguj się
            </NavbarItem>
          </NavbarItemWrapper>
        </>
      )}

      <NavbarItemWrapper>
        <NavbarItem as={NavbarItemButton} title="tryb ciemny/jasny" onClick={handleThemeChanged}>
          {isDarkModeOn
            ? (
              <>
                <LightModeIcon />
                <NavbarItemDescription>
                  tryb jasny
                </NavbarItemDescription>
              </>
            )
            : (
              <>
                <DarkModeIcon />
                <NavbarItemDescription>
                  tryb ciemny
                </NavbarItemDescription>
              </>
            )}
        </NavbarItem>
      </NavbarItemWrapper>

    </NavbarContainer>
  );
};

export default Navbar;
