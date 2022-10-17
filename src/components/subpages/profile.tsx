/* 
    The profile subpage is used to display the informations about the user given. If the user is signed in and is displaying
    their own profile, this subpage also works as the settings one
*/

import React, {
  Suspense, useState, useEffect, memo, 
} from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import useLocalStorage from "use-local-storage";

import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

import { MainContainer } from "src/styled/main";
import { LandingSectionWrapper, LandingSectionFilter, EndingBlock } from "src/styled/subpages/welcome";
import {
  ProfileHeader, ProfileContainer, ProfilePublishingData, 
  ProfileDataHeader, ProfileUserDataContainer,
  ProfilePublishingInfoContainer,
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

import loadRecentlyPublished from "src/connectionFunctions/profile/loadRecentlyPublished";
import getNumberOfPublishedMaterials from "src/connectionFunctions/profile/getNumberOfPublishedMaterials";
import getUserDetails from "src/connectionFunctions/profile/getUserDetails";
import getLastViews from "src/connectionFunctions/userPanel/loadLastViews";

import BackgroundPattern from "src/assets/pattern_background5.webp";

const FooterComponent = React.lazy(() => import("src/components/helperComponents/welcome/footerComponent"));

const Profile:React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [userJoiningDate, setUserJoiningDate] = useState<string>("24.02.2022");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userDescription, setUserDescription] = useState<string>("Lorem ipsum dolor sit amet");
  const [isActivityWorking, toggleIsActivityWorking] = useState<boolean>(true);
  const [totalPublications, setTotalPublications] = useState<number>(-1);
  const [totalLikes, setTotalLikes] = useState<number>(29);
  const [isUserProfile, toggleIsUserProfile] = useState<boolean>(true);
  const [isWorking, toggleIsWorking] = useState<boolean>(true);
  const [areUserSettingsOpened, toggleAreUserSettingsOpened] = useState<boolean>(false);
  const [lastPublishedList, setLastPublishedList] = useState<LastPublishedItemType[]>([]);
  const [isPublishedLoading, toggleIsPublishedLoading] = useState<boolean>(false);
  const [memoryUserId, setMemoryUserId] = useLocalStorage<string>("u", "", { syncData: true });

  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(userId);
    if (userId !== undefined) {
      loadRecentlyPublished(userId, setLastPublishedList, toggleIsWorking, toggleIsPublishedLoading);
      getNumberOfPublishedMaterials(userId, setTotalPublications, toggleIsActivityWorking);
      getUserDetails(userId, setUserName, setUserEmail);
    } else if (memoryUserId === undefined || (memoryUserId !== undefined && memoryUserId.length === 0)) {
      // navigate("/");
    } else {
      getLastViews(memoryUserId, "users/publishedDocuments", setLastPublishedList, toggleIsWorking, toggleIsPublishedLoading);
    }
  }, [memoryUserId, userId]);

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
              {userName}
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
                  {isActivityWorking ? "Aktywność" : "Błąd połączenia"}
                </ProfileDataHeader>
                {
                isActivityWorking ? totalPublications === -1 ? <SearchingPreloaderComponent /> : (
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
                ) : null
}
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
