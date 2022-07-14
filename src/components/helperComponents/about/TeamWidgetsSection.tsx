import React from "react";

import {
  AboutTeamSection, AboutTeamWidget, AboutTeamWidgetPhotoContainer, AboutTeamWidgetPhoto,
  AboutTeamWidgetTextSection, AboutTeamWidgetName, AboutTeamWidgetPosition, AboutTeamWidgetDesc, 
} from "../../../styled/subpages/about";

import TeamData from "../../../data/about";

const TeamWidgetsSection:React.FC = () => (
  <AboutTeamSection className="block-center">
    {
            TeamData !== undefined ? TeamData.map((elem, ind) => (
              <AboutTeamWidget className="block-center" key="team-member-widget">
                <AboutTeamWidgetPhotoContainer>
                  <AboutTeamWidgetPhoto src={elem.photo} />
                </AboutTeamWidgetPhotoContainer>
                <AboutTeamWidgetTextSection>
                  <AboutTeamWidgetName className="block-center">
                    {elem.name}
                  </AboutTeamWidgetName>
                  <AboutTeamWidgetPosition className="block-center">
                    {elem.position}    
                  </AboutTeamWidgetPosition>
                  <AboutTeamWidgetDesc className="block-center">
                    {elem.describe}
                  </AboutTeamWidgetDesc>
                </AboutTeamWidgetTextSection>
              </AboutTeamWidget>
            )) : null
        }
        
  </AboutTeamSection>
);

export default TeamWidgetsSection;
