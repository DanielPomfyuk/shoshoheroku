import styled from  "styled-components"
import img from "./0093.jpg"
export const InfoWrapper = styled.div`
  height: 100vh;
  background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)),url(${img});
  background-position: center;
  background-size: cover;
  display:flex;
  justify-content:center;
  align-items:center;
  @media screen and (max-width: 650px){
        height:270vh;
    }
  @media screen and (max-width: 450px){
        height:280vh;
    }
  @media screen and (max-width: 350px){
        height:300vh;
    }
`
export const Container = styled.div`
    width:80%;
    height:100%;
    margin:auto;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    @media screen and (max-width: 1023px){
        flex-direction:column;
        justify-content:flex-start;
    }
`
export const IconsContainer = styled.div`
    width:100%;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    @media screen and (max-width: 1024px){
        width:100%;
    }
`
export const Icon = styled.img`
    width:300px;
    @media screen and (max-width: 500px){
        width:100%;
    }
`
export const TextWrapper = styled.div`
    width:100%;
    margin-top:10px;
    margin-bottom:10px;
`
export const Text = styled.p`
    text-align:justify;
    font-size:clamp(1em,2vw,1.5em);
    color:white;
`
export const TextTitle = styled.h1`
    text-align:center;
    margin:0;
    padding:0;
    font-size:clamp(20px,5vw,50px);
    color:#0288C2;
    @media screen and (min-width: 1024px){
        color:white;
        -webkit-text-stroke: 2px #0288C2;
    }
`   