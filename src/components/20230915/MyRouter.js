import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { Contact } from "./Contact";
import { About } from "./About";
import { Error } from "./Error";
import { useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Container = styled.div`
  width: 80%;
  height: 100vh;
  display: grid;
  grid-template-columns: 30% 70%;
  margin: 0 auto;
`;
const Content = styled.div``;

export function MyRouter() {
  const [page, setPage] = useState(Home);
  return (
    <>
      {/* root 파일 가장 바깥으로 BrowserRouter 감싸야함 */}
      <BrowserRouter>
        <Container>
          <Navbar setPage={setPage} />
          <Content>
            <Routes>
              {/* path는 주소창의 url */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </Content>
        </Container>
      </BrowserRouter>
    </>
  );
}
