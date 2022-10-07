/* 

    The ProfileUserDataEdit is a component with which the user can handle the changes of their profile 

*/

import React, { useState } from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import BackspaceIcon from "@mui/icons-material/Backspace";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import {
  ProfileUserDataEditContainer,
  ProfileUserDataEditHeader,
  ProfileUserDataEditSubHeader,
  ProfileUserDataEditDescribe,
  ProfileUserDataEditSocialMediaClosings,
  ProfileUserDataEditDescribeCounterContainer,
} from "src/styled/subpages/profile/profileUserDataEdit";

import ProfileUserDataEditSocialMedia from "src/components/helperComponents/profile/profileUserDataEditSocialMedia";

interface ProfileUserDataEditInterface {
  isOpened: boolean,
  closeCallback: (newState: boolean) => void,
}

const ProfileUserDataEdit:React.FC<ProfileUserDataEditInterface> = ({
  isOpened,
  closeCallback,
}:ProfileUserDataEditInterface) => {
  const [currentDescription, setCurrentDescription] = useState<string>("");
  const [currentFbProfile, setCurrentFbProfile] = useState<string>("");
  const [currentIgProfile, setCurrentIgProfile] = useState<string>("");
  const [currentLkProfile, setCurrentLkProfile] = useState<string>("");
  const [currentPtProfile, setCurrentPtProfile] = useState<string>("");

  const MAX_DESC_LENGTH:number = 500;

  return (
    <ProfileUserDataEditContainer className="block-center" isOpened={isOpened}>
      <ProfileUserDataEditSocialMediaClosings alignment="left" onClick={() => closeCallback(!isOpened)}>
        <BackspaceIcon style={{ color: "inherit", fontSize: "inherit" }} />
      </ProfileUserDataEditSocialMediaClosings>
      <ProfileUserDataEditSocialMediaClosings alignment="right" onClick={() => closeCallback(!isOpened)}>
        <CheckBoxIcon style={{ color: "rgba(10,210,10,.9)", fontSize: "inherit" }} />
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
      <ProfileUserDataEditSocialMedia Icon={FacebookIcon} currentLink={currentFbProfile} setCurrentLink={setCurrentFbProfile} placeholder="Link do profilu na Facebook'u..." />
      <ProfileUserDataEditSocialMedia Icon={InstagramIcon} currentLink={currentIgProfile} setCurrentLink={setCurrentIgProfile} placeholder="Link do profilu na Instagramie..." />
      <ProfileUserDataEditSocialMedia Icon={LinkedInIcon} currentLink={currentLkProfile} setCurrentLink={setCurrentLkProfile} placeholder="Link do profilu na Linkedinie..." />
      <ProfileUserDataEditSocialMedia Icon={PinterestIcon} currentLink={currentPtProfile} setCurrentLink={setCurrentPtProfile} placeholder="Link do profilu na Pinterest..." />
    </ProfileUserDataEditContainer>
  );
};

export default ProfileUserDataEdit;
