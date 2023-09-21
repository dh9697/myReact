import styled from "styled-components";
import { SlidePage } from "./SlidePage";

const Wrapper = styled.div``;
const Btn = styled.button``;
const Btn1 = styled(Btn)``;
const Btn2 = styled(Btn)``;
const Container = styled.div``;
const Slide = styled.div``;

export function Slide() {
  function handleLeftBtn() {}
  function handleRightBtn() {}
  return (
    <>
      <Wrapper>
        <Container>
          <Slide>
            <SlidePage />
          </Slide>
        </Container>
        <Btn1 onClick={handleLeftBtn}>LEFT</Btn1>
        <Btn2 onClick={handleRightBtn}>RIGHT</Btn2>
      </Wrapper>
    </>
  );
}
