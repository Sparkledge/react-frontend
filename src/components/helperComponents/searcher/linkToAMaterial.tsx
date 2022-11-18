/* 

    The LinkToAMaterial component is used for rendering the search data in the FixedSizeList component

*/

import React from "react";
import { ListChildComponentProps } from "react-window";
import { Link } from "react-router-dom";

import SearchingMainResultComponent from "src/components/helperComponents/searcher/searchingMainResultComponent";

interface SearchMaterialData {
  title: string,
  createdAt: string,
  user: {
    firstName: string,
    lastName: string,
  },
  likesNumber: number,
  viewsNumber: number,
  id: number,
  description: string,
}

const LinkToAMaterial:React.FC<ListChildComponentProps<SearchMaterialData[]>> = ({ data, index, style }) => (
  <Link to={`/document/${data[index].id}`} style={style}>
    <SearchingMainResultComponent
      title={data[index].title}
      publishedOn={data[index].createdAt}
      publisher={`${data[index].user.firstName} ${data[index].user.lastName}`}
      description={data[index].description}
      likesNum={data[index].likesNumber}
      viewsNum={data[index].viewsNumber}
      animAlign={index % 2 === 0 ? -10 : 10}
    />
  </Link>
);

export default LinkToAMaterial;
