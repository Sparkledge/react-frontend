/* 
    The profile subpage is used to display the informations about the user given. If the user is signed in and is displaying
    their own profile, this subpage also works as the settings one
*/

import React, {
  useState, useEffect, useMemo, 
} from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";
import jwtDecode from "jwt-decode";

import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

import { EndingBlock } from "src/styled/subpages/welcome";
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
import SearchingPreloaderComponent from "src/components/helperComponents/searcher/searchingPreloaderComponent";
import LastViewItemComponent from "src/components/helperComponents/userPanel/LastViewItemComponent";
import ProfileUserDataEdit from "src/components/helperComponents/profile/profileUserDataEdit";
import ProfileUserDataComponent from "src/components/helperComponents/profile/profileUserDataComponent";

import { LastPublishedItemType } from "src/connectionFunctions/userPanel/deleteMaterial";

import loadRecentlyPublished from "src/connectionFunctions/profile/loadRecentlyPublished";
import getNumberOfPublishedMaterials from "src/connectionFunctions/profile/getNumberOfPublishedMaterials";
import getUserDetails from "src/connectionFunctions/profile/getUserDetails";
import getLastViews from "src/connectionFunctions/userPanel/loadLastViews";

import Template from "../subcomponents/template";

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
  const [totalLikes, setTotalLikes] = useState<number>(-1);
  const [isUserProfile, toggleIsUserProfile] = useState<boolean>(false);
  const [isWorking, toggleIsWorking] = useState<boolean>(true);
  const [areUserSettingsOpened, toggleAreUserSettingsOpened] = useState<boolean>(false);
  const [lastPublishedList, setLastPublishedList] = useState<LastPublishedItemType[]>([]);
  const [isPublishedLoading, toggleIsPublishedLoading] = useState<boolean>(false);
  const [notificationMessage, setNotificationMessage] = useState<string>("");
  const [memoryUserId, setMemoryUserId] = useLocalStorage<string>("u", "");

  const { userId } = useParams();
  const navigate = useNavigate();

  const LastPublishedMaterials = useMemo(() => lastPublishedList.length > 0 && !isPublishedLoading ? lastPublishedList.map((elem, ind) => (
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
  ), [lastPublishedList]);

  useEffect(() => {
    if (userId !== undefined) {
      toggleIsUserProfile(false);
      getUserDetails(
        userId, 
        validateIfEmail(userId) ? "Email" : "Id", 
        setUserName, 
        setUserEmail,
        setUserJoiningDate, 
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
        setUserJoiningDate,
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
    <Template
      headTagTitle="Profil użytkownika - Sparkledge"
      fallbackComponent={<SearchingPreloaderComponent />}
      notificationContent={notificationMessage}
    >
      <ProfileHeader className="block-center">
        {userName.length === 0 ? "Profil użytkownika" : userName}
      </ProfileHeader>
      {isUserProfile ? (
        <ProfileUserDataEdit
          isOpened={areUserSettingsOpened}
          userDescription={userDescription}
          setUserDescription={setUserDescription}
          userFb={userFacebook}
          setUserFacebook={setUserFacebook}
          userIg={userInstagram}
          setUserInstagram={setUserInstagram}
          userLk={userLinkedin}
          setUserLinkedin={setUserLinkedin}
          userPt={userPinterest}
          setUserPinterest={setUserPinterest}
          setNotificationMessage={setNotificationMessage}
          closeCallback={toggleAreUserSettingsOpened}
        />
      ) : null}
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
                    {totalLikes === -1 ? null : (
                      <ProfilePublishingInfoContainer className="block-center">
                        Polubienia: 
                        {" "}
                        {totalLikes}
                      </ProfilePublishingInfoContainer>
                    )}
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
            {LastPublishedMaterials}
          </UserPanelLastViewGallery>
        </UserPanelLastView>
      </UserPanelWelcomeSection>
      <EndingBlock />
    </Template>
  );
};

export default Profile;
