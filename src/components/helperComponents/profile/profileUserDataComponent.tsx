/* 

    The ProfileUserDataComponent component is meant to be used for displaying the informations about the user on profile site

*/

import React from "react";
import { motion } from "framer-motion";
import FlareIcon from "@mui/icons-material/Flare";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import SettingsIcon from "@mui/icons-material/Settings";

import {
  ProfileUserData, 
  ProfileDataHeader, ProfileUserDataContainer,
  ProfileUserDescriptionContainer,
  ProfileUserSwitchModeBtn,
} from "src/styled/subpages/profile";

import SearchingPreloaderComponent from "src/components/helperComponents/searcher/searchingPreloaderComponent";
import ProfileUserDataTile from "./profileUserDataTile";

interface ProfileUserDataComponentInterface {
  isUserProfile: boolean,
  areUserSettingsOpened: boolean,
  toggleAreUserSettingsOpened: (newState: boolean) => void,
  userDescription: string,
  userJoiningDate: string,
  userEmail: string,
  facebookLink: string,
  instagramLink: string,
  linkedinLink: string,
  pinterestLink: string,
}

const ProfileUserDataComponent:React.FC<ProfileUserDataComponentInterface> = ({
  isUserProfile,
  areUserSettingsOpened,
  toggleAreUserSettingsOpened,
  userDescription,
  userJoiningDate,
  userEmail,
  facebookLink,
  instagramLink,
  linkedinLink,
  pinterestLink,
}:ProfileUserDataComponentInterface) => (
  <ProfileUserData className="block-center">
    {
      isUserProfile ? (
        <ProfileUserSwitchModeBtn>
          <motion.div
            layout
            animate={{
              rotateZ: areUserSettingsOpened ? "70deg" : "0deg",
            }}
            transition={{
              duration: 0.4, stiffness: 100, type: "spring",
            }}
          >
            <SettingsIcon
              style={{ color: "inherit", fontSize: "inherit" }}
              onClick={() => toggleAreUserSettingsOpened(!areUserSettingsOpened)}
            />
          </motion.div>
          
        </ProfileUserSwitchModeBtn>
      ) : null
    }
    <ProfileDataHeader className="block-center">
      {userEmail === "undefined" ? "Błąd połączenia" : "Informacje"}
    </ProfileDataHeader>
    <ProfileUserDataContainer className="block-center">
      {userEmail.length === 0 ? <SearchingPreloaderComponent /> 
        : userEmail === "undefined" ? null : (
          <>
            {userDescription.length > 0 ? (
              <ProfileUserDescriptionContainer className="block-center">
                {userDescription}
              </ProfileUserDescriptionContainer>
            ) : null}
            {
              userJoiningDate.length > 0 ? <ProfileUserDataTile Icon={FlareIcon} content={userJoiningDate} /> : null
            }
            <ProfileUserDataTile Icon={LocalPostOfficeIcon} content={userEmail} />
            {
              facebookLink.length > 0 ? <ProfileUserDataTile Icon={FacebookIcon} content="Facebook" isClickable linkToTheSource={facebookLink} /> : null
            }
            {
              instagramLink.length > 0 ? <ProfileUserDataTile Icon={InstagramIcon} content="Instagram" isClickable linkToTheSource={instagramLink} /> : null
            }
            {
              linkedinLink.length > 0 ? <ProfileUserDataTile Icon={LinkedInIcon} content="Linkedin" isClickable linkToTheSource={linkedinLink} /> : null
            }
            {
              pinterestLink.length > 0 ? <ProfileUserDataTile Icon={PinterestIcon} content="Pinterest" isClickable linkToTheSource={pinterestLink} /> : null
            }
          </>
        )}
    </ProfileUserDataContainer>
  </ProfileUserData>
);

export default ProfileUserDataComponent;
