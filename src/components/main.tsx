import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { LightMode, DarkMode } from "../styled/main";

import Navbar from "./subcomponents/navbar";
import Welcome from "./subpages/welcome";

const Main:React.FC = () => {
    return <ThemeProvider theme={LightMode}>
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Welcome/>}/>
            </Routes>
        </Router>
    </ThemeProvider>
};

export default Main;