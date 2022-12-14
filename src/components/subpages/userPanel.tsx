import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DeleteIcon from "@mui/icons-material/Delete";
// import useLocalStorage from "use-local-storage";
import { useLocalStorage } from "usehooks-ts";

import { Preloader } from "src/styled/main";
import { EndingBlock } from "src/styled/subpages/welcome";
import {
  UserPanelHeader, UserPanelWelcomeSection, UserPanelLastView,
  UserPanelLastViewHeader, UserPanelLastViewGallery, UserPanelLastViewNoItemsHeader, 
  UserPanelDeleteNotification,
} from "src/styled/subpages/userpanel";

import Template from "src/components/subcomponents/template";
import LastViewItemComponent from "src/components/helperComponents/userPanel/LastViewItemComponent";
import SearchingPreloaderComponent from "src/components/helperComponents/searcher/searchingPreloaderComponent";
import { RootState } from "src/redux/mainReducer";

import getLastViews from "src/connectionFunctions/userPanel/loadLastViews";
import deleteMaterial, { LastPublishedItemType } from "src/connectionFunctions/userPanel/deleteMaterial";

type LastViewItemType = {
  id: string,
  title: string,
  createdAt: string,
  user: {
    firstName: string,
    lastName: string
  }
};

type MostPopularItemType = {
  id: string,
  title: string,
  createdAt: string,
  viewsNumber: number,
  likesNumber: number,
  user: {
    firstName: string,
    lastName: string
  }
};

const UserPanel:React.FC = () => {
  const [lastViewedList, setLastViewedList] = useState<LastViewItemType[]>([]);
  const [lastPublishedList, setLastPublishedList] = useState<LastPublishedItemType[]>([]);
  const [mostPopularList, setMostPopularList] = useState<MostPopularItemType[]>([]);
  const [isWorking, toggleIsWorking] = useState<boolean>(true);
  const [isViewsLoading, toggleIsViewsLoading] = useState<boolean>(false);
  const [isPublishedLoading, toggleIsPublishedLoading] = useState<boolean>(false);
  const [isMostPopularLoading, toggleIsMostPopularLoading] = useState<boolean>(false);
  const currentToken:string = useSelector((state: RootState) => state.generalData.currentToken);
  const navigate = useNavigate();
  const [memoryUserId, setMemoryUserId] = useLocalStorage<string>("u", "");
  const [isLoading, toggleIsLoading] = useState<boolean>(false);
  const [notificationContent, setNotificationContent] = useState<string>("");

  useEffect(() => {
    if (memoryUserId === undefined) toggleIsLoading(true);
    else {
      toggleIsLoading(false);
      if (memoryUserId.length === 0) navigate("/");
      else {
        toggleIsViewsLoading(true);
        toggleIsPublishedLoading(true);
        toggleIsMostPopularLoading(true);
        getLastViews(memoryUserId, "users/viewedDocuments", setLastViewedList, toggleIsWorking, toggleIsViewsLoading);
        getLastViews(memoryUserId, "users/publishedDocuments", setLastPublishedList, toggleIsWorking, toggleIsPublishedLoading);
        getLastViews(memoryUserId, "documents/most-popular", setMostPopularList, toggleIsWorking, toggleIsMostPopularLoading);
      }
    }
  }, [currentToken, memoryUserId]);

  return (
    <Template
      headTagTitle="User Panel - Sparkledge"
      notificationContent={notificationContent}
      bottomPadding={0} 
      fallbackComponent={<Preloader className="block-center">??adowanie...</Preloader>}
    >
      <UserPanelHeader className="block-center">
        Panel u??ytkownika
      </UserPanelHeader>
      {isLoading ? <SearchingPreloaderComponent /> : (
        <>
          <UserPanelWelcomeSection className="block-center">
            <UserPanelLastView width={100}>
              <UserPanelLastViewHeader className="block-center">
                Najbardziej popularne
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
                          />, elem.createdAt], [<VisibilityIcon style={{
                            color: "inherit",
                            fontSize: "1.3em", 
                            verticalAlign: "top", 
                          }}
                          />, elem.viewsNumber,
                          ], [<ThumbUpIcon style={{
                            color: "inherit",
                            fontSize: "1.3em", 
                            verticalAlign: "top", 
                          }}
                          />, elem.likesNumber]]}
                          isPublishedByUser={false}
                        />
                      </Link>
                    )) : isMostPopularLoading ? (
                      <SearchingPreloaderComponent />
                    ) : (
                      <UserPanelLastViewNoItemsHeader className="block-center">
                        {!isWorking ? "B????d po????czenia. Spr??buj ponownie" : "Brak danych"}
                      </UserPanelLastViewNoItemsHeader>
                    )
                  }
              </UserPanelLastViewGallery>
            </UserPanelLastView>
          </UserPanelWelcomeSection>
          <UserPanelWelcomeSection className="block-center">
            <UserPanelLastView width={60}>
              <UserPanelLastViewHeader className="block-center">
                Ostatnio przegl??dane
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
                          {!isWorking ? "B????d po????czenia. Spr??buj ponownie" : "Brak danych"}
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
                        <LastViewItemComponent
                          key="last-published-material"
                          title={elem.title}
                          name={" "} 
                          additionalData={[[
                            <DeleteIcon
                              style={{
                                color: "inherit",
                                fontSize: "1.3em",
                                verticalAlign: "top",
                                zIndex: 2,
                              }}
                              onClick={() => { deleteMaterial(memoryUserId, elem.id, lastPublishedList, setLastPublishedList); setNotificationContent("Dokument zosta?? usuni??ty"); }}
                            />, "",
                          ], [
                            <Link to={`/document/${elem.id}`} style={{ color: "inherit" }}>
                              Przejd?? do dokumentu
                            </Link>, "",
                          ]]}
                          isPublishedByUser
                        />
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
        </>
      )}
    </Template>
  );
};

export default UserPanel;
