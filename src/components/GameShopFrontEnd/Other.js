import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { GameContext } from "./GameShop";
import { Purchase } from "./Purchase";

const Container = styled.div`
  position: relative;
`;
const Card = styled.div`
  width: 400px;
  height: 100px;
  display: flex;
  border: 1px solid dodgerblue;
  margin: 10px 0;
  position: relative;
`;
const Img = styled.img`
  height: calc(100%-2px);
  margin: 1px;
`;
const Text = styled.p`
  margin-left: 10px;
  font-size: 0.5rem;
`;
const DeleteBtn = styled.button`
  position: absolute;
  right: 0;
  border: 0;
  background-color: dodgerblue;
  color: white;
  line-height: 100px;
  cursor: pointer;
`;
const PayBtn = styled.button`
  background-color: dodgerblue;
  color: white;
  border: 0;
  width: 100px;
`;

export function Other() {
  const { checkList, setCheckList, games } = useContext(GameContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [purchasing, setPurchasing] = useState(false);
  const NewList = games.filter((g, i) => checkList[i].checked);
  // console.log(NewList);

  function onClick(e) {
    const temp = checkList.map((item) => {
      if (item.id == e.target.id) {
        return { ...item, checked: false };
      } else {
        return item;
      }
    });
    setCheckList(temp);
  }
  function onClickBtn() {
    setPurchasing(true);
  }

  useEffect(() => {
    let price = 0;
    for (let i = 0; i < NewList.length; i++) {
      price = price + NewList[i].price;
    }
    setTotalPrice(price); // set은 반드시 어떠한 조건이 있어야 무한루프에 거리지 않음.
  }, [checkList]);

  return (
    <>
      {!purchasing ? (
        <>
          <Container>
            {NewList.map((game) => (
              <Card key={game.id}>
                <Img src={game.image} />
                <div>
                  <Text>Title: {game.title}</Text>
                  <Text>Genre: {game.genre}</Text>
                  <Text>Price: {game.price}원</Text>
                </div>
                <DeleteBtn id={game.id} onClick={onClick}>
                  Delete
                </DeleteBtn>
              </Card>
            ))}
          </Container>
          <h3>Total : {`${totalPrice}원`}</h3>
          <PayBtn onClick={onClickBtn}>결제버튼</PayBtn>
        </>
      ) : (
        <Purchase list={NewList} />
      )}
    </>
  );
}
