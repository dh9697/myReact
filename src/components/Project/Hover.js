import styled, { keyframes } from "styled-components";
import { useState } from "react";

const fadein = keyframes`
0%{
  opacity: 0;
}
100%{
  opacity: 1;
}
`;
const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  &.fadein {
    animation: ${fadein} 3s 3s forwards ease-in;
  }
`;
const Head = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: aliceblue;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & div {
    margin: 0 2rem;
    display: flex;
    gap: 2rem;
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
    }
  }
`;
const Footer = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 0;
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  & h2 {
    width: 270px;
    text-align: center;
    font-size: 2rem;
    line-height: 30px;
    font-weight: 400;
    color: white;
    cursor: pointer;
  }
  & div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
    & button {
      width: 50px;
      height: 30px;
      color: white;
      background-color: transparent;
      border: 1px solid white;
      cursor: pointer;
    }
  }
`;
const InfoBtn = styled.button`
  border: 0;
`;
const MenuBtn = styled.button``;
const VolBtn = styled.button``;

export function Hover() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <Container className={isClicked ? "fadein" : ""}>
        <Head>
          <div>
            <h3>순서</h3>
            <h3>노래이름</h3>
          </div>
          <div>
            <h3>
              재생시간<span>0</span>노래시간
            </h3>
          </div>
        </Head>
        <Body>
          <a href="https://www.google.com">
            <img src="image/record.jpg" alt="record.jpg" />
          </a>
        </Body>
        <Footer>
          <h2>The Radio Won't Let Me Sleep</h2>
          <div>
            <InfoBtn>Info</InfoBtn>
            <MenuBtn>menu</MenuBtn>
            <VolBtn>!vol</VolBtn>
          </div>
        </Footer>
      </Container>
    </>
  );
}
