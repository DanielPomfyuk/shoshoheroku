import React, {useState} from 'react'
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar';
import InfoSection from "../components/InfoPage"
import PhotoGallery from "../components/PhotoGallery";
import Socials from "../components/Socials";
import { render } from '@testing-library/react';
class Home extends React.Component{
    constructor(){
        super()
        this.state= {
            isOpen:false,
            scrollPosition:0
        }
        this.toggle = this.toggle.bind(this)
    }
    toggle(){
        this.setState(prevState=>({ isOpen: !prevState.isOpen}))
    }
    render(){
        return(<>
        <Sidebar isOpen={this.state.isOpen} toggle={this.toggle}/>
                <Navbar toggle={this.toggle}/>
                <HeroSection/>
                <InfoSection/>
                <PhotoGallery scrollPosition={this.state.scrollPosition}/>
                <Socials/>
        </>)
    }
}

export default Home
