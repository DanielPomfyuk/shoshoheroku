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
const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <Logo src={logoImg}/>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/" onClick={toggle}>SHO?ШО?SHOW!-SHO ЦЕ ТАКЕ?</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/" onClick={toggle}>Наші фоточки</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/" onClick={toggle}>Замовити гру на свій EVENT</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/" onClick={toggle}>Франчайзинг</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/" onClick={toggle}>Контакти</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/">
                        реєстрація
                        </NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
