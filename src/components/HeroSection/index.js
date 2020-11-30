import React from 'react'
import logoImg from '../Navbar/poster.png';

import {
    HeroContent,
    NavBtn,
    NavBtnLink,
    InfoSection,
    Container,
    LogoImg
}from "./HeroElements"
const HeroSection = () => {
    return (<>
    <InfoSection>
      <Container>
          <HeroContent>
          <LogoImg src={logoImg}/>
          <NavBtn>
                        <NavBtnLink to="/registration">РЕЄСТРАЦІЯ КОМАНДИ</NavBtnLink>
                        <NavBtnLink to="socials">ЗВ‘ЯЗАТИСЬ З НАМИ</NavBtnLink>
                    </NavBtn>
          </HeroContent>
      </Container>
    </InfoSection>
    </>)
}

export default HeroSection
