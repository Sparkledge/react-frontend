import React from 'react';
import { Provider } from "react-redux";
import './App.css';

import Main from './components/main';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Main/>
      </Provider>
    </div>
  );
}

export default App;
