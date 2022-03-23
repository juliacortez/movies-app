import React from 'react'
import {BrowserRouter as Router} from "react-router-dom";
import Header from './Components/Header/Header';
import GlobalState from './GlobalState/GlobalState';
import MainRoutes from './Routes/Router';

function App() {
  return (
    <GlobalState>
    <Router>
      <Header />
      <MainRoutes />
    </Router>
    </GlobalState>
  );
}

export default App;
