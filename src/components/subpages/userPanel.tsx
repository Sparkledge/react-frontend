import React, { Suspense, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import useLocalStorage from "use-local-storage";

import { MainContainer, Preloader } from "src/styled/main";
import { LandingSectionWrapper, LandingSectionFilter, EndingBlock } from "src/styled/subpages/welcome";
import {
  UserPanelHeader, UserPanelWelcomeSection, UserPanelLastView,
  UserPanelLastViewHeader, UserPanelLastViewGallery, UserPanelLastViewNoItemsHeader, 
} from "src/styled/subpages/userpanel";

import LastViewItemComponent from "src/components/helperComponents/userPanel/LastViewItemComponent";
import SearchingPreloaderComponent from "src/components/helperComponents/searcher/searchingPreloaderComponent";
import HeadTags from "src/components/subcomponents/headTags";
import { RootState } from "src/redux/mainReducer";

import getLastViews from "src/connectionFunctions/userPanel/loadLastViews";

const FooterComponent = React.lazy(() => import("../helperComponents/welcome/footerComponent"));

const Background = require("../../assets/pattern_background5.webp");

type LastViewItemType = {
  id: string,
  title: string,
  createdAt: string,
  user: {
    firstName: string,
    lastName: string
  }
};

type LastPublishedItemType = {
  id: string,
  title: string,
  publishedOn: string,
  likes: number,
  views: number,
  createdAt: string,
};

const UserPanel:React.FC = () => {
  const [lastViewedList, setLastViewedList] = useState<LastViewItemType[]>([]);
  const [lastPublishedList, setLastPublishedList] = useState<LastPublishedItemType[]>([]);
  const [mostPopularList, setMostPopularList] = useState<LastViewItemType[]>([]);
  const [isWorking, toggleIsWorking] = useState<boolean>(true);
  const [isViewsLoading, toggleIsViewsLoading] = useState<boolean>(false);
  const [isPublishedLoading, toggleIsPublishedLoading] = useState<boolean>(false);
  const [isMostPopularLoading, toggleIsMostPopularLoading] = useState<boolean>(false);
  const currentToken:string = useSelector((state: RootState) => state.generalData.currentToken);
  const navigate = useNavigate();
  const [memoryUserId, setMemoryUserId] = useLocalStorage<string>("u", "");

  useEffect(() => {
    if (memoryUserId.length === 0 || memoryUserId === undefined) navigate("/");
    else {
      toggleIsViewsLoading(true);
      toggleIsPublishedLoading(true);
      toggleIsMostPopularLoading(true);
      getLastViews(memoryUserId, "users/viewedDocuments", setLastViewedList, toggleIsWorking, toggleIsViewsLoading);
      getLastViews(memoryUserId, "users/publishedDocuments", setLastPublishedList, toggleIsWorking, toggleIsPublishedLoading);
      getLastViews(memoryUserId, "documents/most-popular", setMostPopularList, toggleIsWorking, toggleIsMostPopularLoading);
    }
  }, [currentToken, memoryUserId]);

  return (
    <MainContainer className="block-center">
      <HeadTags areAdsOn={false} title="User Panel - Sparkledge" description="" />
      <Suspense fallback={<Preloader className="block-center">Ładowanie...</Preloader>}>
        <LandingSectionWrapper
          className="block-center"
          source={Background}
          backgroundSize="initial"
          bottomPadding={0}
          backgroundRepeat="repeat"
        >
          <LandingSectionFilter>
            <UserPanelHeader className="block-center">
              Panel użytkownika
            </UserPanelHeader>
            <UserPanelWelcomeSection className="block-center">
              <UserPanelLastView width={100}>
                <UserPanelLastViewHeader className="block-center">
                  Ostatnio przeglądane
                </UserPanelLastViewHeader>
                <UserPanelLastViewGallery className="block-center">
                  {
                    mostPopularList.length > 0 && isWorking && !isMostPopularLoading ? mostPopularList.map((elem, ind) => (
                      <Link to={`/document/${elem.id}`}>
                        <LastViewItemComponent
                          key="last-view-material"
                          title={elem.title}
                          name={`${elem.user.firstName} ${elem.user.lastName}`}
                          additionalData={[[<PublishedWithChangesIcon style={{
                            color: "inherit",
                            fontSize: "1.3em", 
                            verticalAlign: "top", 
                          }}
                          />, elem.createdAt]]}
                          isPublishedByUser={false}
                        />
                      </Link>
                    )) : isMostPopularLoading ? (
                      <SearchingPreloaderComponent />
                    ) : (
                      <UserPanelLastViewNoItemsHeader className="block-center">
                        {!isWorking ? "Błąd połączenia. Spróbuj ponownie" : "Brak danych"}
                      </UserPanelLastViewNoItemsHeader>
                    )
                  }
                </UserPanelLastViewGallery>
              </UserPanelLastView>
            </UserPanelWelcomeSection>
            <UserPanelWelcomeSection className="block-center">
              <UserPanelLastView width={60}>
                <UserPanelLastViewHeader className="block-center">
                  Ostatnio przeglądane
                </UserPanelLastViewHeader>
                <UserPanelLastViewGallery className="block-center">
                  {
                      lastViewedList.length > 0 && isWorking && !isViewsLoading ? lastViewedList.map((elem, ind) => (
                        <Link to={`/document/${elem.id}`}>
                          <LastViewItemComponent
                            key="last-view-material"
                            title={elem.title}
                            name={`${elem.user.firstName} ${elem.user.lastName}`}
                            additionalData={[[<PublishedWithChangesIcon style={{
                              color: "inherit",
                              fontSize: "1.3em", 
                              verticalAlign: "top", 
                            }}
                            />, elem.createdAt]]}
                            isPublishedByUser={false}
                          />
                        </Link>
                      )) : isViewsLoading ? (
                        <SearchingPreloaderComponent />
                      ) : (
                        <UserPanelLastViewNoItemsHeader className="block-center">
                          {!isWorking ? "Błąd połączenia. Spróbuj ponownie" : "Brak danych"}
                        </UserPanelLastViewNoItemsHeader>
                      )
                    }
                </UserPanelLastViewGallery>
              </UserPanelLastView>
              <UserPanelLastView width={40}>
                <UserPanelLastViewHeader className="block-center">
                  Ostatnio publikowane
                </UserPanelLastViewHeader>
                <UserPanelLastViewGallery className="block-center">
                  {
                      lastPublishedList.length > 0 && !isPublishedLoading ? lastPublishedList.map((elem, ind) => (
                        <Link to={`/document/${elem.id}`}>
                          <LastViewItemComponent
                            key="last-published-material"
                            title={elem.title}
                            name={" "} 
                            additionalData={[[<PublishedWithChangesIcon style={{
                              color: "inherit",
                              fontSize: "1.3em", 
                              verticalAlign: "top", 
                            }}
                            />, elem.createdAt]]}
                            isPublishedByUser
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

export default UserPanel;
