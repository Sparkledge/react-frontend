import React from "react";
import { UserPanelLastViewItem, UserPanelLastViewTitle, UserPanelLastViewAuthor } from "../../../styled/subpages/userpanel";

interface LastViewItemComponentInterface {
  title: string,
  name: string,
  additionalData: [any, string][]
}

const LastViewItemComponent:React.FC<LastViewItemComponentInterface> = ({
  title,
  name,
  additionalData, 
} : LastViewItemComponentInterface) => (
  <UserPanelLastViewItem>
    <UserPanelLastViewTitle className="block-center">
      {title.length > 30 ? `${title.substring(0, 27)}...` : title}
    </UserPanelLastViewTitle>
    <UserPanelLastViewAuthor className="block-center">
      {name.length > 20 ? `${name.substring(0, 17)}...` : name}
    </UserPanelLastViewAuthor>
    {additionalData.map((elem, key) => (
      <UserPanelLastViewAuthor key="additional-data-render" className="block-center" marginBottom={2}>
        {elem[0]} 
        {" "}
        {elem[1].substring(0, 10)}
      </UserPanelLastViewAuthor>
    ))}
  </UserPanelLastViewItem>
);

export default LastViewItemComponent;
