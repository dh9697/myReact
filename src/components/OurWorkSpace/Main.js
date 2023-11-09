import styled from "styled-components";
import AboutUsIcon from "./IconImage/AboutUs.png";
import OurProjectIcon from "./IconImage/OurProject.png";
import UniverseIcon from "./IconImage/Universe.png";
import MusicIcon from "./IconImage/Music.png";
import DiscordIcon from "./IconImage/Discord.png";
import SettingIcon from "./IconImage/Setting.png";

const Container = styled.div`
  background-color: blue;
  /* width + gap / height + 2gap */
  width: 220px;
  height: 340px;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  margin: 70px;
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  & figure {
    width: 60px;
    height: 60px;
  }
`;
const IconImg = styled.img`
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
`;
const IconTitle = styled.p`
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0 5px;
`;
export function Main() {
  return (
    <>
      <Container>
        <Icon>
          <figure>
            <IconImg src={AboutUsIcon} />
          </figure>
          <IconTitle>AboutUs</IconTitle>
        </Icon>
        <Icon>
          <figure>
            <IconImg src={OurProjectIcon} />
          </figure>
          <IconTitle>OurProject</IconTitle>
        </Icon>
        <Icon>
          <figure>
            <IconImg src={UniverseIcon} />
          </figure>
          <IconTitle>Universe</IconTitle>
        </Icon>
        <Icon>
          <figure>
            <IconImg src={MusicIcon} />
          </figure>
          <IconTitle>Music</IconTitle>
        </Icon>
        <Icon>
          <figure>
            <IconImg src={DiscordIcon} />
          </figure>
          <IconTitle>Discord</IconTitle>
        </Icon>
        <Icon>
          <figure>
            <IconImg src={SettingIcon} />
          </figure>
          <IconTitle>Setting</IconTitle>
        </Icon>
      </Container>
    </>
  );
}
