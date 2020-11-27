import React from 'react'
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar';
import InfoSection from "../components/InfoPage"
import PhotoGallery from "../components/PhotoGallery";
import Socials from "../components/Socials";
import RegistrationForm from "../components/RegistrationForm"
class Home extends React.Component{
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
        return(<>
        <Sidebar isOpen={this.state.isOpen} toggle={this.toggle}/>
                <Navbar toggle={this.toggle}/>
                <HeroSection/>
                <InfoSection/>
                <PhotoGallery />
                <RegistrationForm/>
                <Socials/>
        </>)
    }
}

export default Home
