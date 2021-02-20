import styled from  "styled-components"
import img from "./0093.jpg"
export const InfoWrapper = styled.div`
  background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)),url(${img});
  background-position: center;
  background-size: cover;
  position:relative;
  height:65vh;
  @media screen and (max-width:1024px){
    height: 50vh;
  }
  @media screen and (max-width:650px){
    height: 80vh;
  }
  @media screen and (max-height:450px){
    height:120vh;
  }

`
export const Container = styled.div`
    position:absolute;
    left:20%;
    width:60%;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    @media screen and (max-width: 1024px){
        width:100%;
        left:0;
    }
`
export const Icon = styled.img`
    width:30%;
    @media screen and (max-width: 650px){
        width:50%;
    }
`
