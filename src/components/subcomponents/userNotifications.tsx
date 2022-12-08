/* 

    The UserNotifications component is meant to be used for displaying the user's personalized notifications regarding their account

*/

import React, { useMemo } from "react";
import {
  UserNotificationsContainer, 
  UserNotificationsNotificationContainer, 
  UserNotificationsNotificationContent, 
  UserNotificationsNotificationHeader, 
} from "src/styled/subpages/userNotifications";

const UserNotifications:React.FC = () => {
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

  return (
    <UserNotificationsContainer className="block-center">
      {RenderedList}
    </UserNotificationsContainer>
  );
};

export default UserNotifications;
