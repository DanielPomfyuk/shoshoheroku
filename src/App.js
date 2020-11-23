import React from 'react';
import {BrowserRouter as Router} from "react-router-dom"
import Home from "./pages"
import {GlobalStyle} from "./GlobalStyles"
function App() {
  return (
    <React.Fragment>
      <Router>
        <GlobalStyle />
        <Home/>
      </Router>
    </React.Fragment>
  );
}

export default App;
