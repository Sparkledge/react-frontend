/* 
    The Settings component is designed for giving the user an ability to change their account's settings, like password, public data etc.
*/

import React, { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";

import {
  SettingsContainer, SettingsHeader, SettingsWrapper, 
  SettingsSegmentSubHeader,
  SettingsSegmentInput,
  SettingsSegmentButton,
} from "src/styled/subpages/settings";

import { UserPanelDeleteNotification } from "src/styled/subpages/userpanel";

import Template from "src/components/subcomponents/template";

import SettingsSegmentComponent from "src/components/helperComponents/settings/settingsSegmentComponent";
import SettingsSegmentCheckboxComponent from "src/components/helperComponents/settings/settingsSegmentCheckboxComponent";

const Settings:React.FC = () => {
  const isBiggerThanTablet = useMediaQuery("(min-width: 768px)");

  const [newPassword, setNewPassword] = useState<string>("");
  const [newPasswordRep, setNewPasswordRep] = useState<string>("");
  const [notificationMessage, setNotificationMessage] = useState<string>("");
  const [newName, setNewName] = useState<string>("");
  const [newSurname, setNewSurname] = useState<string>("");

  const [isSortingMemorized, toggleIsSortingMemorized] = useState<boolean>(false);
  const [areFiltersMemorized, toggleAreFiltersMemorized] = useState<boolean>(false);

  const [isNotificationShown, toggleIsNotificationShown] = useState<boolean>(false);

  const triggerChangingThePersonalData = ():void => {
    setNotificationMessage("Dane zaktualizowane");
    toggleIsNotificationShown(true);
  };

  const triggerChangingThePassword = ():void => {
    setNotificationMessage("Hasło wysłane");
    toggleIsNotificationShown(true);
  };

  const triggerChangingTheSearcherData = ():void => {
    setNotificationMessage("Wyszukiwarka zaktualizowana");
    toggleIsNotificationShown(true);
  };

  useEffect(() => {
    if (isNotificationShown) setTimeout(() => toggleIsNotificationShown(false), 2000);
  }, [isNotificationShown]);

  return (
    <Template headTagTitle="Ustawienia - Sparkledge">
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
          <SettingsSegmentComponent segmentName="Ustawienia szukania">
            <SettingsSegmentCheckboxComponent 
              title={!isBiggerThanTablet ? "Pamiętaj sortowanie" : "Pamiętaj ustawienia sortowania"}
              isChecked={isSortingMemorized}
              onClickCallback={() => toggleIsSortingMemorized(!isSortingMemorized)}
            />
            <SettingsSegmentCheckboxComponent 
              title={!isBiggerThanTablet ? "Pamiętaj filtry" : "Pamiętaj ustawienia filtrów"}
              isChecked={areFiltersMemorized}
              onClickCallback={() => toggleAreFiltersMemorized(!areFiltersMemorized)}
            />
            <SettingsSegmentButton className="block-center" onClick={() => triggerChangingTheSearcherData()}>
              Zatwierdź
            </SettingsSegmentButton>
          </SettingsSegmentComponent>
        </SettingsWrapper>
      </SettingsContainer>
      <UserPanelDeleteNotification className="block-center" isOpened={isNotificationShown}>
        {notificationMessage}
      </UserPanelDeleteNotification>
    </Template>
  );
};

export default Settings;
