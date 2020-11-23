import styled,{keyframes} from "styled-components"

export const MainContainer = styled.div`
    background: black;
  transform-style: preserve-3d;
  overflow: hidden;     
    @media(min-width: 0px) {
    perspective: 450px;
  }

@media(min-width: 700px) {
    perspective: 500px;
  }

@media(min-width: 1200px) {
    perspective: 1000px;
  }

@media(min-width: 1600px) {
    perspective: 2000px;
  }
`
const mymove = keyframes`
  from {
    transform: rotateY(45deg) translateX(0px);
  }

  to {
    transform: rotateY(45deg) translateX(-3000px);
  }
`;
export const Wall = styled.div`
position: relative;
  transform-origin: left center;
  width: 100%;
  height: 100%;
  animation: ${mymove} 60s infinite ;
`
export const Row = styled.div`
    position: relative;
    display: flex;
    height: 250px;
    margin-bottom: 10px;
`
export const Image = styled.img`
      height: 100%;
      margin: 5px;
`
export const Frame = styled.div`
      position: relative;
      height: 100%;
`
export const Reflection = styled.div`
    position: absolute;
    height: 100%;
    transform: rotateX(180deg) translateY(-10px);
    opacity: 0.25;
`