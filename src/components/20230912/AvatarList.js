import styled from "styled-components";
import { Avatar } from "./Avatar";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const persons = [
  { name: "Steve", job: "programmer", country: "대한민국" },
  { name: "Tom", job: "student", country: "USA" },
  { name: "Adrian", job: "engineer", country: "France" },
  { name: "Max", job: "painter", country: "Germany" },
];
const colors = ["lightgreen", "teal", "lightgray", "khaki"];
export function AvatarList() {
  return (
    <>
      <Container>
        {/* 동적인 코드 */}
        {persons.map((p, i) => (
          <Avatar bgColor={colors[i]} person={p} />
        ))}
        {/* 정적인 코드 */}
        {/* <Avatar
          bgColor="red"
          person={{ name: "다혜", job: "student", age: 28 }}
        />
        <Avatar
          bgColor="orange"
          person={{ name: "다혜", job: "student", age: 28 }}
        />
        <Avatar
          bgColor="yellow"
          person={{ name: "다혜", job: "student", age: 28 }}
        />
        <Avatar
          bgColor="pink"
          person={{ name: "다혜", job: "student", age: 28 }}
        /> */}
      </Container>
    </>
  );
}
// {
//   persons.map((person, index) => (
//     <Avatar key={index} bgColor={colors[index]} person={person} />
//   ));
// }
