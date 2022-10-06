/* 
    The profile subpage is used to display the informations about the user given. If the user is signed in and is displaying
    their own profile, this subpage also works as the settings one
*/

import React, { Suspense, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FlareIcon from "@mui/icons-material/Flare";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import DeleteIcon from "@mui/icons-material/Delete";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import SettingsIcon from "@mui/icons-material/Settings";

import { MainContainer } from "src/styled/main";
import { LandingSectionWrapper, LandingSectionFilter, EndingBlock } from "src/styled/subpages/welcome";
import {
  ProfileHeader, ProfileContainer, ProfileUserData, ProfilePublishingData, 
  ProfileDataHeader, ProfileUserDataContainer,
  ProfileUserDescriptionContainer, ProfilePublishingInfoContainer,
  ProfileUserSwitchModeBtn,
} from "src/styled/subpages/profile";
import {
  UserPanelWelcomeSection, UserPanelLastView,
  UserPanelLastViewHeader, UserPanelLastViewGallery, UserPanelLastViewNoItemsHeader, 
} from "src/styled/subpages/userpanel";

import HeadTags from "src/components/subcomponents/headTags";
import SearchingPreloaderComponent from "src/components/helperComponents/searcher/searchingPreloaderComponent";
import ProfileUserDataTile from "src/components/helperComponents/profile/profileUserDataTile";
import LastViewItemComponent from "src/components/helperComponents/userPanel/LastViewItemComponent";
import ProfileUserDataEdit from "src/components/helperComponents/profile/profileUserDataEdit";

import { LastPublishedItemType } from "src/connectionFunctions/userPanel/deleteMaterial";

import BackgroundPattern from "src/assets/pattern_background5.webp";

const FooterComponent = React.lazy(() => import("src/components/helperComponents/welcome/footerComponent"));

const Profile:React.FC = () => {
  const [isUserProfile, toggleIsUserProgile] = useState<boolean>(true);
  const [areUserSettingsOpened, toggleAreUserSettingsOpened] = useState<boolean>(false);
  const [lastPublishedList, setLastPublishedList] = useState<LastPublishedItemType[]>([]);
  const [isPublishedLoading, toggleIsPublishedLoading] = useState<boolean>(false);

  return (
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
            <ProfileUserDataEdit isOpened={areUserSettingsOpened} closeCallback={toggleAreUserSettingsOpened} />
            <ProfileContainer className="block-center">
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
            <UserPanelWelcomeSection className="block-center">
              <UserPanelLastView width={90} className="block-center">
                <UserPanelLastViewHeader className="block-center">
                  Ostatnio publikowane
                </UserPanelLastViewHeader>
                <UserPanelLastViewGallery className="block-center">
                  {
                lastPublishedList.length > 0 && !isPublishedLoading ? lastPublishedList.map((elem, ind) => (
                  <Link to={`/document/${elem.id}`}>
                    <LastViewItemComponent
                      key="last-view-material"
                      title={elem.title}
                      name={" "}
                      additionalData={[[<PublishedWithChangesIcon style={{
                        color: "inherit",
                        fontSize: "1.3em", 
                        verticalAlign: "top", 
                      }}
                      />, elem.createdAt], [<VisibilityIcon style={{
                        color: "inherit",
                        fontSize: "1.3em", 
                        verticalAlign: "top", 
                      }}
                      />, elem.views,
                      ], [<ThumbUpIcon style={{
                        color: "inherit",
                        fontSize: "1.3em", 
                        verticalAlign: "top", 
                      }}
                      />, elem.likes]]}
                      isPublishedByUser={false}
                    />
                  </Link>
                )) : isPublishedLoading ? (
                  <SearchingPreloaderComponent />
                ) : (
                  <UserPanelLastViewNoItemsHeader className="block-center">
                    Brak danych
                  </UserPanelLastViewNoItemsHeader>
                )
              }
                </UserPanelLastViewGallery>
              </UserPanelLastView>
            </UserPanelWelcomeSection>
            <EndingBlock />
          </LandingSectionFilter>
        </LandingSectionWrapper>
        <FooterComponent />
      </Suspense>
    </MainContainer>
  );
};

export default Profile;
