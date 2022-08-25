import React, { Suspense, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import useLocalStorage from "use-local-storage";

import { MainContainer, Preloader } from "../../styled/main";
import { LandingSectionWrapper, LandingSectionFilter, EndingBlock } from "../../styled/subpages/welcome";
import {
  UserPanelHeader, UserPanelWelcomeSection, UserPanelLastView,
  UserPanelLastViewHeader, UserPanelLastViewGallery, UserPanelLastViewNoItemsHeader, 
} from "../../styled/subpages/userpanel";

import LastViewItemComponent from "../helperComponents/userPanel/LastViewItemComponent";
import { RootState } from "../../redux/mainReducer";

import getLastViews from "../../connectionFunctions/userPanel/loadLastViews";

const FooterComponent = React.lazy(() => import("../helperComponents/welcome/footerComponent"));

const Background = require("../../assets/pattern_background4_1.webp");

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
  title: string,
  publishedOn: string,
  likes: number,
  views: number
};

const UserPanel:React.FC = () => {
  const [lastViewedList, setLastViewedList] = useState<LastViewItemType[]>([]);
  const [lastPublishedList, setLastPublishedList] = useState<LastPublishedItemType[]>([]);
  const [isWorking, toggleIsWorking] = useState<boolean>(true);
  const currentToken:string = useSelector((state: RootState) => state.generalData.currentToken);
  const navigate = useNavigate();
  const [memoryUserId, setMemoryUserId] = useLocalStorage<string>("u", "");

  useEffect(() => {
    if (memoryUserId.length === 0 || memoryUserId === undefined) navigate("/");
    else {
      getLastViews(memoryUserId, setLastViewedList, toggleIsWorking);
    }
  }, [currentToken, memoryUserId]);

  return (
    <MainContainer className="block-center">
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
              <UserPanelLastView width={60}>
                <UserPanelLastViewHeader className="block-center">
                  Ostatnio przeglądane
                </UserPanelLastViewHeader>
                <UserPanelLastViewGallery className="block-center">
                  {
                      lastViewedList.length > 0 && isWorking ? lastViewedList.map((elem, ind) => (
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
                          />
                        </Link>
                      )) : (
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
                      lastPublishedList.length > 0 ? lastPublishedList.map((elem, ind) => (
                        <LastViewItemComponent
                          key="last-published-material"
                          title={elem.title}
                          name={`Autor: ${" "}`} 
                          additionalData={[]}
                        />
                      )) : (
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
