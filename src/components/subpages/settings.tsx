/* 
    The Settings component is designed for giving the user an ability to change their account's settings, like password, public data etc.
*/

import React, { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";

import {
  SettingsContainer, SettingsHeader, SettingsWrapper, 
  SettingsSegmentSubHeader,
  SettingsSegmentInput,
  SettingsSegmentButton,
} from "src/styled/subpages/settings";

import Template from "src/components/subcomponents/template";

import SettingsSegmentComponent from "src/components/helperComponents/settings/settingsSegmentComponent";
import SettingsSegmentCheckboxComponent from "src/components/helperComponents/settings/settingsSegmentCheckboxComponent";

import changePersonalData from "src/connectionFunctions/settings/changePersonalData";

const Settings:React.FC = () => {
  const isBiggerThanTablet = useMediaQuery("(min-width: 768px)");

  const [newPassword, setNewPassword] = useState<string>("");
  const [newPasswordRep, setNewPasswordRep] = useState<string>("");
  const [notificationMessage, setNotificationMessage] = useState<string>("");
  const [newName, setNewName] = useState<string>("");
  const [newSurname, setNewSurname] = useState<string>("");

  const [areBasicSettingsAvailable, toggleAreBasicSettingsAvailable] = useState<boolean>(true);
  const [areBasicSettingsMemorized, toggleAreBasicSettingsMemorized] = useState<boolean>(false);
  const [isSortingMemorized, toggleIsSortingMemorized] = useState<boolean>(false);
  const [areFiltersMemorized, toggleAreFiltersMemorized] = useState<boolean>(false);

  const [memoryUserId, setMemoryUserId] = useLocalStorage<string>("u", "");
  const navigate = useNavigate();

  const triggerChangingThePersonalData = async () => {
    await changePersonalData(memoryUserId, newName, newSurname, setNotificationMessage, () => {
      setNewName("");
      setNewSurname("");
    });
  };

  const triggerChangingThePassword = ():void => {
    setNotificationMessage("Hasło wysłane");
  };

  const triggerChangingTheSearcherData = ():void => {
    setNotificationMessage("Wyszukiwarka zaktualizowana");
  };

  useEffect(() => {
    if (memoryUserId === undefined || memoryUserId.length === 0) navigate("/");
  }, []);

  return (
    <Template headTagTitle="Ustawienia - Sparkledge" notificationContent={notificationMessage}>
      <SettingsContainer className="block-center">
        <SettingsHeader className="block-center">
          Ustawienia konta
        </SettingsHeader>
        <SettingsWrapper className="block-center">
          {areBasicSettingsAvailable ? (
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
          ) : null}
          <SettingsSegmentComponent segmentName="Ustawienia szukania">
            <SettingsSegmentCheckboxComponent 
              title={!isBiggerThanTablet ? "Pamiętaj wyszukiwanie" : "Pamiętaj ustawienia wyszukiwania"}
              isChecked={areBasicSettingsMemorized}
              onClickCallback={() => toggleAreBasicSettingsMemorized(!areBasicSettingsMemorized)}
            />
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
    </Template>
  );
};

export default Settings;
