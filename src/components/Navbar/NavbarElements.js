import styled from 'styled-components'
import {Link as LinkR} from "react-router-dom"
import {Link as linkS} from "react-scroll"
export const Nav = styled.nav`
    background:black;
    height:80px;
    /* margin-top:-80px; */
    display:flex;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index:10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding:0 24px;
    max-width:1100px;
`

export const NavLogo = styled(LinkR)`
    text-decoration: none;
    color:#ff6ec7;
    justify-self:flex-start;
    cursor:pointer;
    font-size: 1.5rem;
    display:flex;
    align-items:center;
    margin-left: 28px;
    font-weight: bold;
    width:15%;
    @media screen and (max-width: 768px){
        width:20%;
    }
`
export const Logo = styled.img`
    max-width:60%;
    @media screen and (max-width: 768px){
        display: block;
        top: 0;
        left: 10%;
        width:100%;
    }
`

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 960px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%,60%);
        font-size: 1.8rem;
        cursor:pointer;
        color:#fff;
    }
`
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 960px){
        display: none;
    }
`

export const NavItem = styled.li`
    height:80px;
`

export const NavLinks = styled(linkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration:none;
    text-transform: uppercase;
    padding:0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid  #ff6ec7;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-left:5%;
    @media screen and (max-width: 960px){
        display: none;
    }
` 
export const NavBtnLink = styled(LinkR)`
     border: 2px solid #FC7DC0;
    white-space: nowrap;
    padding: 10px 22px;
    color: #FC7DC0;
    font-size: 16px;
    text-transform: uppercase;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover{
        transition:all 0.2s ease-in-out;
        background: #ff6ec7;
        color:black;
    }
`