import React from 'react';
import {BrowserRouter as Router, Switch , Route} from "react-router-dom"
import Home from "./pages/Home.js"
import {GlobalStyle} from "./GlobalStyles"
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar';
class App extends React.Component{
  constructor(){
    super()
    this.state= {
        isOpen:false,
    }
    this.toggle = this.toggle.bind(this)
}
toggle(){
    this.setState(prevState=>({ isOpen: !prevState.isOpen}))
}
  render(){
    return (
      <Router>
        <GlobalStyle />
        <Sidebar isOpen={this.state.isOpen} toggle={this.toggle}/>
        <Navbar toggle={this.toggle}/>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/"/>
        </Switch>
      </Router>
  );
  }
}

export default App;
