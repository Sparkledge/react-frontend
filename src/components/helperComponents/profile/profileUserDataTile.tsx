/* 
    The ProfileUserDataTile function is meant to render the following parts of the user's data provided by the profile subpage
*/

import React from "react";
import {
  ProfileUserSubData, 
  ProfileUserSubDataIconContainer, ProfileUserSubDataTextContainer,
} from "src/styled/subpages/profile";

interface ProfileUserDataTileInterface {
  Icon: any,
  content: string,
}

const ProfileUserDataTile:React.FC<ProfileUserDataTileInterface> = ({
  Icon, 
  content,
} : ProfileUserDataTileInterface) => (
  <ProfileUserSubData className="block-center">
    <ProfileUserSubDataIconContainer>
      <Icon style={{ color: "inherit", fontSize: "inherit", padding: 0 }} />
    </ProfileUserSubDataIconContainer>
    <ProfileUserSubDataTextContainer>
      {content}
    </ProfileUserSubDataTextContainer>
    
  </ProfileUserSubData>
);

export default ProfileUserDataTile;
