/* 
    The profile subpage is used to display the informations about the user given. If the user is signed in and is displaying
    their own profile, this subpage also works as the settings one
*/

import React, { Suspense } from "react";
import FlareIcon from "@mui/icons-material/Flare";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";

import { MainContainer } from "src/styled/main";
import { LandingSectionWrapper, LandingSectionFilter } from "src/styled/subpages/welcome";
import {
  ProfileHeader, ProfileContainer, ProfileUserData, ProfilePublishingData, 
  ProfileDataHeader, ProfileUserDataContainer,
  ProfileUserDescriptionContainer, ProfilePublishingInfoContainer,
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
                <ProfileUserDescriptionContainer className="block-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit culpa itaque iste nulla, ullam similique modi recusandae consectetur voluptates ipsam omnis eveniet impedit at, dolor expedita neque, sapiente vel.
                </ProfileUserDescriptionContainer>
                <ProfileUserDataTile Icon={FlareIcon} content="24.04.2022" />
                <ProfileUserDataTile Icon={LocalPostOfficeIcon} content="test@test.pl" />
                <ProfileUserDataTile Icon={FacebookIcon} content="Facebook" isClickable linkToTheSource="https://facebook.com/" />
                <ProfileUserDataTile Icon={InstagramIcon} content="Instagram" isClickable linkToTheSource="https://instagram.com/" />
                <ProfileUserDataTile Icon={LinkedInIcon} content="Linkedin" isClickable linkToTheSource="https://linkedin.com/" />
                <ProfileUserDataTile Icon={PinterestIcon} content="Pinterest" isClickable linkToTheSource="https://pinterest.com/" />
              </ProfileUserDataContainer>
            </ProfileUserData>
            <ProfilePublishingData className="block-center">
              <ProfileDataHeader className="block-center">
                Aktywność
              </ProfileDataHeader>
              <ProfileUserDataContainer className="block-center">
                <ProfilePublishingInfoContainer className="block-center">
                  Publikacje: 23
                </ProfilePublishingInfoContainer>
                <ProfilePublishingInfoContainer className="block-center">
                  Polubienia: 46
                </ProfilePublishingInfoContainer>
              </ProfileUserDataContainer>
            </ProfilePublishingData>
          </ProfileContainer>
        </LandingSectionFilter>
      </LandingSectionWrapper>
      <FooterComponent />
    </Suspense>
  </MainContainer>
);

export default Profile;
