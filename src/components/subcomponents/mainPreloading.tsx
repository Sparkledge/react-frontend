/* 
    The MainPreloadingComponent is meant to be used as a preloader for the app's main router
*/
import React from "react";
import SearchingPreloaderComponent from "../helperComponents/searcher/searchingPreloaderComponent";

const MainPreloadingComponent:React.FC = () => (
  <div style={{ position: "relative", top: "20vh" }}>
    <SearchingPreloaderComponent />
  </div>
);

export default MainPreloadingComponent;
