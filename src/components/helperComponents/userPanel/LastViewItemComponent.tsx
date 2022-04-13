import React from "react";
import { UserPanelLastViewItem, UserPanelLastViewTitle, UserPanelLastViewAuthor } from "../../../styled/subpages/userpanel";

interface LastViewItemComponentInterface{
    header: string,
    secondHeader: string,
    additionalData: [any, string][]
}

const LastViewItemComponent:React.FC<LastViewItemComponentInterface> = ({header, secondHeader, additionalData} : LastViewItemComponentInterface) => {
    return <UserPanelLastViewItem>
    <UserPanelLastViewTitle className="block-center">
        {header.length > 30 ? header.substring(0,27)+"..." : header}
    </UserPanelLastViewTitle>
    <UserPanelLastViewAuthor className="block-center">
        {secondHeader}
    </UserPanelLastViewAuthor>
    {additionalData.map((elem, key) =>
    <UserPanelLastViewAuthor key={`additional-data-${elem[1]}-${key}`} className="block-center" marginBottom={2}>
        {elem[0]} {elem[1]}
    </UserPanelLastViewAuthor>)}
</UserPanelLastViewItem>
}

export default LastViewItemComponent;