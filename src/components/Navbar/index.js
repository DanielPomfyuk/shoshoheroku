import React from 'react'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink,
    Logo
} from "./NavbarElements"
import logoImg from './poster.png'
import {FaBars} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'

const Navbar = ({toggle}) => {

    const toggleHome = ()=>{
        scroll.scrollToTop();
    }
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                        <Logo src={logoImg}/>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="info"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={0}
                            activeClass='active' >SHO?ШО?SHOW!-SHO ЦЕ ТАКЕ?</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="photo" 
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={0}
                            activeClass='active'>Наші фоточки</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/" >Замовити гру на свій EVENT</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/" >Франчайзинг</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contacts" >Контакти</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="registration">
                        реєстрація
                        </NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
