import React, { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";

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
} : LastViewItemComponentInterface) => {
  const isSmallerThanLaptop = useMediaQuery("(min-width: 1024px)");

  const [titleMaxLength, setTitleMaxLength] = useState<number>(25);
  const [nameMaxLength, setNameMaxLength] = useState<number>(22);

  useEffect(() => {
    setTitleMaxLength(isSmallerThanLaptop ? 25 : 16);
    setNameMaxLength(isSmallerThanLaptop ? 20 : 18);
  }, [isSmallerThanLaptop]);

  return (
    <UserPanelLastViewItem isPublishedByUser={isPublishedByUser}>
      <UserPanelLastViewTitle className="block-center">
        {title.length > titleMaxLength ? `${title.substring(0, titleMaxLength - 3)}...` : title}
      </UserPanelLastViewTitle>
      <UserPanelLastViewAuthor className="block-center">
        {name.length > nameMaxLength ? `${name.substring(0, nameMaxLength - 3)}...` : name}
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
};

export default LastViewItemComponent;
