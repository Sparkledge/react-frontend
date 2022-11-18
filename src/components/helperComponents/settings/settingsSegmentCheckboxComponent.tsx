/* 
    The settingsSegmentCheckboxComponent is meant to be used when there 
    is a need for a checkbox in the settings component
*/

import React from "react";

import {
  SettingsSegmentCheckbox,
  SettingsSegmentCheckboxWrapper,
  SettingsSegmentCheckboxText,
} from "src/styled/subpages/settings";

interface SettingsSegmentCheckboxComponentInterface {
  title: string,
  isChecked: boolean,
  onClickCallback: () => void
}

const SettingsSegmentCheckboxComponent:React.FC<SettingsSegmentCheckboxComponentInterface> = ({
  title,
  isChecked,
  onClickCallback,
}:SettingsSegmentCheckboxComponentInterface) => (
  <SettingsSegmentCheckboxWrapper className="block-center">
    <SettingsSegmentCheckboxText>
      {title}
    </SettingsSegmentCheckboxText>
    <SettingsSegmentCheckbox
      className="block-center"
      isChecked={isChecked}
      onClick={onClickCallback}
    />
  </SettingsSegmentCheckboxWrapper>
);

export default SettingsSegmentCheckboxComponent;
