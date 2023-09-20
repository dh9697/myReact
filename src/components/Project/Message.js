import { useState } from "react";
import { styled, keyframes } from "styled-components";

const fadeOutH2 = keyframes`
from{
  opacity: 1;
  transform: translateY(0);
}
to{
  opacity: 0;
  transform: translateY(-10px);
}
`;
const fadeOutP = keyframes`
from{
  opacity: 1;
  transform: translateY(0);
}
to{
  opacity: 0;
  transform: translateY(10px);
}
`;
const fadeinout = keyframes`
0%{
  opacity: 0;
}
50%{
  opacity: 1;
}
100%{
opacity: 0;
}
`;

const Container = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  & h2 {
    text-align: center;
    width: 500px;
    font-weight: 400;
    font-size: 3.5rem;
    line-height: 60px;
    &.fadeout {
      animation: ${fadeOutH2} 0.5s 0.4s forwards ease-in-out;
    }
  }
  & p {
    font-style: italic;
    font-size: 1rem;
    font-weight: 400;
    &.fadeout {
      animation: ${fadeOutP} 0.5s 0.2s forwards ease-in-out;
    }
  }
`;
const EnterButton = styled.button`
  width: 100px;
  height: 50px;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 10px;
  z-index: 100;
  cursor: pointer;
  &.fadeout {
    animation: ${fadeOutP} 0.5s 0.1s forwards ease-in-out;
  }
  &:hover {
    border-radius: 10px;
    border: 1px solid white;
    color: white;
    transition: all 0.1s linear;
  }
`;
const Intro = styled.div`
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  letter-spacing: 3px;
  & h2 {
    font-size: 3rem;
  }
  & p {
    font-size: 1rem;
    margin-top: 10px;
  }
  &.fadeinout {
    animation: ${fadeinout} 3.5s 1s forwards ease-in-out;
  }
`;

export function Message({ isClicked, setIsClicked }) {
  // const [isClicked, setIsClicked] = useState(false);

  const EnterButtonClick = () => {
    setIsClicked(true);
  };
  return (
    <>
      <Container>
        <h2 className={isClicked ? "fadeout" : ""}>
          The Radio Won't Let Me Sleep
        </h2>
        <p className={isClicked ? "fadeout" : ""}>
          The best songs I've ever known
        </p>
        <EnterButton
          onClick={EnterButtonClick}
          className={isClicked ? "fadeout" : ""}
        >
          Enter
        </EnterButton>
      </Container>
      <Intro className={isClicked ? "fadeinout" : ""}>
        <h2>ReactProject</h2>
        <p>Director: Kimdahye</p>
      </Intro>
    </>
  );
}
