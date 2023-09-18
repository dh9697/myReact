import { useState } from "react";
import { styled, keyframes } from "styled-components";

const fadeOut = keyframes`
from{
  opacity:1;
}
to {
  opacity:0;
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
    animation: ${fadeOut} 100 ease-in-out;
  }
  & p {
    font-style: italic;
    font-size: 1rem;
    font-weight: 400;
    animation: ${fadeOut} 100 ease-in-out;
  }
`;
const EnterButton = styled.button`
  width: 100px;
  height: 50px;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 10px;
  letter-spacing: -1px;
  cursor: pointer;
  &:hover {
    border-radius: 10px;
    border: 2px solid black;
    transition: all 100 linear;
  }
`;

export function Message() {
  const [isClicked, setIsClicked] = useState(false);

  const EnterButtonClick = () => {
    setIsClicked(true);
  };
  return (
    <>
      <Container isClicked={isClicked}>
        <h2 className={isClicked ? "fadeOut" : ""}>
          The Radio Won't Let Me Sleep
        </h2>
        <p className={isClicked ? "fadeOut" : ""}>
          The best songs I've ever known
        </p>
        <EnterButton onClick={EnterButtonClick}>Enter</EnterButton>
      </Container>
    </>
  );
}
