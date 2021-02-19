import styled from  "styled-components"
import bgImg from './0046.jpg';

export const HeroContainer = styled.div`
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${bgImg});
  background-size: cover;
  background-position: center;
  color:#fff;
  display:flex;
  justify-content:center;
  align-items:center;
  height:90vh;
`
export const HeroContent = styled.div`
  width:30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  text-transform: uppercase;
  @media screen and (max-width: 1024px){
    width:50%;
  }
  @media screen and (max-width: 650px) {
    width:70%;
  }
  `
export const LogoImg = styled.img`
  width:100%;
  @media screen and (max-height: 450px){
    width:50%;
  }
`
export const NavBtn = styled.nav`
    width:100%;
    display: flex;
    justify-content:space-between;
    align-items: center;
    @media screen and (max-width: 960px){
        flex-direction:column;
        justify-content:space-between;
        align-items:center;
        width:80%;
    }
    @media screen and (max-height: 450px){
        width:50%;
    }
` 
export const NavBtnLink = styled.a`
    border: 2px solid #FC7DC0;
    width:50%;
    padding-top:1%;
    padding-bottom:1%;
    white-space: nowrap;
    color: #FC7DC0;
    font-size: 1.2rem;
    text-transform: uppercase;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    text-align:center;
    @media screen and (max-width:1520px){
      font-size:.8rem;
    }
    @media screen and (max-width:960px){
      width:100%;
      font-size:.8rem;
      padding-top:2%;
      padding-bottom:2%;
    }
    @media screen and (max-width:400px){
      width:100%;
      font-size:.6rem;
      padding-top:2%;
      padding-bottom:2%;
    }
    &:hover{
        transition:all 0.2s ease-in-out;
        background: #ff6ec7;
        color:black;
    }
`

