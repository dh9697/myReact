import { NavLink, Link, Outlet } from "react-router-dom";
// NavLink는 active 클래스 추가 Link는 클래스 추가를 안함
// active를 추가하기 때문에 stlying을 할 수 있음
import { NavItem } from "./NavItem";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  padding: 5px;
  background-color: lightblue;
  &.active {
    background-color: dodgerblue;
    color: white;
  }
`;
export function Navbar() {
  return (
    <>
      <Container>
        <StyledNavLink to="/home">
          {/* to에는 절대 경로를 적어줌 */}
          <NavItem icon="ti ti-home-2" name="HOME" />
        </StyledNavLink>
        <StyledNavLink to="products">
          <NavItem icon="ti ti-building-store" name="SHOP" />
        </StyledNavLink>
        <StyledNavLink to="/dashboard">
          <NavItem icon="ti ti-user" name="MyPage" />
        </StyledNavLink>
        <StyledNavLink to="/login">
          <NavItem icon="ti ti-login" name="Login" />
        </StyledNavLink>
        <StyledNavLink to="/cart">
          <NavItem icon="ti ti-shopping-cart" name="Cart" />
        </StyledNavLink>
      </Container>
      <Outlet />
    </>
  );
}
