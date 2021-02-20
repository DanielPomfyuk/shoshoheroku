import styled from "styled-components"

export const Footer = styled.div`
  width:100%;
  background:black;
  display:flex;
  justify-content:center;
  align-items:center;
`
export const Container = styled.div`
  width:80%;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  padding:20px;
  @media screen and (max-width: 800px){
        flex-direction:column;
        justify-content:center;
        align-items:center;
        width:100%;
  }
  @media screen and (max-width: 1024px){
        justify-content:center;
        width:100%;
  }
`
export const InfoWrapper = styled.div`
  display:flex;
  align-items:flex-start;
  @media screen and (max-width: 1024px){
    flex-direction:column;
    align-items:center;
  }
`
export const InfoBox = styled.div`
  width:35%;
  padding:10px;
  display:flex;
  justify-content:center;
  flex-direction:column;
  @media screen and (max-width: 1024px){
        width:100%;
    }
`
export const Title = styled.h6`
  color:#DFF7F6;
  font-size:16px;
  text-transform:uppercase;
  margin-top:5px;
  letter-spacing:2px;
`
export const Info = styled.p`
  text-align:justify;
  text-justify:inter-character;
  font-size:1.2rem;
  color:#0288C2;
`

export const Networks = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
  font-size:60px;
  @media screen and (max-width: 400px){
    font-size:50px;
    }
  @media screen and (max-width: 300px){
    font-size:40px;
  }
`
export const Netbox = styled.div`
  position: relative;
  display: flex;
  color: #0288C2;  
`
export const Icon = styled.a`
    padding: 0.6rem 0.6rem;
    color: #0288C2;
    transition: color 140ms ease;
    margin: 0 0.4rem;
    &:hover {
      color: #DFF7F6;
    }
`