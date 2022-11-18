/* 

    The SettingsSegmentComponent displays a given part of the settings page infrastructure

*/

import React, { useState } from "react";
import { motion } from "framer-motion";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";

import {
  SettingsSegment, SettingsBanner, SettingsBannerName, SettingsBannerOpener, 
  SettingsSegmentContent,
} from "src/styled/subpages/settings";

interface SettingsSegmentComponentInterface {
  segmentName: string,
  children: React.ReactNode,
}

const SettingsSegmentComponent:React.FC<SettingsSegmentComponentInterface> = ({
  segmentName,
  children,
}:SettingsSegmentComponentInterface) => {
  const [isOpened, toggleIsOpened] = useState<boolean>(false);

  return (
    <SettingsSegment>
      <SettingsBanner className="block-center">
        <SettingsBannerName>
          {segmentName}
        </SettingsBannerName>
        <SettingsBannerOpener>
        
          <motion.div
            style={{
              width: "fit-content",
              height: "fit-content",
              transformOrigin: "50% 35%",
              marginLeft: "auto",
              display: "block",
            }} 
            layout
            animate={{
              rotate: isOpened ? ["0deg", "180deg"] : ["180deg", "0deg"],
            }}
            transition={{
              duration: 0.4,
            }}
          >
            <ArrowDropDownCircleIcon
              style={{ color: "inherit", fontSize: "inherit" }} 
              onClick={() => toggleIsOpened(!isOpened)}
            />
          </motion.div>
        </SettingsBannerOpener>
      </SettingsBanner>
      <SettingsSegmentContent
        className="block-center"
        layout
        initial={{
          height: "0vh",
        }}
        animate={{
          height: isOpened ? ["0vh", "50vh"] : ["50vh", "0vh"],
        }}
        transition={{
          duration: 0.4,
        }}
      >
        {children}
      </SettingsSegmentContent>
    </SettingsSegment>
  );
};

export default SettingsSegmentComponent;
