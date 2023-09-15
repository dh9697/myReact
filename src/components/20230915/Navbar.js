import styled from "styled-components";
import { Home } from "./Home";
import { Contact } from "./Contact";
import { About } from "./About";
import { NavLink, Link } from "react-router-dom";

const Container = styled.div`
  width: 200px;
  height: 100vh;
  background-color: #eee;
  font-size: 1.5rem;
  font-weight: 700;
  padding: 50px 10px;
`;
const Li = styled.li`
  list-style: none;
`;
// const Link = styled.a`
//   text-decoration: none;
//   color: black;
// `;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
export function Navbar(
  {
    /* setPage */
  }
) {
  return (
    <>
      <Container>
        <ul>
          <Li>
            {/* to 속성에는 router에서 선언한 url 주소(path)를 적어준다. */}
            <StyledLink to={"/"}>
              {/* <Link href="#" onClick={() => setPage(Home)}> */}
              Home
            </StyledLink>
          </Li>
          <Li>
            <StyledLink to={"/Contact"}>
              {/* <Link href="#" onClick={() => setPage(Contact)}> */}
              Contact
            </StyledLink>
          </Li>
          <Li>
            <StyledLink to={"/About"}>
              {/* <Link href="#" onClick={() => setPage(About)}> */}
              About
            </StyledLink>
          </Li>
        </ul>
      </Container>
    </>
  );
}
