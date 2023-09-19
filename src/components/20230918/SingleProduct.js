import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import games from "./db/Data";

const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;
const Img = styled.img`
  width: 100%;
`;
const Content = styled.div`
  font-size: 1rem;
  margin-left: 10px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: dodgerblue;
`;

export function SingleProduct() {
  // useParams는 react-router-dom이 제공하는 후크
  // URL을 읽어서 id를 전달해줌
  // 컴포넌트끼리 props로 정보를 전달하는 것 처럼 url로 정보를 전달 받음
  const { id } = useParams(); // 디스트럭쳐링문법사용
  console.log(id);
  // id를 통해 db로부터 게임의 정보를 얻어옴
  const game = games.find((game) => game.id == id);
  // 객체의 디스터럭쳐링
  const { title, genre, image, price, text } = game;
  return (
    <>
      <h3>{game.title}</h3>
      <Container>
        <Img src={image} />
        <Content>
          <p>Title: {title}</p>
          <p>Genre: {genre}</p>
          <p>Price: {price}</p>
          <p>{text}</p>
          <StyledLink to="/products">목록으로 돌아가기</StyledLink>
        </Content>
      </Container>
    </>
  );
}
