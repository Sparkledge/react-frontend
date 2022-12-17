import React, { useEffect, useRef, useState } from "react";
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

import {
  NavbarContainer, 
  NavbarItem, 
  NavbarItemWrapper, 
  NavbarItemDescription, 
  NavbarItemBreak, 
  NavbarImg, 
  NavbarItemButton, 
  NavbarExpandButton, 
} from "src/styled/subcomponents/navbar";

import logout from "src/connectionFunctions/navbar/logout";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarLogo = require("src/assets/sparkledge_logo.webp");

// TODO: extract constants from styled-components
// TODO: move styled-components to separate files

// TODO: solve problem with black square below navbar
// TODO: ...

const Navbar:React.FC = () => {
  const isDarkModeOn = useSelector((state: RootState) => state.generalData.graphicalMode);

  const [memoryUserId, setMemoryUserId] = useLocalStorage("u", "");
  const [refreshUserId, setRefreshUserId] = useLocalStorage("u_r", "");
  const dispatch = useDispatch();

  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);

  useEffect(() => {
    setIsUserLoggedIn((memoryUserId !== undefined && memoryUserId.length !== 0));
  }, [memoryUserId]);

  const ref = useRef<HTMLDivElement>(null);

  const handleMenuHidden = () => {
    setIsMenuExpanded(false);
    // reset scroll position
    if (ref && ref.current) {
      ref.current.scrollTop = 0;
    }
  
    enableBodyScroll(document.body);
  };

  const handleMenuToggled = () => {
    if (isMenuExpanded) {
      handleMenuHidden();
    } else {
      setIsMenuExpanded(true);
      disableBodyScroll(document.body);
    }
  };

  const handleThemeChanged = () => {
    dispatch(changeGraphicalMode());

    // not sure about that
    // handleMenuHidden();
  };

  // last function in logout is for closing menu
  // logout should be done with a hook
  const handleUserLogedOut = () => {
    logout(memoryUserId, () => dispatch(setNewToken("")), setMemoryUserId, setRefreshUserId, (x) => {});

    handleMenuHidden();
  };

  return (
    <NavbarContainer ref={ref} isOpened={isMenuExpanded}>
      <NavbarItemWrapper>
        <NavbarItem as={Link} title="sparkledge" to="/">
          <NavbarImg src={NavbarLogo} alt="sparkledge" />
        </NavbarItem>

        <NavbarItem 
          as={NavbarExpandButton} 
          title="otwórz/zamknij" 
          onClick={handleMenuToggled}
        >
          {isMenuExpanded ? <CloseIcon /> : <MenuIcon />}
        </NavbarItem>
      </NavbarItemWrapper>

      <NavbarItemBreak />

      <NavbarItemWrapper>
        <NavbarItem as={Link} title="wyszukiwarka" to="/searcher">
          wyszukiwarka
        </NavbarItem>
      </NavbarItemWrapper>

      {isUserLoggedIn ? (
        <>
          <NavbarItemWrapper>
            <NavbarItem 
              as={Link} 
              title="wyloguj się" 
              to="/" 
              onClick={handleUserLogedOut}
            >
              wyloguj się
            </NavbarItem>
          </NavbarItemWrapper>

          <NavbarItemWrapper>
            <NavbarItem 
              as={Link} 
              title="dodaj dokument" 
              to="/docmentUpload"
              onClick={handleMenuHidden}
            >
              <AddIcon />

              <NavbarItemDescription>
                dodaj dokument
              </NavbarItemDescription>
            </NavbarItem>
          </NavbarItemWrapper>

          <NavbarItemWrapper>
            <NavbarItem 
              as={Link} 
              title="ustawienia" 
              to="/profile"
              onClick={handleMenuHidden}
            >
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
            <NavbarItem 
              as={Link} 
              title="zarejestruj się" 
              to="/signup"
              onClick={handleMenuHidden}
            >
              zarejestruj się
            </NavbarItem>
          </NavbarItemWrapper>

          <NavbarItemWrapper>
            <NavbarItem 
              as={Link} 
              title="zaloguj się" 
              to="/signin"
              onClick={handleMenuHidden}
            >
              zaloguj się
            </NavbarItem>
          </NavbarItemWrapper>
        </>
      )}

      <NavbarItemWrapper>
        <NavbarItem 
          as={NavbarItemButton} 
          title="tryb ciemny/jasny" 
          onClick={handleThemeChanged}
        >
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
