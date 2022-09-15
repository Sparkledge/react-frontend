import React from "react";
import { UserPanelLastViewItem, UserPanelLastViewTitle, UserPanelLastViewAuthor } from "src/styled/subpages/userpanel";

interface LastViewItemComponentInterface {
  title: string,
  name: string,
  additionalData: [any, string | number][],
  isPublishedByUser: boolean,
}

const LastViewItemComponent:React.FC<LastViewItemComponentInterface> = ({
  title,
  name,
  additionalData, 
  isPublishedByUser,
} : LastViewItemComponentInterface) => (
  <UserPanelLastViewItem isPublishedByUser={isPublishedByUser}>
    <UserPanelLastViewTitle className="block-center">
      {title.length > 25 ? `${title.substring(0, 22)}...` : title}
    </UserPanelLastViewTitle>
    <UserPanelLastViewAuthor className="block-center">
      {name.length > 20 ? `${name.substring(0, 17)}...` : name}
    </UserPanelLastViewAuthor>
    {additionalData.map((elem, key) => (
      <UserPanelLastViewAuthor key="additional-data-render" className="block-center" marginBottom={2}>
        {elem[0]} 
        {" "}
        {typeof (elem[1]) === "string" ? elem[1].substring(0, 10) : elem[1]}
      </UserPanelLastViewAuthor>
    ))}
  </UserPanelLastViewItem>
);

export default LastViewItemComponent;
