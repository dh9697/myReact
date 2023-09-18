import { useParams } from "react-router-dom";

export function SingleProduct() {
  // useParams는 react-router-dom이 제공하는 후크
  // URL을 읽어서 id를 전달해줌
  const { id } = useParams(); // 디스트럭쳐링문법사용
  console.log(id);
  return (
    <>
      <h1>SingleProduct</h1>
    </>
  );
}