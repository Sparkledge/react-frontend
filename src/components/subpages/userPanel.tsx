import React, {Suspense} from "react";
import { MainContainer } from "../../styled/main";
import { UserPanelHeader } from "../../styled/subpages/userpanel";

import { LandingSectionWrapper, LandingSectionFilter,
    LandingSectionHeader, LandingSectionSpan,
    LandingSectionDesc, LandingButtonWrapper, LandingSectionButton } from "../../styled/subpages/welcome";

const FooterComponent = React.lazy(() => import("../helperComponents/welcome/footerComponent"));

const UserPanel:React.FC = () => {
    return <MainContainer className="block-center">
        <Suspense fallback={<></>}>
            <LandingSectionWrapper className="block-center">
                <LandingSectionFilter>
                    <UserPanelHeader className="block-center">
                        Panel użytkownika
                    </UserPanelHeader>
                </LandingSectionFilter>
            </LandingSectionWrapper>
        <FooterComponent/>
        </Suspense>
    </MainContainer>
}

export default UserPanel;