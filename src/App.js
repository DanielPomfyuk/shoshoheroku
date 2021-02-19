import React from 'react';
import HeroSection from './components/HeroSection';
import InfoSection from "./components/InfoPage"
import PhotoGallery from "./components/PhotoGallery";
import Socials from "./components/Socials";

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
    return (<React.Fragment>
        <GlobalStyle />
        <Sidebar isOpen={this.state.isOpen} toggle={this.toggle}/>
        <Navbar toggle={this.toggle}/>
        <HeroSection/>
        <InfoSection/>
        <PhotoGallery />
        <Socials/>
        </React.Fragment>
  );
  }
}

export default App;
