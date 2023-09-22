import styled from "styled-components";
import { useState } from "react";
import { HoverFooter } from "./HoverFooter";
import { SlideBox } from "./SlideBox";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const Head = styled.h1`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: transparent;
  text-align: center;
  font-size: 2.5rem;
  opacity: 0;
  &.show {
    opacity: 1;
  }
`;

export function Clip() {
  const [show, setShow] = useState("");
  function onMouseEnter() {
    setTimeout(() => {
      setShow("show");
      console.log("timeout");
    }, 2000);
  }
  return (
    <>
      <Container onMouseEnter={onMouseEnter}>
        <Head className={show}>!Melon</Head>
        <SlideBox />
        <HoverFooter className={show} />
      </Container>
    </>
  );
}
