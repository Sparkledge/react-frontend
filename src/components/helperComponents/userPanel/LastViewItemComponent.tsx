import React from "react";
import { UserPanelLastViewItem, UserPanelLastViewTitle, UserPanelLastViewAuthor } from "../../../styled/subpages/userpanel";

interface LastViewItemComponentInterface {
  header: string,
  secondHeader: string,
  additionalData: [any, string][]
}

const LastViewItemComponent:React.FC<LastViewItemComponentInterface> = ({ header, secondHeader, additionalData } : LastViewItemComponentInterface) => (
  <UserPanelLastViewItem>
    <UserPanelLastViewTitle className="block-center">
      {header.length > 30 ? `${header.substring(0, 27)}...` : header}
    </UserPanelLastViewTitle>
    <UserPanelLastViewAuthor className="block-center">
      {secondHeader.length > 20 ? `${secondHeader.substring(0, 17)}...` : secondHeader}
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
