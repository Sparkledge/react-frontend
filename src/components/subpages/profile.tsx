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
import LastViewItemComponent from "src/components/helperComponents/userPanel/LastViewItemComponent";
import ProfileUserDataEdit from "src/components/helperComponents/profile/profileUserDataEdit";
import ProfileUserDataComponent from "src/components/helperComponents/profile/profileUserDataComponent";

import { LastPublishedItemType } from "src/connectionFunctions/userPanel/deleteMaterial";

import BackgroundPattern from "src/assets/pattern_background5.webp";

const FooterComponent = React.lazy(() => import("src/components/helperComponents/welcome/footerComponent"));

const Profile:React.FC = () => {
  const [userJoiningDate, setUserJoiningDate] = useState<string>("24.02.2022");
  const [userEmail, setUserEmail] = useState<string>("test@test.pl");
  const [userDescription, setUserDescription] = useState<string>("Lorem ipsum dolor sit amet");
  const [totalPublications, setTotalPublications] = useState<number>(23);
  const [totalLikes, setTotalLikes] = useState<number>(29);
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
              <ProfileUserDataComponent 
                isUserProfile={isUserProfile}
                areUserSettingsOpened={areUserSettingsOpened}
                toggleAreUserSettingsOpened={toggleAreUserSettingsOpened}
                userDescription={userDescription}
                userJoiningDate={userJoiningDate}
                userEmail={userEmail}
                facebookLink="https://www.facebook.com"
                instagramLink="https://www.instagram.com"
                linkedinLink="https://www.linkedin.com"
                pinterestLink="https://www.pinterest.com/"
              />
              <ProfilePublishingData className="block-center">
                <ProfileDataHeader className="block-center">
                  Aktywność
                </ProfileDataHeader>
                <ProfileUserDataContainer className="block-center">
                  <ProfilePublishingInfoContainer className="block-center">
                    Publikacje: 
                    {" "}
                    {totalPublications}
                  </ProfilePublishingInfoContainer>
                  <ProfilePublishingInfoContainer className="block-center">
                    Polubienia: 
                    {" "}
                    {totalLikes}
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
