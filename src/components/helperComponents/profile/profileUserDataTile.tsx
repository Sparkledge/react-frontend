/* 
    The ProfileUserDataTile function is meant to render the following parts of the user's data provided by the profile subpage
*/

import React from "react";
import {
  ProfileUserSubData, 
  ProfileUserSubDataIconContainer, ProfileUserSubDataTextContainer,
} from "src/styled/subpages/profile/profileUserDataTile";

interface ProfileUserDataTileInterface {
  Icon: any,
  content: string,
  isClickable?: boolean,
  linkToTheSource?: string,
}

interface ProfileUserDataTileContentInterface {
  Icon: any,
  content: string,
  isClickable: boolean,
}

const ProfileUserDataTileContent:React.FC<ProfileUserDataTileContentInterface> = ({
  Icon, 
  content,
  isClickable,
} : ProfileUserDataTileContentInterface) => (
  <ProfileUserSubData className="block-center" isClickable={isClickable}>
    <ProfileUserSubDataIconContainer>
      <Icon style={{ color: "inherit", fontSize: "inherit", padding: 0 }} />
    </ProfileUserSubDataIconContainer>
    <ProfileUserSubDataTextContainer>
      {content}
    </ProfileUserSubDataTextContainer>
    
  </ProfileUserSubData>
);

const ProfileUserDataTile:React.FC<ProfileUserDataTileInterface> = ({
  Icon, 
  content,
  isClickable,
  linkToTheSource,
} : ProfileUserDataTileInterface) => isClickable && linkToTheSource !== undefined && linkToTheSource.length > 0 
  ? (
    <a href={linkToTheSource} target="_blank" rel="noreferrer">
      <ProfileUserDataTileContent Icon={Icon} content={content} isClickable />
    </a>
  ) : <ProfileUserDataTileContent Icon={Icon} content={content} isClickable={false} />;

ProfileUserDataTile.defaultProps = {
  isClickable: false,
  linkToTheSource: "",
};

export default ProfileUserDataTile;
