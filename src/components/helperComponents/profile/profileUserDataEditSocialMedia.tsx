/* 

    The ProfileUserDataEditSocialMedia is meant to handle the changing of the user's social media stuff

*/

import React, { useState } from "react";

import {
  ProfileUserDataEditSocialMediaContainer,
  ProfileUserDataEditSocialMediaIcon,
  ProfileUserDataEditSocialMediaInput,
} from "src/styled/subpages/profile/profileUserDataEdit";

interface ProfileUserDataEditSocialMediaInterface {
  Icon: any,
  currentLink: string,
  setCurrentLink: (newState: string) => void,
  mediaVerificator: string,
  allowanceOfSubmitCallback: (newState: boolean) => void,
  placeholder: string,
}

const ProfileUserDataEditSocialMedia:React.FC<ProfileUserDataEditSocialMediaInterface> = ({
  Icon,
  currentLink,
  setCurrentLink,
  mediaVerificator,
  allowanceOfSubmitCallback,
  placeholder,
}:ProfileUserDataEditSocialMediaInterface) => {
  const [isCorrect, toggleIsCorrect] = useState<boolean>(true);

  const validateLink = (newLink: string) => {
    let newCorrectionState:boolean = true;
    if (newLink.length > 0) {
      if (newLink.substring(0, 8) !== "https://") {
        newCorrectionState = false;
      } else {
        const verificationTable:string[] = newLink.split(/\.|\//);
        if (verificationTable.length < 6 || verificationTable[2] !== "www" || verificationTable[3] !== mediaVerificator || verificationTable[4] !== "com" || verificationTable[5].length > 0) newCorrectionState = false;
      }
    }
    toggleIsCorrect(newCorrectionState);
    allowanceOfSubmitCallback(newCorrectionState);
    setCurrentLink(newLink);
  };

  return (
    <ProfileUserDataEditSocialMediaContainer className="block-center">
      <ProfileUserDataEditSocialMediaIcon>
        <Icon style={{ color: "inherit", fontSize: "inherit" }} />
      </ProfileUserDataEditSocialMediaIcon>
      <ProfileUserDataEditSocialMediaInput
        type="text"
        value={currentLink} 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => validateLink(e.target.value)}
        placeholder={placeholder}
        isCorrect={isCorrect}
      />
    </ProfileUserDataEditSocialMediaContainer>
  );
};

export default ProfileUserDataEditSocialMedia;
