import styled from "styled-components"
import {Link} from "react-router-dom"
export const Networks = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:black;
  font-size:60px;

`
export const Netbox = styled.div`
position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #12B6E2;
  color: #12B6E2;  
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
export const Icon = styled(Link)`
     padding: 0.6rem 0.6rem;
    color: #12B6E2;
    transition: color 140ms ease;
    margin: 0 0.4rem;
    &:hover {
      color: #DFF7F6;
    }
`