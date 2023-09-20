import { Message } from "./Message";
import { Footer } from "./Footer";
import styled from "styled-components";
import { useState } from "react";
import { Hover } from "./Hover";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    background-color: rgba(0, 0, 0, 0.3);
    z-index: -50;
  }
`;
const Head = styled.h1`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: transparent;
  text-align: center;
  font-size: 2.5rem;
`;

export function MainPage() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <Container>
        <Head style={{ opacity: isClicked ? 0 : 1 }}>!Melon</Head>
        <Message isClicked={isClicked} setIsClicked={setIsClicked} />
        <Footer isClicked={isClicked} setIsClicked={setIsClicked} />
      </Container>
      <Hover />
    </>
  );
}
