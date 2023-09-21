import styled, { keyframes } from "styled-components";
import { useState } from "react";
import record from "./image/record.png";
import { HoverFooter } from "./HoverFooter";

const rotate = keyframes`
0%{
  transform: rotate(0);
}
100%{
  transform: rotate(360deg);
}
`;
const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 2s linear;
  &.show {
    opacity: 1;
  }
`;
const Head = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & div {
    margin: 0 2rem;
    display: flex;
    gap: 2rem;
    & h3 {
      font-size: 1rem;
      font-weight: 400;
      color: white;
      & span {
        display: inline-block;
        width: 5px;
        height: 5px;
        background-color: white;
        border-radius: 100%;
        margin: 3px 10px;
      }
    }
  }
`;
const Body = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  & a {
    width: 100%;
    text-decoration: none;
    color: white;
    & img {
      width: 100%;
      &:hover {
        animation: ${rotate} 5s infinite linear;
      }
    }
  }
`;

export function Hover() {
  const [show, setShow] = useState("");
  function onMouseEnter() {
    setTimeout(() => {
      setShow("show");
      console.log("timeout");
    }, 6000);
  }
  return (
    <>
      <Container onMouseEnter={onMouseEnter} className={show}>
        <Head>
          <div>
            <h3>01</h3>
            <h3>forest</h3>
          </div>
          <div>
            <h3>
              1:30<span></span>3:17
            </h3>
          </div>
        </Head>
        <Body>
          <a href="/clip">
            <img src={record} alt="record.png" />
          </a>
        </Body>
        <HoverFooter />
      </Container>
    </>
  );
}
