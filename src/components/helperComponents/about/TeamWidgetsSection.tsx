import React from "react";

import { AboutTeamSection, AboutTeamWidget, AboutTeamWidgetPhotoContainer, AboutTeamWidgetPhoto,
AboutTeamWidgetTextSection, AboutTeamWidgetName, AboutTeamWidgetPosition, AboutTeamWidgetDesc } from "../../../styled/subpages/about";


import TeamData from "../../../data/about";

const TeamWidgetsSection:React.FC = () => {
    return <AboutTeamSection className="block-center">
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
};

export default TeamWidgetsSection;