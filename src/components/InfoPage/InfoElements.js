import styled from  "styled-components"
import img from "./0093.jpg"


export const InfoWrapper = styled.div`
    background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)),
    url(${img});
  height: 90vh;
  background-position: center;
  color:#fff;
  background-size: cover;
  display:flex;
  justify-content:center;
  align-items:center;
`
export const Container = styled.div`
    width:100%;
    max-width:98rem;
    margin:auto;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    @media screen and (max-width: 1024px){
        flex-direction:column;
    }
`
export const IconsContainer = styled.div`
    display:flex;
    width:40%;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    @media screen and (max-width: 1024px){
        width:100%;
    }
`
export const Icon = styled.img`
    /* width:200px;
    height:150px; */
    width:clamp(200px,100px,50%);
    padding:0 20px 20px;
    @media screen and(max-width: 1024px){
        width:60%;
    }
`
export const TextWrapper = styled.div`
    width:60%;
    padding:5vw;
    @media screen and (max-width: 1024px){
        width:100%;
    }
`
export const Text = styled.p`
    text-align:justify;
    font-size:clamp(1em,2vw,1.5em);
    color:#FC7DC0;
`
export const TextTitle = styled.h1`
    margin:0;
    padding:0;
    font-size:clamp(20px,5vw,50px);
    color:#FC7DC0;
`   