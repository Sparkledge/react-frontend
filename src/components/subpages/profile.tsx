/* 
    The profile subpage is used to display the informations about the user given. If the user is signed in and is displaying
    their own profile, this subpage also works as the settings one
*/

import React, {
  Suspense, useState, useEffect, memo, 
} from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import jwtDecode from "jwt-decode";

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

import validateIfEmail from "src/components/auxiliaryFunctions/forgotPassword/validateIfEmail";
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
  const [helperUserId, setHelperUserId] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [userJoiningDate, setUserJoiningDate] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userDescription, setUserDescription] = useState<string>("");
  const [userFacebook, setUserFacebook] = useState<string>("");
  const [userInstagram, setUserInstagram] = useState<string>("");
  const [userLinkedin, setUserLinkedin] = useState<string>("");
  const [userPinterest, setUserPinterest] = useState<string>("");
  const [isActivityWorking, toggleIsActivityWorking] = useState<boolean>(true);
  const [totalPublications, setTotalPublications] = useState<number>(-1);
  const [totalLikes, setTotalLikes] = useState<number>(0);
  const [isUserProfile, toggleIsUserProfile] = useState<boolean>(false);
  const [isWorking, toggleIsWorking] = useState<boolean>(true);
  const [areUserSettingsOpened, toggleAreUserSettingsOpened] = useState<boolean>(false);
  const [lastPublishedList, setLastPublishedList] = useState<LastPublishedItemType[]>([]);
  const [isPublishedLoading, toggleIsPublishedLoading] = useState<boolean>(false);
  const [memoryUserId, setMemoryUserId] = useLocalStorage<string>("u", "", { syncData: true });

  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (userId !== undefined) {
      toggleIsUserProfile(false);
      getUserDetails(
        userId, 
        validateIfEmail(userId) ? "Email" : "Id", 
        setUserName, 
        setUserEmail, 
        setUserDescription,
        setUserFacebook, 
        setUserInstagram, 
        setUserLinkedin, 
        setUserPinterest, 
        setHelperUserId,
      );
      if (!validateIfEmail(userId)) {
        loadRecentlyPublished(userId, setLastPublishedList, toggleIsWorking, toggleIsPublishedLoading);
        getNumberOfPublishedMaterials(userId, setTotalPublications, toggleIsActivityWorking);
      }
    } else if (memoryUserId === undefined || (memoryUserId !== undefined && memoryUserId.length === 0)) {
      navigate("/");
    } else {
      toggleIsUserProfile(true);
      getLastViews(memoryUserId, "users/publishedDocuments", setLastPublishedList, toggleIsWorking, toggleIsPublishedLoading);
      const decodedToken:{
        email: string,
        exp: number,
        iat: number,
        id: string,
        isVerified: boolean,
      } = jwtDecode(memoryUserId);
      getUserDetails(
        decodedToken.id, 
        "Id", 
        setUserName, 
        setUserEmail, 
        setUserDescription,
        setUserFacebook, 
        setUserInstagram, 
        setUserLinkedin, 
        setUserPinterest, 
        setHelperUserId,
      );
    }
  }, [memoryUserId, userId]);

  useEffect(() => {
    if (helperUserId.length > 0 && ((userId !== undefined && validateIfEmail(userId)) || memoryUserId !== undefined)) {
      if (memoryUserId !== undefined) loadRecentlyPublished(helperUserId, setLastPublishedList, toggleIsWorking, toggleIsPublishedLoading);
      getNumberOfPublishedMaterials(helperUserId, setTotalPublications, toggleIsActivityWorking);
    }
  }, [helperUserId]);

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
              {userName.length === 0 ? "Profil użytkownika" : userName}
            </ProfileHeader>
            <ProfileUserDataEdit isOpened={areUserSettingsOpened} closeCallback={toggleAreUserSettingsOpened} />
            <ProfileContainer className="block-center">
              <ProfileUserDataComponent 
                isUserProfile={isUserProfile && isWorking}
                areUserSettingsOpened={areUserSettingsOpened}
                toggleAreUserSettingsOpened={toggleAreUserSettingsOpened}
                userDescription={userDescription}
                userJoiningDate={userJoiningDate}
                userEmail={userEmail}
                facebookLink={userFacebook}
                instagramLink={userInstagram}
                linkedinLink={userLinkedin}
                pinterestLink={userPinterest}
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
                      />, elem.viewsNumber !== undefined ? elem.viewsNumber : elem.views,
                      ], [<ThumbUpIcon style={{
                        color: "inherit",
                        fontSize: "1.3em", 
                        verticalAlign: "top", 
                      }}
                      />, elem.likesNumber !== undefined ? elem.likesNumber : elem.likes]]}
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
