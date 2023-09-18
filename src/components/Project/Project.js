import styled, { keyframes } from "styled-components";
import { Box } from "./Box";

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
const Video = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -100;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Head = styled.h1`
  width: 100%;
  height: 15vh;
  margin: 0 auto;
  padding: 20px;
  background-color: transparent;
  text-align: center;
  font-size: 3rem;
`;

export function Project() {
  return (
    <>
      <Container>
        <Video>
          <video muted autoPlay loop>
            <source src="/videos/rainbow.mp4" type="video/mp4" />
          </video>
        </Video>
        <Head>!Melon</Head>
        <Box />
      </Container>
    </>
  );
}
