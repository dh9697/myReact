import styled from "styled-components";
import { NavBar } from "./NavBar";
import { Main } from "./Main";

const Container = styled.div`
  background-color: black;
  width: calc(100vw - 10px);
  height: 100vh;
`;
export function Home() {
  return (
    <>
      <Container>
        <NavBar />
        <Main />
      </Container>
    </>
  );
}
