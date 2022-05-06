import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";

import { LightMode, DarkMode, SparkledgeGlobalStyle } from "../styled/main";
import { RootState } from "../redux/mainReducer";
import Navbar from "./subcomponents/navbar";
import Welcome from "./subpages/welcome";
import About from "./subpages/about";
import SigningPanel from "./subpages/signing";
import Searcher from "./subpages/searcher";
import DocumentDisplayer from "./subpages/documentDisplayer";
import Notfound from "./subpages/notfound";

import UserPanel from "./subpages/userPanel";

const Main: React.FC = () => {
  const graphicalMode: number = useSelector(
    (state: RootState) => state.generalData.graphicalMode
  );

  return (
    <ThemeProvider theme={graphicalMode === 0 ? LightMode : DarkMode}>
      <SparkledgeGlobalStyle isLight={graphicalMode === 0 ? true : false}/>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SigningPanel mode={1} />} />
          <Route path="/signup" element={<SigningPanel mode={2} />} />
          <Route path="/searcher" element={<Searcher/>}/>
          <Route path="/document/:docId" element={<DocumentDisplayer/>}/>
          <Route path="/document/" element={<DocumentDisplayer/>}/>
          <Route path="/panel" element={<UserPanel/>}/>
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default Main;
