import React, {Suspense, useState, useEffect} from "react";
import { MainContainer, Preloader } from "../../styled/main";
import { LandingSectionWrapper, LandingSectionFilter } from "../../styled/subpages/welcome";
import { UserPanelHeader, UserPanelWelcomeSection, UserPanelLastView ,
    UserPanelLastViewHeader, UserPanelLastViewGallery, UserPanelLastViewItem,
    UserPanelLastViewTitle, UserPanelLastViewAuthor } from "../../styled/subpages/userpanel";


const FooterComponent = React.lazy(() => import("../helperComponents/welcome/footerComponent"));

const Background = require("../../assets/pattern_background.webp");

type LastViewItemType = {
    header: string,
    author: string,
    publishedOn: string
}

const UserPanel:React.FC = () => {

    const [lastViewedList, setLastViewedList] = useState<LastViewItemType[]>([]);

    useEffect(() => {
        setLastViewedList([
            {
                header: "Zastosowania doktorologii stosowanej",
                author: "Uszatekm",
                publishedOn: "19.04.2022"
            },
            {
                header: "Zastosowania doktorologii stosowanej",
                author: "Uszatekm",
                publishedOn: "19.04.2022"
            },
            {
                header: "Zastosowania doktorologii stosowanej",
                author: "Uszatekm",
                publishedOn: "19.04.2022"
            }
        ])
    }, []) 

    return <MainContainer className="block-center">
        <Suspense fallback={<Preloader className="block-center">Ładowanie...</Preloader>}>
            <LandingSectionWrapper className="block-center" source={Background} backgroundSize="contain">
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
                                    lastViewedList.map((elem, ind) => <UserPanelLastViewItem key={`last-viewed-${ind}`}>
                                        <UserPanelLastViewTitle className="block-center">
                                            {elem["header"].length > 30 ? elem["header"].substring(0,27)+"..." : elem["header"]}
                                        </UserPanelLastViewTitle>
                                        <UserPanelLastViewAuthor className="block-center">
                                            Autor: {elem["author"]}
                                        </UserPanelLastViewAuthor>
                                        <UserPanelLastViewAuthor className="block-center" marginBottom={0}>
                                            {elem["publishedOn"]}
                                        </UserPanelLastViewAuthor>
                                    </UserPanelLastViewItem>)
                                }
                            </UserPanelLastViewGallery>
                        </UserPanelLastView>
                        <UserPanelLastView width={40}>
                            <UserPanelLastViewHeader className="block-center">
                                Ostatnio publikowane
                            </UserPanelLastViewHeader>
                        </UserPanelLastView>
                    </UserPanelWelcomeSection>
                </LandingSectionFilter>
            </LandingSectionWrapper>
            <FooterComponent/>
        </Suspense>
    </MainContainer>
}

export default UserPanel;