import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { Clip } from "./Clip";
import { useState } from "react";
import { MainPage } from "./MainPage";
import { Artist } from "./Artist";
import { Recommand } from "./Recommand";

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
  z-index: -1000;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// const XLARGE = "3rem";
// const LARGE = "2rem";
// const MEDIUM = "1.5rem";
// const SMALL = "1rem";
// const XSMALL = "0.7rem";

export function Project() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <Container>
        <Video>
          <video muted autoPlay loop>
            <source src="/videos/rainbow.mp4" type="video/mp4" />
          </video>
        </Video>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/clip" element={<Clip />} />
            <Route path="/artist" element={<Artist />} />
            <Route path="/recommand" element={<Recommand />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}
