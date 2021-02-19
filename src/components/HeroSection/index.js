import React from 'react'
import logoImg from '../Navbar/poster.png';

import {
    HeroContent,
    NavBtn,
    NavBtnLink,
    InfoSection,
    HeroContainer,
    LogoImg
}from "./HeroElements"
const HeroSection = () => {
    return (<>
    <HeroContainer>
          <HeroContent>
          <LogoImg src={logoImg}/>
          <NavBtn>
                        <NavBtnLink href="https://t.me/ShoShoShowBot">РЕЄСТРАЦІЯ КОМАНДИ</NavBtnLink>
                        <NavBtnLink href="#contacts">ЗВ‘ЯЗАТИСЬ З НАМИ</NavBtnLink>
          </NavBtn>
          </HeroContent>
    </HeroContainer>
    </>)
}

export default HeroSection
