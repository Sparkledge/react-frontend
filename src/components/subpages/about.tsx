import React from "react";

import { MainContainer } from "../../styled/main";
import { LandingSectionWrapper } from "../../styled/subpages/welcome";
import { AboutHeader, AboutDesc, AboutTeamSection, AboutTeamWidget,
    AboutTeamWidgetPhotoContainer, AboutTeamWidgetPhoto, AboutTeamWidgetTextSection,
    AboutTeamWidgetName, AboutTeamWidgetPosition, AboutTeamWidgetDesc } from "../../styled/subpages/about";

import FooterComponent from "../helperComponents/welcome/footerComponent";

import TeamData from "../../data/about";

const About:React.FC = () => {

    return <MainContainer className="block-center">
        <LandingSectionWrapper className="block-center">
            <AboutHeader className="block-center">
                O nas
            </AboutHeader>
            <AboutDesc className="block-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex consequuntur incidunt repellendus delectus fugiat sit ut dolores perferendis aperiam aliquid quaerat accusamus itaque maiores atque impedit autem sequi, soluta ullam.    
            </AboutDesc>
            <AboutTeamSection className="block-center">
                {
                    TeamData !== undefined ? TeamData.map((elem, ind) => <AboutTeamWidget className="block-center" key={"team-member-"+ind}>
                    <AboutTeamWidgetPhotoContainer>
                        <AboutTeamWidgetPhoto src={elem["photo"]}/>
                    </AboutTeamWidgetPhotoContainer>
                    <AboutTeamWidgetTextSection>
                        <AboutTeamWidgetName className="block-center">
                            {elem["name"]}
                        </AboutTeamWidgetName>
                        <AboutTeamWidgetPosition className="block-center">
                            {elem["position"]}    
                        </AboutTeamWidgetPosition>
                        <AboutTeamWidgetDesc className="block-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus totam, voluptate obcaecati suscipit rem quo officiis non vitae hic nesciunt ipsam quae modi quisquam fugit! Eius modi quaerat necessitatibus ipsum.
                        </AboutTeamWidgetDesc>
                    </AboutTeamWidgetTextSection>
                </AboutTeamWidget>): <></>
                }
                
            </AboutTeamSection>
        </LandingSectionWrapper>
        <FooterComponent/>
    </MainContainer>
};

export default About;