/* 
    The Template component is meant to be used to speed up creating 
    new pages in Sparkledge
*/

import React, { useEffect, useState, Suspense } from "react";

import { MainContainer } from "src/styled/main";
import { UserPanelDeleteNotification } from "src/styled/subpages/userpanel";
import { LandingSectionWrapper, LandingSectionFilter, EndingBlock } from "src/styled/subpages/welcome";

import HeadTags from "./headTags";
import UserNotifications from "./userNotifications";

const BackgroundPattern = require("../../assets/pattern_background5.webp");

const FooterComponent = React.lazy(() => import("src/components/helperComponents/welcome/footerComponent"));

interface TemplateInterface {
  children: any,
  headTagTitle: string,
  notificationContent?: string,
  headTagDesc?: string,
  bottomPadding?: number,
  fallbackComponent?: JSX.Element,
}

const Template:React.FC<TemplateInterface> = ({
  children,
  headTagTitle,
  notificationContent,
  headTagDesc,
  bottomPadding,
  fallbackComponent,
}:TemplateInterface) => {
  const [isNotificationShown, toggleIsNotificationShown] = useState<boolean>(false); // this kind of notification is used for displaying a temporary info, for example the result of changing the password, the user settings etc.

  useEffect(() => {
    if (notificationContent !== undefined && notificationContent.length > 0) {
      toggleIsNotificationShown(true);
    }
  }, [notificationContent]);

  useEffect(() => {
    if (isNotificationShown) setTimeout(() => toggleIsNotificationShown(false), 2000);
  }, [isNotificationShown]);

  return (
    <MainContainer className="block-center">
      <HeadTags areAdsOn={false} title={headTagTitle} description={headTagDesc !== undefined ? headTagDesc : ""} />
      {fallbackComponent !== undefined ? (
        <Suspense fallback={fallbackComponent}>
          <LandingSectionWrapper
            className="block-center"
            source={BackgroundPattern}
            backgroundSize="initial"
            backgroundRepeat="repeat"
            bottomPadding={bottomPadding}
          >
            <LandingSectionFilter>
              {children}
              <UserNotifications />
              <UserPanelDeleteNotification className="block-center" isOpened={isNotificationShown}>
                {notificationContent}
              </UserPanelDeleteNotification>
              <EndingBlock />
            </LandingSectionFilter>
          </LandingSectionWrapper>
        </Suspense>
      ) : (
        <LandingSectionWrapper
          className="block-center"
          source={BackgroundPattern}
          backgroundSize="initial"
          backgroundRepeat="repeat"
          bottomPadding={bottomPadding}
        >
          <LandingSectionFilter>
            {children}
            <UserNotifications />
            <UserPanelDeleteNotification className="block-center" isOpened={isNotificationShown}>
              {notificationContent}
            </UserPanelDeleteNotification>
            <EndingBlock />
          </LandingSectionFilter>
        </LandingSectionWrapper>
      )}
    
      <Suspense fallback={null}>
        <FooterComponent />
      </Suspense>
    </MainContainer>
  );
};

Template.defaultProps = {
  notificationContent: "",
  headTagDesc: "",
  bottomPadding: undefined,
  fallbackComponent: undefined,
};

export default Template;
