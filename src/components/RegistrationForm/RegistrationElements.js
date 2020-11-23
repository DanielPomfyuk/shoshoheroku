import styled from "styled-components"
import bgImg from "./fon.jpg"
export const Container = styled.div`
    width:100%;
    height:50vh;
    background-color:black;
    display:flex;
    justify-content:flex-end;
    padding-right:550px;
    align-items:center;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 1)),
    url(${bgImg});
    background-size: cover;
`
export const Form = styled.div`
    width: 600px;
    height:100%;
    background-color:rgba(0,0,0,0.5);
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

export const Title = styled.h2`
     color: #FC7DC0;
  font-size: 15px;
  font-size: 3.6em;
  margin-bottom: 20px;
`
export const Input = styled.input`
    width: 350px;
    height:30px;
    padding: 20px 0px;
    background: transparent;
    border: none;
    border-bottom: 1px solid #FC7DC0;
    outline: none;
    color: #FC7DC0;
    font-size: 16px;
`