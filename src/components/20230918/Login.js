import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { GameContext } from "./GameShop";

const Container = styled.div`
  width: 300px;
  background-color: #eee;
  box-shadow: 0 0 5px gray;
  padding: 20px;
  border-radius: 20px;
  margin: 50px;
`;
const Header = styled.div`
  font-size: 1.5rem;
  text-align: center;
`;
const Button = styled.button`
  width: 100%;
  height: 25px;
  margin-top: 20px;
  background-color: dodgerblue;
  border: 0;
  color: white;
  cursor: pointer;
`;

export function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const { user, setUser } = useContext(GameContext);
  const navigate = useNavigate();
  function onSubmit(e) {
    e.preventDefault();
    if (!username || !email) {
      // 이름과 이메일을 작성하지 않은 경우, 마이페이지로 보내지 않음.
      return;
    }
    // 마이페이지로 보냄
    navigate("/dashboard");
    // 유저 정보를 부모가 관리하도록 setter를 호출하고 객체로 저장
    setUser({ name: username, email: email });
  }

  return (
    <>
      <Container>
        <form onSubmit={onSubmit}>
          <Header>Login</Header>
          <div>
            <label>user name</label>
            <br />
            <input
              id="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Container>
    </>
  );
}
