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
import checkTheTypeOfAccount from "src/connectionFunctions/main/checkTheTypeOfAccount";

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
    setNotificationMessage("Has??o wys??ane");
  };

  const triggerChangingTheSearcherData = ():void => {
    setNotificationMessage("Wyszukiwarka zaktualizowana");
  };

  useEffect(() => {
    if (memoryUserId === undefined || memoryUserId.length === 0) navigate("/");
    checkTheTypeOfAccount(memoryUserId);
  }, []);

  return (
    <Template headTagTitle="Ustawienia - Sparkledge" notificationContent={notificationMessage}>
      <SettingsContainer className="block-center">
        <SettingsHeader className="block-center">
          Ustawienia konta
        </SettingsHeader>
        <SettingsWrapper className="block-center">
          {areBasicSettingsAvailable ? (
            <SettingsSegmentComponent segmentName="Ustawienia og??lne">
              <SettingsSegmentSubHeader className="block-center">
                Zmiana has??a
              </SettingsSegmentSubHeader>
              <SettingsSegmentInput
                className="block-center"
                type="text"
                placeholder="Nowe has??o..."
                value={newPassword}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setNewPassword(event.currentTarget.value)}
              />
              <SettingsSegmentInput
                className="block-center"
                type="text"
                placeholder="Powt??rz has??o..." 
                value={newPasswordRep}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setNewPasswordRep(event.currentTarget.value)}
              />
              <SettingsSegmentButton className="block-center" onClick={() => triggerChangingThePassword()}>
                Zmie?? has??o
              </SettingsSegmentButton>
              <SettingsSegmentSubHeader className="block-center">
                Zmiana Danych osobowych
              </SettingsSegmentSubHeader>
              <SettingsSegmentInput
                className="block-center"
                type="text"
                placeholder="Nowe imi??..."
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
                Zatwierd??
              </SettingsSegmentButton>
            </SettingsSegmentComponent>
          ) : null}
          <SettingsSegmentComponent segmentName="Ustawienia szukania">
            <SettingsSegmentCheckboxComponent 
              title={!isBiggerThanTablet ? "Pami??taj wyszukiwanie" : "Pami??taj ustawienia wyszukiwania"}
              isChecked={areBasicSettingsMemorized}
              onClickCallback={() => toggleAreBasicSettingsMemorized(!areBasicSettingsMemorized)}
            />
            <SettingsSegmentCheckboxComponent 
              title={!isBiggerThanTablet ? "Pami??taj sortowanie" : "Pami??taj ustawienia sortowania"}
              isChecked={isSortingMemorized}
              onClickCallback={() => toggleIsSortingMemorized(!isSortingMemorized)}
            />
            <SettingsSegmentCheckboxComponent 
              title={!isBiggerThanTablet ? "Pami??taj filtry" : "Pami??taj ustawienia filtr??w"}
              isChecked={areFiltersMemorized}
              onClickCallback={() => toggleAreFiltersMemorized(!areFiltersMemorized)}
            />
            <SettingsSegmentButton className="block-center" onClick={() => triggerChangingTheSearcherData()}>
              Zatwierd??
            </SettingsSegmentButton>
          </SettingsSegmentComponent>
        </SettingsWrapper>
      </SettingsContainer>
    </Template>
  );
};

export default Settings;
