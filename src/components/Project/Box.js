import styled, { keyframes } from "styled-components";
import Ipod from "./image/ipod.svg";
import Mp3 from "./image/mp3.svg";
import { useState } from "react";

const ButtonFill = keyframes`
from{

}
to{
  
}
`;
const Button = styled.button`
  width: 30vw;
  height: 10vh;
  border: 2px dashed black;
  border-radius: 10px;
  background-color: transparent;
  position: relative;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  h2 {
  }
`;
// const Img = styled.div`
//   width: 100%;
//   display: ${(props) => (props.isVisible ? "block" : "none")};
//   transition: all 0.3s ease;
//   opacity: ${(props) => (props.isVisible ? 1 : 0)};
//   position: absolute;
//   top: 0;
//   left: 50%;
//   transform: translateX(-50%);
//   img {
//     width: 75%;
//   }
// `;
const Img = styled.div`
  width: 250%;
  display: ${(props) => (props.isVisible ? "block" : "none")};
  transition: all 0.3s ease;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 100%);
  img {
    width: 100%;
  }
`;
export function Box() {
  const [isImgVisible, setIsImgVisible] = useState(true);
  function onClickToggleImg() {
    setIsImgVisible(!isImgVisible);
  }
  return (
    <>
      <Button onClick={onClickToggleImg}>
        clickMe
        <Img isVisible={!isImgVisible}>
          <img src={Mp3} alt="ipod" />
        </Img>
      </Button>
      <Container isVisible={isImgVisible}>
        <h2>
          404<spna>Error</spna>
        </h2>
        <p>NotFound</p>
      </Container>
    </>
  );
}
