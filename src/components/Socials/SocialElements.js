import styled from "styled-components"
import {Link} from "react-router-dom"
export const Networks = styled.div`
  width: 100%;
  height: 50vh;
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
  border: 1px solid #ff6ec7;
  color: #ff6ec7;
  &:before {
    position: absolute;
    top: -0.5rem;
    right: 0;
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: #ff6ec7;
  }
  
  &:after {
    position: absolute;
    top: -0.8rem;
    right: 0;
    
    content: 'Знаходь нас усюди!';
    font-size: 1rem;
    padding-left: 10px;
    background-color: black;
  }
`
export const Icon = styled(Link)`
     padding: 0.6rem 0.6rem;
    color: #ff6ec7;
    transition: color 140ms ease;
    margin: 0 0.4rem;
    &:after {
      position: absolute;
      right: 0;
      bottom: 7rem;
      z-index: 20;
      content: 'zalupa';
      display: block;
      width: auto;
      font-size: 1rem;
      color: black;
      background-color: #ff6ec7;
      padding: 1rem;
      opacity: 0;
      pointer-events: none;
      transform: translateY(3rem);
      transition: all 300ms ease 200ms;
    }
    &:hover {
      color: white;
      
      &:after {
        opacity: 1;
        transform: translateY(0);
      }
    }
`