import styled from "styled-components";
import { AboutUs } from "./AboutUs";
import { Main } from "./Main";
import { OurProject } from "./OurProject";
import { Universe } from "./Universe";
import { Music } from "./Music";
import { Setting } from "./Setting";
import { useState } from "react";

const Container = styled.div`
  background-color: beige;
  width: 100%;
  /* NavBar height 50px */
  height: calc(100% - 50px);
  padding: 70px;
`;

export function Screen() {
  return (
    <>
      <Container>
        <Main />
        {/* Main에서 클릭에 따라 보여지고 안보여지고 */}
        {/* <AboutUs /> */}
        <OurProject />
        <Universe />
        <Music />
        <Setting />
      </Container>
    </>
  );
}
