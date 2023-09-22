import { useRef, useState } from "react";
import styled from "styled-components";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { Page3 } from "./Page3";
import { Page4 } from "./Page4";

// 슬라이드 한개의 크기를 여기서 세팅함(px)
// 화면 전체는 window.innerWidth, window.innerHeight를 사용
const WIDTH = 600;
const HEIGHT = 400;

// 화면전체. 슬라이드 컨테이너를 화면 가운데 배치
const Wrapper = styled.div`
  width: 100%;
  height: 650px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
// 슬라이드 1개를 보여주는 윈도우. 슬라이드 하나의 사이즈를 가짐(액자형식)
const Container = styled.div`
  width: ${WIDTH}px;
  height: ${HEIGHT}px;
  overflow: hidden;
  position: relative;
`;
// 이동하는 슬라이드, 여러개의 슬라이드가 연결되어있음
const Slide = styled.div`
  position: absolute;
  transition: all 0.5s ease;
  transform: translateX(${(props) => props.$translateX}px);
`;
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
const Btn = styled.button`
  width: 100px;
  height: 50px;
  position: absolute;
  top: 50%;
  background-color: transparent;
  color: white;
  letter-spacing: 5px;
  border-radius: 5px;
  border: 0;
  cursor: pointer;
`;
const Btn1 = styled(Btn)`
  left: 5%;
  box-shadow: -5px 5px 20px white, 0 0 20px rgba(0, 0, 0, 0.3);
`;
const Btn2 = styled(Btn)`
  right: 5%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3), 5px 5px 20px white;
`;

export function SlideBox() {
  const pageList = [<Page1 />, <Page2 />, <Page3 />, <Page4 />];
  const [slideX, setSlideX] = useState(0);
  const page = useRef(0);
  function handleLeftBtn() {
    if (page.current > 0) {
      setSlideX(slideX + 1);
      page.current = page.current - 1;
    }
  }
  function handleRightBtn() {
    if (page.current < pageList.length - 1) {
      setSlideX(slideX - 1);
      page.current = page.current + 1;
    }
  }

  return (
    <>
      <Wrapper>
        <Container>
          <Slide $translateX={slideX * WIDTH}>
            {pageList.map((Page, i) => (
              <Page key={i} left={WIDTH * i} />
            ))}
          </Slide>
        </Container>
        <Btn1 onClick={handleLeftBtn}>LEFT</Btn1>
        <Btn2 onClick={handleRightBtn}>RIGHT</Btn2>
      </Wrapper>
    </>
  );
}

// function Page2({ left }) {
//   return (
//     <>
//       <Page $left={left}>
//         <h3>
//           02 <span>숲</span>
//         </h3>
//         <Video>
//           <video muted autoPlay loop>
//             <source src="/videos/forest.mp4" type="video/mp4" />
//           </video>
//         </Video>
//       </Page>
//     </>
//   );
// }
// function Page3({ left }) {
//   return (
//     <>
//       <Page $left={left}>
//         <h3>
//           03 <span>바다</span>
//         </h3>
//         <Video>
//           <video muted autoPlay loop>
//             <source src="/videos/sea.mp4" type="video/mp4" />
//           </video>
//         </Video>
//       </Page>
//     </>
//   );
// }
// function Page4({ left }) {
//   return (
//     <>
//       <Page $left={left}>
//         <h3>
//           04 <span>한 숨</span>
//         </h3>
//         <Video>
//           <video muted autoPlay loop>
//             <source src="/videos/rainbow.mp4" type="video/mp4" />
//           </video>
//         </Video>
//       </Page>
//     </>
//   );
// }
