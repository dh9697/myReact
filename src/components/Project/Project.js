import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
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
  width: 100vw;
  height: 100vh;
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
const Head = styled.div`
  width: 20%;
  height: 20vh;
  margin: 0 auto;
  background-color: orange; //transparent;
  text-align: center;
  font-size: 3rem;
`;
const Box = styled.div`
  width: 50vw;
  height: 60vh;
  text-align: center;
  h2 {
  }
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
        <Head></Head>
        <Box>
          <h2>The Solidyoung Won't Let Me Sleep</h2>
          <p>Is Jihee hungry?</p>
        </Box>
      </Container>
    </>
  );
}
