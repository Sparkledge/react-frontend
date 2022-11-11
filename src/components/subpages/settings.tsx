/* 
    The Settings component is designed for giving the user an ability to change their account's settings, like password, public data etc.
*/

import React from "react";
import { MainContainer } from "src/styled/main";
import { LandingSectionWrapper, LandingSectionFilter } from "src/styled/subpages/welcome";

import {
  SettingsContainer, SettingsHeader, SettingsWrapper, 
} from "src/styled/subpages/settings";

import SettingsSegmentComponent from "src/components/helperComponents/settings/settingsSegmentComponent";

import HeadTags from "../subcomponents/headTags";

const BackgroundPattern = require("../../assets/pattern_background5.webp");

const Settings:React.FC = () => (
  <MainContainer className="block-center">
    <HeadTags areAdsOn={false} title="Ustawienia konta - Sparkledge" description="" />
    <LandingSectionWrapper
      className="block-center"
      source={BackgroundPattern}
      backgroundSize="initial"
      backgroundRepeat="repeat"
    >
      <LandingSectionFilter>
        <SettingsContainer className="block-center">
          <SettingsHeader className="block-center">
            Ustawienia konta
          </SettingsHeader>
          <SettingsWrapper className="block-center">
            <SettingsSegmentComponent segmentName="Ustawienia ogólne" />
          </SettingsWrapper>
        </SettingsContainer>
      </LandingSectionFilter>
    </LandingSectionWrapper>
  </MainContainer>
);

export default Settings;
