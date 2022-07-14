import React from "react";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import "./App.css";

import Main from "./components/main";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <CookiesProvider>
        <Provider store={store}>
          <Main />
        </Provider>
      </CookiesProvider>
    </div>
  );
}

export default App;
