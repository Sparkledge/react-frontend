/* 
    The Settings component is designed for giving the user an ability to change their account's settings, like password, public data etc.
*/

import React, { useState, useEffect } from "react";
import { MainContainer } from "src/styled/main";
import { LandingSectionWrapper, LandingSectionFilter } from "src/styled/subpages/welcome";

import {
  SettingsContainer, SettingsHeader, SettingsWrapper, 
  SettingsSegmentSubHeader,
  SettingsSegmentInput,
  SettingsSegmentButton,
} from "src/styled/subpages/settings";

import { UserPanelDeleteNotification } from "src/styled/subpages/userpanel";

import SettingsSegmentComponent from "src/components/helperComponents/settings/settingsSegmentComponent";

import HeadTags from "../subcomponents/headTags";

const BackgroundPattern = require("../../assets/pattern_background5.webp");

const Settings:React.FC = () => {
  const [newPassword, setNewPassword] = useState<string>("");
  const [newPasswordRep, setNewPasswordRep] = useState<string>("");
  const [notificationMessage, setNotificationMessage] = useState<string>("");
  const [newName, setNewName] = useState<string>("");
  const [newSurname, setNewSurname] = useState<string>("");

  const [isNotificationShown, toggleIsNotificationShown] = useState<boolean>(false);

  const triggerChangingThePersonalData = ():void => {
    setNotificationMessage("Dane zaktualizowane");
    toggleIsNotificationShown(true);
  };

  const triggerChangingThePassword = ():void => {
    setNotificationMessage("Hasło wysłane");
    toggleIsNotificationShown(true);
  };

  useEffect(() => {
    if (isNotificationShown) setTimeout(() => toggleIsNotificationShown(false), 2000);
  }, [isNotificationShown]);

  return (
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
              <SettingsSegmentComponent segmentName="Ustawienia ogólne">
                <SettingsSegmentSubHeader className="block-center">
                  Zmiana hasła
                </SettingsSegmentSubHeader>
                <SettingsSegmentInput
                  className="block-center"
                  type="text"
                  placeholder="Nowe hasło..."
                  value={newPassword}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setNewPassword(event.currentTarget.value)}
                />
                <SettingsSegmentInput
                  className="block-center"
                  type="text"
                  placeholder="Powtórz hasło..." 
                  value={newPasswordRep}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setNewPasswordRep(event.currentTarget.value)}
                />
                <SettingsSegmentButton className="block-center" onClick={() => triggerChangingThePassword()}>
                  Zmień hasło
                </SettingsSegmentButton>
                <SettingsSegmentSubHeader className="block-center">
                  Zmiana Danych osobowych
                </SettingsSegmentSubHeader>
                <SettingsSegmentInput
                  className="block-center"
                  type="text"
                  placeholder="Nowe imię..."
                  value={newName}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setNewName(event.currentTarget.value)}
                />
                <SettingsSegmentInput
                  className="block-center"
                  type="text"
                  placeholder="Nowe nazwisko..." 
                  value={newSurname}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setNewSurname(event.currentTarget.value)}
                />
                <SettingsSegmentButton className="block-center" onClick={() => triggerChangingThePersonalData()}>
                  Zatwierdź
                </SettingsSegmentButton>
              </SettingsSegmentComponent>
            </SettingsWrapper>
          </SettingsContainer>
          <UserPanelDeleteNotification className="block-center" isOpened={isNotificationShown}>
            {notificationMessage}
          </UserPanelDeleteNotification>
        </LandingSectionFilter>
      </LandingSectionWrapper>
    </MainContainer>
  );
};

export default Settings;
