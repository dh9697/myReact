import { styled, keyframes } from "styled-components";

const MovingText = keyframes`
0%{
    transform: translateX(100%);
}
 100% {
    transform: translateX(-100%);
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
  & span {
    display: inline-block;
    /* span의 inline 속성은 박스가 아니기 때문에 가로값이 존재하지 않아서 translateX 명령을 수행할 수 없기 때문에 inline-block 적용 */
    width: 100%;
    transform: translateX(100%);
    animation: ${MovingText} 8s infinite linear;
  }
`;

export function Footer() {
  return (
    <>
      <Container>
        <span>first contents text</span>
        <span>second contents text</span>
        <span>first contents text</span>
        <span>second contents text</span>
      </Container>
    </>
  );
}
// https://alvarotrigo.com/blog/css-text-animations/ 참고
