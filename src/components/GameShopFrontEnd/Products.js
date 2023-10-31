import styled from "styled-components";
// import games from "./db/Data";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GameContext } from "./GameShop";
import { useQuery } from "react-query";
import { getAllGames } from "./api";

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
const Card = styled.div`
  width: 300px;
  border: 2px solid dodgerblue;
  margin-bottom: 20px;
  font-size: 0.8rem;
  cursor: pointer;
`;
const Img = styled.img`
  width: 100%;
`;
const Text = styled.p`
  margin-left: 10px;
`;

export function Products() {
  const navigate = useNavigate();
  const { checkList, setCheckList, games, isGamesLoading } =
    useContext(GameContext);
  // const { data: games, isLoading: isGamesLoading } = useQuery(
  //   "games",
  //   getAllGames
  // );

  function onClick(id) {
    console.log(id);
    // 상대경로는 '/' 없이 작성함. 현재 주소 뒤에 추가됨
    navigate(`${id}`); // Data의 id가 숫자이고, navigate의 to는 문자여야 하기 때문에
    // 절대경로는 '/' 로 시작되는 root 이하 전체 주소를 적어야 함
    // navigate(`/products/${id}`);
  }
  function onChange(e) {
    const temp = checkList.map((item) => {
      if (item.id == e.target.id) {
        return { ...item, checked: e.target.checked };
      } else {
        return item;
      }
    });
    console.log(temp);
    setCheckList(temp);
  }
  // function getAllGames() {
  //   return fetch("http://localhost:8080/products", { method: "GET" }).then(
  //     (reponse) => Response.json()
  //   );
  // }

  return (
    <>
      <h3>Games List</h3>
      <Container>
        {isGamesLoading ? (
          <h1>로딩중...</h1>
        ) : (
          games.map((game, i) => (
            <Card key={game.id}>
              {/* <div onClick={onClick}> id가 이벤트 객체가 됨 */}
              <div onClick={(e) => onClick(game.id)}>
                {/* 애로우 함수로 e 콜백함수가 game.id라는 파라미터를 가진 onClick 일반 함수를 실행 */}
                <Img src={game.image} />
                <Text>Title: {game.title}</Text>
                <Text>Genre: {game.genre}</Text>
                <Text>Price: {game.price}</Text>
              </div>
              <input
                type="checkbox"
                id={game.id}
                onChange={onChange}
                checked={checkList[i].checked}
              />
            </Card>
          ))
        )}
      </Container>
    </>
  );
}
