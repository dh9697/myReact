import styled from "styled-components";

const Container = styled.div`
  background-color: orange;
  width: 100%;
  height: 50px;
`;
const Nav = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const NavSection = styled.div`
  background-color: red;
  border: 1px solid black;
  width: 100%;
  height: 50px;
`;
const Logo = styled.div``;
const NavItem = styled.div`
  color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 100%;
  & div {
    border: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export function NavBar() {
  return (
    <>
      <Container>
        <Nav>
          <NavSection>
            <Logo>
              <p>아이콘과 로고</p>
            </Logo>
          </NavSection>
          <NavSection>
            <NavItem>
              <div>
                <p>Time : 시간입력</p>
              </div>
              <div>
                <p>Time : 날짜입력</p>
              </div>
              <div>
                <p>FullScreen F11 기능</p>
              </div>
            </NavItem>
          </NavSection>
        </Nav>
      </Container>
    </>
  );
}
