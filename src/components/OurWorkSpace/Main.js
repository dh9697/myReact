import styled from "styled-components";

const Container = styled.div`
  background-color: blue;
  /* width + gap / height + 2gap */
  width: 220px;
  height: 340px;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  margin: 50px;
  & :hover {
    background-color: gold;
  }
`;
const Icon = styled.div`
  background-color: green;
  border: 1px solid black;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  & p {
    color: white;
    border: 1px solid black;
  }
`;

export function Main() {
  return (
    <>
      <Container>
        <Icon>
          <p>
            아이콘 <br />
            AboutUs
          </p>
        </Icon>
        <Icon>
          <p>
            아이콘 <br />
            OurProject
          </p>
        </Icon>
        <Icon>
          <p>
            아이콘 <br />
            Universe
          </p>
        </Icon>
        <Icon>
          <p>
            아이콘 <br />
            Music
          </p>
        </Icon>
        <Icon>
          <p>
            아이콘 <br />
            Discord
          </p>
        </Icon>
        <Icon>
          <p>
            아이콘 <br />
            setting
          </p>
        </Icon>
      </Container>
    </>
  );
}
