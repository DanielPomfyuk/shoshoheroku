import styled from "styled-components"
import {Link} from "react-router-dom"

export const FooterContainer = styled.div`
  width:100%;
  height:30vh;
  background:black;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`
export const InfoContainer = styled.div`
  width:50%;
  display:flex;
  justify-content:space-between;
`
export const InfoBox = styled.div`
  width:30%;
  border:1px solid #12B6E2;
  padding:10px;
  display:flex;
  justify-content:center;
  flex-direction:column;
  box-shadow: 
      0 0 100px 2px #02313D,
      0.5rem 0.5rem 30px #12B6E2;
`
export const Title = styled.h6`
  color:#DFF7F6;
  font-size:16px;
  text-transform:uppercase;
  margin-top:5px;
  letter-spacing:2px;
`
export const Info = styled.p`
  text-justify:auto;
  font-size:1.2rem;
  color:#12B6E2;
`
export const Networks = styled.div`
  /* height: 15vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size:60px;
  border: 1px solid #12B6E2;
  box-shadow: 
      0 0 100px 2px #02313D,
      0.5rem 0.5rem 30px #12B6E2;
  &:after {
    position: absolute;
    top: -1rem;
    right: 0;
    
    content: 'Знаходь нас усюди!';
    font-size: 1.2rem;
    padding-left: 8px;
    background-color: black;
  }
`
export const Netbox = styled.div`
position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #12B6E2;  
  
`
export const Icon = styled(Link)`
     padding: 0.6rem 0.6rem;
    color: #12B6E2;
    transition: color 140ms ease;
    margin: 0 0.4rem;
    &:hover {
      color: #DFF7F6;
    }
`