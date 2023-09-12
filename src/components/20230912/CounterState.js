import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  width: 500px;
  text-align: center;
  margin: 0 auto;
  h1 {
    font-size: 4rem;
  }
  button {
    width: 100px;
    font-size: 2rem;
    margin: 10px;
  }
`;

export function CounterState() {
  console.log("CounterState start");
  // let count = 0;
  const [count, setCount] = useState(0);
  function minus() {
    console.log("minus", count);
    //  count = count - 1;
    setCount(count - 1);
  }
  function plus() {
    console.log("plus", count);
    //  count = count + 1;
    setCount(count + 1);
  }
  console.log("CounterState end", count);
  return (
    <>
      <Container>
        <h1>{count}</h1>
        <button onClick={minus}>-</button>
        <button onClick={plus}>+</button>
        {/* HTML과 다르게 camelcase이고 {함수()가 없어짐} 
        중괄호 없이 쓸 수 있는건 문자와 숫자  */}
      </Container>
    </>
  );
}
