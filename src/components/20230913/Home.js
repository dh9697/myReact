import { Menu } from "./Menu";
import { Button } from "./Button";
import { ItemList } from "./ItemList";
import styled from "styled-components";

const Container = styled.div`
  width: 150px;
  height: 100vh;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 0;
`;
const Content = styled.div`
  position: absolute;
  top: 0;
  left: 150px;
  width: ${() => window.innerWidth - 150}px;
  height: 100vh;
`;
// 완전 상수면 모두 대문자
const XLARGE = "3rem";
const LARGE = "2rem";
const MEDIUM = "1.5rem";
const SMALL = "1rem";
const XSMALL = "0.7rem";

export function Home() {
  return (
    <>
      <Container>
        <Menu fontSize={MEDIUM} />
        {/* <h1>한글 폰트 알아보자</h1> */}
      </Container>
      <Content>
        <div>
          <Button color="white" bgColor="khaki" buttonText="button1" />
          <Button color="dodgerblue" bgColor="lightblue" buttonText="button2" />
          <Button color="teal" bgColor="lightgreen" buttonText="button3" />
        </div>
        <div>
          <br />
          <br />
          <br />
          <ItemList />
        </div>
      </Content>
    </>
  );
}
