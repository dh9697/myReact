import styled from "styled-components";
// 슬라이드 1개의 스타일링
const WIDTH = 600;
const HEIGHT = 400;

const Page = styled.div`
  width: ${WIDTH}px;
  height: ${HEIGHT}px;
  position: absolute;
  left: ${(props) => props.$left}px;
  top: 0;
  & h3 {
    font-weight: 900;
    margin-bottom: 10px;
  }
`;

const Video = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export function Page2({ left }) {
  return (
    <>
      <Page $left={left}>
        <h3>
          02 <span>숲</span>
        </h3>
        <Video>
          <video muted autoPlay loop>
            <source src="/videos/forest.mp4" type="video/mp4" />
          </video>
        </Video>
      </Page>
    </>
  );
}
