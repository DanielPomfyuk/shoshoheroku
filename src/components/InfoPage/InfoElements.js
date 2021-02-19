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

`
export const Container = styled.div`
    /* background-color:red; */
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
// export const IconsContainer = styled.div`
//     width:60%;
//     display:flex;
//     flex-wrap:wrap;
//     justify-content:center;
//     align-items:center;
//     @media screen and (max-width: 1024px){
//         width:100%;
//     }
// `
export const Icon = styled.img`
    width:30%;
    @media screen and (max-width: 650px){
        width:50%;
    }
`
// export const TextWrapper = styled.div`
//     width:100%;
//     margin-top:10px;
//     margin-bottom:10px;
// `
// export const Text = styled.p`
//     text-align:justify;
//     font-size:clamp(1em,2vw,1.5em);
//     color:white;
// `
// export const TextTitle = styled.h1`
//     text-align:center;
//     margin:0;
//     padding:0;
//     font-size:clamp(20px,5vw,50px);
//     color:#0288C2;
//     @media screen and (min-width: 1024px){
//         color:white;
//         -webkit-text-stroke: 2px #0288C2;
//     }
// `   