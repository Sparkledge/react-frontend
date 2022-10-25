/* 

    The ProfileUserDataEdit is a component with which the user can handle the changes of their profile 

*/

import React, { useState, useEffect } from "react";
import useLocalStorage from "use-local-storage";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import BackspaceIcon from "@mui/icons-material/Backspace";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";

import {
  ProfileUserDataEditContainer,
  ProfileUserDataEditHeader,
  ProfileUserDataEditSubHeader,
  ProfileUserDataEditDescribe,
  ProfileUserDataEditSocialMediaClosings,
  ProfileUserDataEditDescribeCounterContainer,
} from "src/styled/subpages/profile/profileUserDataEdit";

import ProfileUserDataEditSocialMedia from "src/components/helperComponents/profile/profileUserDataEditSocialMedia";
import updateUserProfile from "src/connectionFunctions/profile/updateUserProfile";

interface ProfileUserDataEditInterface {
  isOpened: boolean,
  userDescription: string,
  setUserDescription: (newState: string) => void,
  userFb: string,
  setUserFacebook: (newState: string) => void,
  userIg: string,
  setUserInstagram: (newState: string) => void,
  userLk: string,
  setUserLinkedin: (newState: string) => void,
  userPt: string,
  setUserPinterest: (newState: string) => void,
  closeCallback: (newState: boolean) => void,
}

const ProfileUserDataEdit:React.FC<ProfileUserDataEditInterface> = ({
  isOpened,
  userDescription,
  setUserDescription,
  userFb,
  setUserFacebook,
  userIg,
  setUserInstagram,
  userLk,
  setUserLinkedin,
  userPt,
  setUserPinterest,
  closeCallback,
}:ProfileUserDataEditInterface) => {
  const [isSendingAllowed, toggleIsSendingAllowed] = useState<boolean>(true);
  const [isSendingData, toggleIsSendingData] = useState<boolean>(false);
  const [currentDescription, setCurrentDescription] = useState<string>(userDescription);
  const [currentFbProfile, setCurrentFbProfile] = useState<string>(userFb);
  const [currentIgProfile, setCurrentIgProfile] = useState<string>(userIg);
  const [currentLkProfile, setCurrentLkProfile] = useState<string>(userLk);
  const [currentPtProfile, setCurrentPtProfile] = useState<string>(userPt);

  const [memoryUserId, setMemoryUserId] = useLocalStorage<string>("u", "", { syncData: true });

  const MAX_DESC_LENGTH:number = 500;

  useEffect(() => {
    setCurrentDescription(userDescription);
    setCurrentFbProfile(userFb);
    setCurrentIgProfile(userIg);
    setCurrentLkProfile(userLk);
    setCurrentPtProfile(userPt);
  }, [userDescription, userFb, userIg, userLk, userPt]);

  return (
    <ProfileUserDataEditContainer className="block-center" isOpened={isOpened}>
      <ProfileUserDataEditSocialMediaClosings alignment="left" onClick={() => closeCallback(!isOpened)}>
        <BackspaceIcon style={{ color: "inherit", fontSize: "inherit" }} />
      </ProfileUserDataEditSocialMediaClosings>
      <ProfileUserDataEditSocialMediaClosings
        alignment="right"
        onClick={() => {
          if (isSendingAllowed) {
            updateUserProfile(
              memoryUserId, 
              currentFbProfile, 
              currentIgProfile, 
              currentLkProfile, 
              currentPtProfile, 
              currentDescription,
              setUserDescription, 
              currentFbProfile,
              setUserFacebook, 
              currentIgProfile,
              setUserInstagram,
              currentLkProfile, 
              setUserLinkedin, 
              currentPtProfile,
              setUserPinterest,
              toggleIsSendingData,
              () => closeCallback(!isOpened),
            );
          }
        }}
      >
        {isSendingAllowed 
          ? isSendingData ? <HourglassBottomIcon style={{ color: "rgba(10,210,10,.9)", fontSize: "inherit" }} /> 
            : <CheckBoxIcon style={{ color: "rgba(10,210,10,.9)", fontSize: "inherit" }} /> : null}
      </ProfileUserDataEditSocialMediaClosings>
      <ProfileUserDataEditHeader className="block-center">
        Ustawienia profilu
      </ProfileUserDataEditHeader>
      <ProfileUserDataEditSubHeader className="block-center">
        Opis profilu
      </ProfileUserDataEditSubHeader>
      <ProfileUserDataEditDescribe
        className="block-center"
        placeholder={`Opis może mieć do ${MAX_DESC_LENGTH} znaków długości...`} 
        value={currentDescription}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setCurrentDescription(e.target.value.length > MAX_DESC_LENGTH ? currentDescription : e.target.value)}
      />
      <ProfileUserDataEditDescribeCounterContainer className="block-center">
        <span style={{ color: `rgba(${(255 * currentDescription.length) / MAX_DESC_LENGTH},${(255 * (MAX_DESC_LENGTH - currentDescription.length)) / MAX_DESC_LENGTH},0,1)` }}>
          {currentDescription.length}
          /
          {MAX_DESC_LENGTH}
        </span>
      </ProfileUserDataEditDescribeCounterContainer>
      <ProfileUserDataEditSubHeader className="block-center">
        Linki do social mediów
      </ProfileUserDataEditSubHeader>
      <ProfileUserDataEditSocialMedia
        Icon={FacebookIcon}
        currentLink={currentFbProfile}
        setCurrentLink={setCurrentFbProfile} 
        mediaVerificator="facebook"
        allowanceOfSubmitCallback={toggleIsSendingAllowed}
        placeholder="Link do profilu na Facebook'u..."
      />
      <ProfileUserDataEditSocialMedia
        Icon={InstagramIcon}
        currentLink={currentIgProfile}
        setCurrentLink={setCurrentIgProfile} 
        mediaVerificator="instagram"
        allowanceOfSubmitCallback={toggleIsSendingAllowed}
        placeholder="Link do profilu na Instagramie..."
      />
      <ProfileUserDataEditSocialMedia
        Icon={LinkedInIcon}
        currentLink={currentLkProfile}
        setCurrentLink={setCurrentLkProfile} 
        mediaVerificator="linkedin"
        allowanceOfSubmitCallback={toggleIsSendingAllowed}
        placeholder="Link do profilu na Linkedinie..."
      />
      <ProfileUserDataEditSocialMedia
        Icon={PinterestIcon}
        currentLink={currentPtProfile}
        setCurrentLink={setCurrentPtProfile} 
        mediaVerificator="pinterest"
        allowanceOfSubmitCallback={toggleIsSendingAllowed}
        placeholder="Link do profilu na Pinterest..."
      />
    </ProfileUserDataEditContainer>
  );
};

export default ProfileUserDataEdit;
