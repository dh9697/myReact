// imgur.com : imagesite
import styled from "styled-components";
const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
  text-align: center;
`;
const Title = styled.h1`
  font-size: 2.5rem;
  color: ${(props) => (props.isActive ? "orange" : props.fontColor)};
`;
const TitleBlue = styled(Title)`
  color: blue;
`;
const Image = styled.img`
  border-radius: 50%;
  width: 500px;
`;
export function List() {
  const products = [
    { title: "Banana" },
    { title: "Apple" },
    { title: "Grape" },
  ];
  const user = {
    name: "Hedy Lamarr",
    imageUrl: "https://i.imgur.com/KcI3uax.jpeg",
    imageSize: 90,
  };
  return (
    <>
      <TitleBlue>List Component</TitleBlue>
      <p>react practice code</p>
      <ul>
        {/* {products.map((p) => {
          return <li>{p.title}</li>
        })} */}
        {products.map((p) => (
          <Title isActive={false} fontColor="red">
            {p.title}
          </Title>
        ))}
      </ul>
      <Container>
        <Title fontColor="green" isActive={false}>
          {user.name}
        </Title>
        <Image src={user.imageUrl} alt={user.name} />
      </Container>
    </>
  );
}
