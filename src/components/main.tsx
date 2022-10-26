import React, { useEffect, Suspense } from "react";
import {
  BrowserRouter as Router, Routes, Route,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import ReactGA from "react-ga";
import useLocalStorage from "use-local-storage";

import { LightMode, DarkMode, SparkledgeGlobalStyle } from "../styled/main";
import { setNewToken } from "../redux/actions/generalActions";
import { RootState } from "../redux/mainReducer";
import refreshToken from "../connectionFunctions/main/refreshToken";

import Navbar from "./subcomponents/navbar";
import MemoryUsingBanner from "./subcomponents/memoryUsingBanner";
import MainPreloadingComponent from "./subcomponents/mainPreloading";
// import Welcome from "./subpages/welcome";
// import About from "./subpages/about";
// import SigningPanel from "./subpages/signing";
// import Profile from "./subpages/profile";
// import Searcher from "./subpages/searcher";
// import DocumentDisplayer from "./subpages/documentDisplayer";
// import DocumentUpload from "./subpages/documentUpload";
// import Notfound from "./subpages/notfound";
// import ForgotPassword from "./subpages/forgotPassword";
// import ResetPassword from "./subpages/resetPassword";
// import AuthenticationPanel from "./subpages/authentication";
// import TermsAndConditions from "./subpages/termsAndConditions";
// import FAQ from "./subpages/faq";
// import UserPanel from "./subpages/userPanel";
// import Settings from "./subpages/settings";

const Welcome = React.lazy(() => import ("./subpages/welcome"));
const About = React.lazy(() => import ("./subpages/about"));
const SigningPanel = React.lazy(() => import ("./subpages/signing"));
const Profile = React.lazy(() => import ("./subpages/profile"));
const Searcher = React.lazy(() => import ("./subpages/searcher"));
const DocumentDisplayer = React.lazy(() => import ("./subpages/documentDisplayer"));
const DocumentUpload = React.lazy(() => import ("./subpages/documentUpload"));
const Notfound = React.lazy(() => import ("./subpages/notfound"));
const ForgotPassword = React.lazy(() => import ("./subpages/forgotPassword"));
const ResetPassword = React.lazy(() => import ("./subpages/resetPassword"));
const AuthenticationPanel = React.lazy(() => import ("./subpages/authentication"));
const TermsAndConditions = React.lazy(() => import ("./subpages/termsAndConditions"));
const FAQ = React.lazy(() => import ("./subpages/faq"));
const UserPanel = React.lazy(() => import ("./subpages/userPanel"));
const Settings = React.lazy(() => import("./subpages/settings"));

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);

const Main: React.FC = () => {
  const [memoryUserId, setMemoryUserId] = useLocalStorage<string>("u", "", { syncData: true });
  const [refreshUserId, setRefreshUserId] = useLocalStorage<string>("u_r", "");
  const [isUserConsent, toggleIsUserConsent] = useLocalStorage<boolean>("u_a", false);

  const dispatch = useDispatch();

  const graphicalMode: number = useSelector(
    (state: RootState) => state.generalData.graphicalMode,
  );

  useEffect(() => {
    if (refreshUserId !== undefined && refreshUserId.length > 0) {
      refreshToken(refreshUserId, setMemoryUserId, setRefreshUserId);
      dispatch(setNewToken(memoryUserId));
    } else if (refreshToken !== undefined) {
      setMemoryUserId(undefined);
      dispatch(setNewToken(""));
    }
  }, [refreshUserId]);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [window.location.pathname, window.location.search]);

  return (
    <ThemeProvider theme={graphicalMode === 0 ? LightMode : DarkMode}>
      <SparkledgeGlobalStyle isLight={graphicalMode === 0} />

      <Suspense fallback={<MainPreloadingComponent />}>
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
            <Route path="/faq" element={<FAQ />} />
            <Route path="/profile/:userId" element={<Profile />} />
            <Route path="/profile/" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
          {!isUserConsent ? <MemoryUsingBanner toggleIsUserConsent={toggleIsUserConsent} /> : null}
        </Router>

      </Suspense>
    </ThemeProvider>
  );
};

export default Main;
