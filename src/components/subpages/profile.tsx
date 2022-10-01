/* 
    The profile subpage is used to display the informations about the user given. If the user is signed in and is displaying
    their own profile, this subpage also works as the settings one
*/

import React, { Suspense } from "react";
import FlareIcon from "@mui/icons-material/Flare";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";

import { MainContainer } from "src/styled/main";
import { LandingSectionWrapper, LandingSectionFilter } from "src/styled/subpages/welcome";
import {
  ProfileHeader, ProfileContainer, ProfileUserData, ProfilePublishingData, 
  ProfileDataHeader, ProfileUserDataContainer,
} from "src/styled/subpages/profile";

import HeadTags from "src/components/subcomponents/headTags";
import SearchingPreloaderComponent from "src/components/helperComponents/searcher/searchingPreloaderComponent";
import ProfileUserDataTile from "src/components/helperComponents/profile/profileUserDataTile";

import BackgroundPattern from "src/assets/pattern_background5.webp";

const FooterComponent = React.lazy(() => import("src/components/helperComponents/welcome/footerComponent"));

const Profile:React.FC = () => (
  <MainContainer className="block-center">
    <HeadTags areAdsOn={false} title="Profil użytkownika - Sparkledge" description="" />
    <Suspense fallback={<SearchingPreloaderComponent />}>
      <LandingSectionWrapper
        className="block-center"
        backgroundSize="initial"
        source={BackgroundPattern}
        backgroundRepeat="repeat"
      >
        <LandingSectionFilter>
          <ProfileHeader className="block-center">
            Test user
          </ProfileHeader>
          <ProfileContainer className="block-center">
            <ProfileUserData className="block-center">
              <ProfileDataHeader className="block-center">
                Informacje
              </ProfileDataHeader>
              <ProfileUserDataContainer className="block-center">
                <ProfileUserDataTile Icon={FlareIcon} content="24.04.2022" />
              </ProfileUserDataContainer>
            </ProfileUserData>
            <ProfilePublishingData className="block-center">
              <ProfileDataHeader className="block-center">
                Aktywność
              </ProfileDataHeader>
            </ProfilePublishingData>
          </ProfileContainer>
        </LandingSectionFilter>
      </LandingSectionWrapper>
      <FooterComponent />
    </Suspense>
  </MainContainer>
);

export default Profile;
