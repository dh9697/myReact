import styled from "styled-components";
// const BigContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background-color: ${(props) => props.bgColor};
//   box-sizing: border-box;
// `;
const Container = styled.div`
  box-sizing: border-box;
  width: 300px;
  background-color: ${(props) => props.bgColor};
  box-shadow: 1px 2px 5px gray;
  padding: 10px;
  margin-bottom: 20px;
`;
const Bold = styled.p`
  font-weight: 700;
  font-size: 2rem;
  color: dodgerblue;
`;
export function Avatar({ bgColor, person: { name, job, country } }) {
  return (
    <>
      <Container bgColor={bgColor}>
        <div>
          <Bold>{name}</Bold>
          <p>Job : {job}</p>
          <p>Country : {country}</p>
        </div>
      </Container>
    </>
  );
}
