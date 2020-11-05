import styled from  "styled-components"
import bgImg from './0046.jpg';
import {Link as LinkR} from "react-router-dom"

export const InfoSection = styled.div`
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${bgImg});
  height: 90vh;
  background-position: center;
  color:#fff;
  background-size: cover;
`
export const Container = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  align-items:center;
  justify-content:center;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 100%;
  color: transparent;
  text-transform: uppercase;
  line-height: 1;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
  `
export const LogoImg = styled.img`
  width:50%;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`
export const NavBtn = styled.nav`
    display: flex;
    width:50%;
    height:10%;
    justify-content:space-between;
    align-items: center;
    @media screen and (max-width: 960px){
        flex-direction:column;
        justify-content:space-around;
        align-items:center;
        width:100%;
        height:20%;
    }
` 
export const NavBtnLink = styled(LinkR)`
    border: 2px solid #FC7DC0;
    white-space: nowrap;
    padding: 10px 22px;
    color: #FC7DC0;
    font-size: 1vw;
    text-transform: uppercase;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    width:60%;
    text-align:center;
    @media screen and (max-width: 960px) {
    font-size: 3vw;
  }
    &:hover{
        transition:all 0.2s ease-in-out;
        background: #ff6ec7;
        color:black;
    }
`

