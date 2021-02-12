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
  @media screen and (max-width: 1024px){
        height:200vh;
    }
`
export const Container = styled.div`
    width:80%;
    height:100%;
    margin:auto;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    @media screen and (max-width: 1024px){
        flex-direction:column;
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
    /* padding:0 20px 20px; */
`
export const TextWrapper = styled.div`
    width:100%;
    padding:5vw;
    @media screen and (max-width: 1024px){
        width:100%;
    }
`
export const Text = styled.p`
    text-align:center;
    font-size:clamp(1em,2vw,1.5em);
    color:#66D0EC;
`
export const TextTitle = styled.h1`
    text-align:center;
    margin:0;
    padding:0;
    font-size:clamp(20px,5vw,50px);
    color:#66D0EC;
`   