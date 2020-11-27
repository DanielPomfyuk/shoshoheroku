import React from 'react';
import {BrowserRouter as Router, Switch , Route} from "react-router-dom"
import Home from "./pages"
import {GlobalStyle} from "./GlobalStyles"
function App() {
  return (
    <React.Fragment>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
