import React, { useEffect } from "react";
import {
  BrowserRouter as Router, Routes, Route, useNavigate, 
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import useLocalStorage from "use-local-storage";

import { LightMode, DarkMode, SparkledgeGlobalStyle } from "../styled/main";
import { setNewToken } from "../redux/actions/generalActions";
import { RootState } from "../redux/mainReducer";
import Navbar from "./subcomponents/navbar";
import Welcome from "./subpages/welcome";
import About from "./subpages/about";
import SigningPanel from "./subpages/signing";
import Searcher from "./subpages/searcher";
import DocumentDisplayer from "./subpages/documentDisplayer";
import DocumentUpload from "./subpages/documentUpload";
import Notfound from "./subpages/notfound";
import ForgotPassword from "./subpages/forgotPassword";
import ResetPassword from "./subpages/resetPassword";
import AuthenticationPanel from "./subpages/authentication";
import TermsAndConditions from "./subpages/termsAndConditions";

import UserPanel from "./subpages/userPanel";

import refreshToken from "../connectionFunctions/main/refreshToken";

const Main: React.FC = () => {
  const [memoryUserId, setMemoryUserId] = useLocalStorage<string>("u", "");
  const [refreshUserId, setRefreshUserId] = useLocalStorage<string>("u_r", "");

  const dispatch = useDispatch();

  const graphicalMode: number = useSelector(
    (state: RootState) => state.generalData.graphicalMode,
  );

  useEffect(() => {
    if (refreshUserId.length > 0) {
      console.log(memoryUserId);
      refreshToken(refreshUserId, setMemoryUserId, setRefreshUserId);
      dispatch(setNewToken(memoryUserId));
    }
  }, []);

  return (
    <ThemeProvider theme={graphicalMode === 0 ? LightMode : DarkMode}>
      <SparkledgeGlobalStyle isLight={graphicalMode === 0} />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SigningPanel mode={1} />} />
          <Route path="/signup" element={<SigningPanel mode={2} />} />
          <Route path="/searcher" element={<Searcher />} />
          <Route path="/searcher/:courseId" element={<Searcher />} />
          <Route path="/document/:docId" element={<DocumentDisplayer />} />
          <Route path="/document/" element={<DocumentDisplayer />} />
          <Route path="/documentUpload" element={<DocumentUpload />} />
          <Route path="/panel" element={<UserPanel />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/resetPassword/:email/:token" element={<ResetPassword />} /> 
          <Route path="/authentication/:token" element={<AuthenticationPanel />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default Main;
