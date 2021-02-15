import React from 'react'
import HeroSection from '../components/HeroSection';
import InfoSection from "../components/InfoPage"
import PhotoGallery from "../components/PhotoGallery";
import Socials from "../components/Socials";
class Home extends React.Component{
    
    render(){
        return(<>
                <HeroSection/>
                <InfoSection/>
                <PhotoGallery />
                <Socials/>
        </>)
    }
}

export default Home
