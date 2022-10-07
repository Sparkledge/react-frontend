/* 

    The ProfileUserDataEditSocialMedia is meant to handle the changing of the user's social media stuff

*/

import React from "react";

import {
  ProfileUserDataEditSocialMediaContainer,
  ProfileUserDataEditSocialMediaIcon,
  ProfileUserDataEditSocialMediaInput,
} from "src/styled/subpages/profile/profileUserDataEdit";

interface ProfileUserDataEditSocialMediaInterface {
  Icon: any,
  currentLink: string,
  setCurrentLink: (newState: string) => void,
  placeholder: string,
}

const ProfileUserDataEditSocialMedia:React.FC<ProfileUserDataEditSocialMediaInterface> = ({
  Icon,
  currentLink,
  setCurrentLink,
  placeholder,
}:ProfileUserDataEditSocialMediaInterface) => (
  <ProfileUserDataEditSocialMediaContainer className="block-center">
    <ProfileUserDataEditSocialMediaIcon>
      <Icon style={{ color: "inherit", fontSize: "inherit" }} />
    </ProfileUserDataEditSocialMediaIcon>
    <ProfileUserDataEditSocialMediaInput
      type="text"
      value={currentLink} 
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCurrentLink(e.target.value)}
      placeholder={placeholder}
    />
  </ProfileUserDataEditSocialMediaContainer>
);

export default ProfileUserDataEditSocialMedia;
