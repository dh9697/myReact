import styled from "styled-components";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import FullScreenIcon from "./IconImage/FullScreen.png";
import { useState } from "react";

const Container = styled.div`
  background-color: orange;
  width: 100%;
  height: 50px;
`;
const Nav = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const NavSection = styled.div`
  background-color: red;
  border: 1px solid black;
  width: 100%;
  height: 50px;
`;
const Logo = styled.div``;
const NavItem = styled.div`
  color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 100%;
  & div {
    border: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    & figure {
      width: 20px;
      height: 20px;
    }
  }
`;
const IconImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Btn = styled.button`
  cursor: pointer;
`;

export function NavBar({ toggleFullScreen }) {
  return (
    <>
      <Container>
        <Nav>
          <NavSection>
            <Logo>
              <p>아이콘과 로고</p>
            </Logo>
          </NavSection>
          <NavSection>
            <NavItem>
              <div>
                <figure>
                  <IconImg src={FullScreenIcon} />
                </figure>
                <Btn>
                  오전 대충 시간 <br /> 2023-날-짜
                </Btn>
              </div>
              <div>
                <figure>
                  <IconImg src={FullScreenIcon} />
                </figure>
                <Btn>현재 위치와 날씨</Btn>
              </div>
              <div>
                <figure>
                  <IconImg src={FullScreenIcon} />
                </figure>
                <Btn onClick={toggleFullScreen}>FullScreen F11 기능</Btn>
              </div>
            </NavItem>
          </NavSection>
        </Nav>
      </Container>
    </>
  );
}
