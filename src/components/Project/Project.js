import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Video = styled.div`
  width: 100vw;
  height: 100vh;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Header = styled.div`
  h3 {
  }
`;
const Center = styled.div``;
export function Project() {
  return (
    <>
      <Container>
        <Video>
          <video muted autoPlay loop width="100%" height="100%">
            <source src="/videos/flame.mp4" type="video/mp4" />
          </video>
          <video></video>
          <video></video>
        </Video>
        <Header>
          <h3></h3>
        </Header>
        <Center>
          <button></button>
        </Center>
      </Container>
    </>
  );
}
