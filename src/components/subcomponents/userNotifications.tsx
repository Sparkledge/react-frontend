/* 

    The UserNotifications component is meant to be used for displaying the user's personalized notifications regarding their account

*/

import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/redux/mainReducer";
import { AnimatePresence } from "framer-motion";
import useMediaQuery from "@mui/material/useMediaQuery";

import {
  UserNotificationsContainer, 
  UserNotificationsNotificationContainer, 
  UserNotificationsNotificationContent, 
  UserNotificationsNotificationHeader, 
} from "src/styled/subpages/userNotifications";

const UserNotifications:React.FC = () => {
  const isBiggerThanBigLaptop:boolean = useMediaQuery("(min-width: 1440px)");
  const isBiggerThanLaptop:boolean = useMediaQuery("(min-width: 1024px)");
  const isBiggerThanTablet:boolean = useMediaQuery("(min-width: 768px)");
  const isBiggerThanMobile:boolean = useMediaQuery("(min-width: 550px)");

  const [leftPosition, setLeftPosition] = useState<number>(100);

  const areGeneralNotificationsOpened:boolean = useSelector((state:RootState) => state.generalData.areNotificationsOpened);

  const listOfNotifications:{ title: string, content: string }[] = [{
    title: "Test Notification",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore vero dignissimos sit nobis, dicta molestias ipsam officia voluptate harum temporibus repudiandae obcaecati mollitia ipsum doloribus, optio blanditiis architecto, sed quidem.",
  }];

  const RenderedList = useMemo(() => listOfNotifications.map((elem: { title: string, content: string }) => (
    <UserNotificationsNotificationContainer className="block-center">
      <UserNotificationsNotificationHeader className="block-center">
        {elem.title}
      </UserNotificationsNotificationHeader>
      <UserNotificationsNotificationContent className="block-center">
        {elem.content}
      </UserNotificationsNotificationContent>
    </UserNotificationsNotificationContainer>
  )), [listOfNotifications]);

  useEffect(() => {
    setLeftPosition(!isBiggerThanMobile ? 0 : !isBiggerThanTablet ? 30 : !isBiggerThanLaptop ? 60 : 70);
  }, [areGeneralNotificationsOpened, isBiggerThanBigLaptop, isBiggerThanLaptop, isBiggerThanTablet, isBiggerThanMobile]);

  return (
    <AnimatePresence>
      {areGeneralNotificationsOpened ? (
        <UserNotificationsContainer
          className="block-center" 
          layout
          initial={{
            position: "absolute",
            top: "0vh",
            left: "100%",
          }}
          animate={{
            left: ["100%", `${leftPosition}%`],
          }}
          exit={{
            left: [`${leftPosition}%`, "100%"],
          }}
          transition={{
            duration: 0.2,
            delay: 0.05,
          }}
        >
          {RenderedList}
        </UserNotificationsContainer>
      ) : null}

    </AnimatePresence>
  );
};

export default UserNotifications;
