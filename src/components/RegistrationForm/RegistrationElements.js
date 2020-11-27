import styled from "styled-components"
import bgImg from "./fon.jpg"
export const Container = styled.div`
    width:100%;
    height:50vh;
    background-color:black;
    display:flex;
    align-items:center;
    background: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)),
    url(${bgImg});
    background-size: cover;
    background-position:center;
    @media screen and (max-width: 960px){
        justify-content:center;
    }
`
export const Form = styled.div`
    background-color:black;
    width: 500px;
    height:60%;
    display:flex;
    margin-left:100px;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border:2px solid #12B6E2;
    box-shadow: 
      0 0 100px 2px #02313D,
      0.5rem 0.5rem 30px #12B6E2;
    @media screen and (max-width: 960px){
       width:100%;
       margin-left:0;
       height:100%;
    }
`
export const Select = styled.select`
  width: 50%;
  height: 35px;
  background: transparent;
  color: #12B6E2;
  padding-left: 5px;
  font-size: 16px;
  border: none;

  option {
    color: #12B6E2;
    background: black;
    display: flex;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;
export const Title = styled.h2`
     color: #12B6E2;
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-transform:uppercase;
`
export const SelectContainer = styled.div`
    display:flex;
    width:350px;
    height:30px;
    justify-content:space-between;
    align-items:center;
`
export const SelectTitle = styled.h3`
    font-size:16px;
    color:grey;
    font-weight:normal;
`
export const Input = styled.input`
    width: 350px;
    height:30px;
    padding: 20px 0px;
    background: transparent;
    border: none;
    border-bottom: 1px solid #12B6E2;
    outline: none;
    color: #DFF7F6;
    font-size: 16px;
    ::placeholder{
      color:grey;
    }
`
export const ButtonContainer = styled.div`
  display:flex;
  width: 350px;
  margin-top:20px;
`
export const SubmitButton = styled.div`
  display:flex;
  justify-content:center;
  width:100px;
  align-items:center;
  height:30px;
  background-color:transparent;
  border:1px solid #12B6E2;
  color:#12B6E2;
  font-size:16px;
  cursor:pointer;
  :hover{
    background-color:#12B6E2;
    color:black;
  }
`