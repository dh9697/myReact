import styled from "styled-components";
const StyleButton = styled.button`
  width: 200px;
  height: 40px;
  padding: 10px 20px;
  font-size: 1.3rem;
  line-height: 8px;
  /* button text 높이를 맞추는건 line-height만 */
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  border-radius: 10px;
`;

export function Button({ color, bgColor, buttonText }) {
  return (
    <>
      <StyleButton color={color} bgColor={bgColor}>
        {buttonText}
      </StyleButton>
    </>
  );
}
