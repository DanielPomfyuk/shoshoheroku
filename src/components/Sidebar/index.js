import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SideBtnWrap,
    SidebarWrapper,
    SidebarMenu,
    SidebarRoute,
    SidebarLink
} from "./SidebarElements"
const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} >
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/photos">SHO?ШО?SHOW!-SHO ЦЕ ТАКЕ?</SidebarLink>
                    <SidebarLink to="/info">Наші фоточки</SidebarLink>
                    <SidebarLink to="/contact">Замовити гру на свій EVENT</SidebarLink>
                    <SidebarLink to="/contact">Франчайзинг</SidebarLink>
                    <SidebarLink to="/contact">Контакти</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/registration">реєстрація</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
