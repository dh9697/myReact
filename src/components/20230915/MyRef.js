import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
`;
export function MyRef() {
  console.log("렌더링");
  const [inputValue, setInputValue] = useState("");
  /* useRef
  count 처럼 숫자를 세기 위해 기존 값을 저장하지만 렌더링은 발생시키지 않을 경우 사용.
  아래 코드처럼 count를 useState로 만들면 횟수를 세는 동안 계속 렌더링을 발생시키는 문제가 있음.
  */
  // const [count, setCount] = useState(0);
  const count = useRef(0);

  useEffect(() => {
    // setCount(count + 1);
    count.current = count.current + 1;
  }, [inputValue]); // inputValue가 바뀔 때 마다 렌더링
  // setCount 때문에 useState가 또 렌더링돼서 총 2번 렌더링됨

  function setValue(e) {
    setInputValue(e.target.value);
  }
  return (
    <>
      <Container>
        <input value={inputValue} onChange={setValue} />
        <p>
          렌더링 횟수 : <span>{count.current}</span>
        </p>
      </Container>
    </>
  );
}
