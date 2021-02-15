import React from 'react';
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
    return (<>
        <GlobalStyle />
        <Sidebar isOpen={this.state.isOpen} toggle={this.toggle}/>
        <Navbar toggle={this.toggle}/>
        <Home/>
        </>
  );
  }
}

export default App;
