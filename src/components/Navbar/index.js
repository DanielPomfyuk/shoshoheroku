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
    NavBtnLink
} from "./NavbarElements"
import {FaBars} from 'react-icons/fa'
const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        ShoShoShow
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/photos" onClick={toggle}>Фото</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/info" onClick={toggle}>Чому ми</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/contact" onClick={toggle}>Контакти</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/registration">
                        реєстрація
                        </NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
