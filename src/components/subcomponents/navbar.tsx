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

const NavbarLogo = require("src/assets/sparkledge_logo.webp");

type NavbarDataType = { isDropDown: boolean, 
  dropDownElems: {
    to: string,
    content: any,
    callback: () => void,
  }[],
  isLink: boolean, 
  to: string, 
  isImage: boolean, 
  content: any, 
  callback: () => void,
};

const Navbar:React.FC = () => {
  const [isOpened, toggleIsOpened] = useState<boolean>(false);
  const graphicalMode: number = useSelector((state:RootState) => state.generalData.graphicalMode);

  const [memoryUserId, setMemoryUserId] = useLocalStorage<string>("u", "");
  const [refreshUserId, setRefreshUserId] = useLocalStorage<string>("u_r", "");
  const dispatch = useDispatch();

  const NavbarData:NavbarDataType[][] = [
    [
      {
        isDropDown: false,
        dropDownElems: [],
        isLink: true,
        to: memoryUserId === undefined || (memoryUserId !== undefined && memoryUserId.length === 0) ? "/" : "/panel",
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
        to: "/faq",
        isImage: false,
        content: <LiveHelpIcon style={{
          color: "inherit", fontSize: "1.6em", position: "relative", top: "1vh",
        }}
        />,
        callback: () => toggleIsOpened(false),
      },
      {
        isDropDown: false,
        dropDownElems: [],
        isLink: true,
        to: "/about",
        isImage: false,
        content: <GroupIcon style={{
          color: "inherit", fontSize: "1.6em", position: "relative", top: "1vh",
        }}
        />,
        callback: () => toggleIsOpened(false),
      },
      {
        isDropDown: false,
        dropDownElems: [],
        isLink: true,
        to: memoryUserId === undefined || (memoryUserId !== undefined && memoryUserId.length === 0) ? "/signin" : "/documentUpload",
        isImage: false,
        content: memoryUserId === undefined || (memoryUserId !== undefined && memoryUserId.length === 0) ? "Zaloguj si??" : (
          <DescriptionIcon style={{
            color: "inherit", fontSize: "1.6em", position: "relative", top: "1vh",
          }}
          />
        ),
        callback: () => toggleIsOpened(false),
      },
      /* 
      {
        isDropDown: false,
        dropDownElems: [],
        isLink: false,
        to: "",
        isImage: false,
        content: memoryUserId !== undefined && memoryUserId.length > 0 ? (
          <NotificationsActiveIcon style={{
            color: "inherit", fontSize: "1.6em", position: "relative", top: "1vh",
          }}
          />
        ) : "noRender",
        callback: () => memoryUserId !== undefined && memoryUserId.length > 0 ? dispatch(toggleOpeningNotifications()) : null,
      }, */
      {
        isDropDown: false,
        dropDownElems: [],
        isLink: true,
        to: "/profile/",
        isImage: false,
        content: memoryUserId === undefined || (memoryUserId !== undefined && memoryUserId.length === 0) ? null : (
          <AccountCircleIcon style={{
            color: "inherit", fontSize: "1.6em", position: "relative", top: "1vh",
          }}
          />
        ),
        callback: () => toggleIsOpened(false),
      },
      /* {
        isDropDown: false,
        dropDownElems: [],
        isLink: true,
        to: "/settings/",
        isImage: false,
        content: memoryUserId === undefined || (memoryUserId !== undefined && memoryUserId.length === 0) ? null : (
          <SettingsIcon style={{
            color: "inherit", fontSize: "1.6em", position: "relative", top: "1vh",
          }}
          />
        ),
        callback: () => toggleIsOpened(false),
      }, */
      {
        isDropDown: false,
        dropDownElems: [],
        isLink: memoryUserId === undefined || (memoryUserId !== undefined && memoryUserId.length === 0),
        to: memoryUserId === undefined || (memoryUserId !== undefined && memoryUserId.length === 0) ? "/signup" : "/",
        isImage: false,
        content: memoryUserId === undefined || (memoryUserId !== undefined && memoryUserId.length === 0) ? "Zarejestruj si??" : (
          <ExitToAppIcon style={{
            color: "inherit", fontSize: "1.6em", position: "relative", top: "1vh",
          }}
          />
        ),
        callback: () => {
          memoryUserId === undefined || (memoryUserId !== undefined && memoryUserId.length === 0)
            ? toggleIsOpened(false) 
            : logout(memoryUserId, () => dispatch(setNewToken("")), setMemoryUserId, setRefreshUserId, toggleIsOpened);
        },
      },
      {
        isDropDown: false,
        dropDownElems: [],
        isLink: false,
        to: "/",
        isImage: false,
        content: memoryUserId === undefined || (memoryUserId !== undefined && memoryUserId.length === 0) ? <LightModeIcon style={{ fontSize: "inherit", height: "inherit" }} /> 
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
