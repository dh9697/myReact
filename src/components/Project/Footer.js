import { useState } from "react";
import { styled, keyframes } from "styled-components";

const MovingText1 = keyframes`
0%{
    transform: translateX(100%);
    -webkit-transform: translateX(100%);
}
 100% {
    transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
  }
`;
const MovingText2 = keyframes`
0%{
  transform: translateX(0);
  -webkit-transform: translateX(0);
}
100%{
  transform: translateX(-200%);
  -webkit-transform: translateX(-200%);
}
`;

const Container = styled.div`
  width: 100%;
  height: 40px;
  background-color: white;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  white-space: nowrap;
  & .text1 {
    display: inline-block;
    /* span의 inline 속성은 박스가 아니기 때문에 가로값이 존재하지 않아서 translateX 명령을 수행할 수 없기 때문에 inline-block 적용 */
    width: 100%;
    transform: translateX(100%);
    animation: ${MovingText1} 8s infinite linear;
  }
  & .text2 {
    display: inline-block;
    width: 100%;
    transform: translateX(100%);
    animation: ${MovingText2} 8s 4s infinite linear;
  }
`;

export function Footer({ isClicked, setIsClicked }) {
  return (
    <>
      <Container style={{ display: isClicked ? "none" : "block" }}>
        <span className="text1">
          1first contents text 2second contents text
        </span>
        <span className="text2">
          3third contents text 4fourth contents text
        </span>
      </Container>
    </>
  );
}
// https://alvarotrigo.com/blog/css-text-animations/ 참고
