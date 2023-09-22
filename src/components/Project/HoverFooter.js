import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const fadedown = keyframes`
from{
  height: 0;
}
to{
  height: 50%;
}
`;
const fadeup = keyframes`
from{
  height: 50%;
  transform: translateY(0);
}
to{
  height: 0;
  transform: translateY(-400%);
}

`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
const Footer = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 0;
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  & h2 {
    width: 270px;
    text-align: center;
    font-size: 2rem;
    line-height: 30px;
    font-weight: 400;
    color: white;
    cursor: pointer;
  }
  & div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
  }
`;
const Button = styled.button`
  width: 50px;
  height: 30px;
  color: white;
  background-color: transparent;
  border: 1px solid white;
  cursor: pointer;
  border-radius: 5px;
`;

const Menu = styled.div`
  position: fixed;
  top: 0;
  background-color: white;
  width: 100%;
  height: 0%;
  &.show {
    animation: ${fadedown} 1.5s forwards ease-in-out;
  }
  &.hide {
    animation: ${fadeup} 1.5s forwards ease-in-out;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  padding: 30px 50px;
  opacity: 0;
  transition: all 0.2s linear;
  &.visible {
    opacity: 1;
  }
  & h2 {
    font-size: 1rem;
    font-style: italic;
    font-weight: 400;
    border-top: 1px solid black;
    margin-bottom: 20px;
  }
  & h3 {
    font-size: 2rem;
    padding: 0 0 0.5rem 0.5rem;
  }
  & h3:hover {
    text-decoration-line: underline;
    cursor: pointer;
  }
`;

const MailTo = styled.a`
  font-size: 2rem;
  padding: 0 0 0.5rem 0.5rem;
  text-decoration: none;
  color: black;
  font-weight: 600;
  &:hover {
    text-decoration: underline;
  }
`;

const Input = styled.div`
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  & input {
    border: 0;
    font-style: italic;
    font-size: 1.5rem;
    font-weight: 400;
    color: black;
  }
  & input:focus {
    outline: none;
  }
  & button {
    background-color: transparent;
    border: 1px dashed black;
    font-size: 1.5rem;
    padding: 5px 7px 0 7px;
    cursor: pointer;
  }
`;

const Icon = styled.div`
  font-size: 1.5rem;
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  & a {
    text-decoration: none;
    color: black;
  }
`;

export function HoverFooter() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [menu, setMenu] = useState("");
  const [visible, setVisible] = useState("");

  useEffect(() => {
    if (menu === "show") {
      setTimeout(() => {
        setVisible("visible");
      }, 1500);
    } else {
      setVisible("");
    }
  }, [menu]);

  function onMenuClick() {
    if (isMenuClicked) {
      setIsMenuClicked(false);
      setMenu("hide");
    } else {
      setIsMenuClicked(true);
      setMenu("show");
    }
  }
  // function onMenuClick() {
  //   if (isMenuClicked) {
  //     setIsMenuClicked(false);
  //     setMenu("");
  //     setVisible("");
  //   } else {
  //     setIsMenuClicked(true);
  //     setMenu("show");
  //     setTimeout(() => {
  //       setVisible("visible");
  //     }, 1500);
  //   }
  // }
  return (
    <>
      {isMenuClicked ? <Backdrop onClick={onMenuClick} /> : null}
      <Footer>
        <h2>The Radio Won't Let Me Sleep</h2>
        <div>
          <Button>Info</Button>
          <Button onClick={onMenuClick}>menu</Button>
          <Button>!vol</Button>
        </div>
      </Footer>
      <Menu className={menu}>
        <Content className={visible}>
          <div>
            <h2>The Album</h2>
            <h3>Music Videos</h3>
          </div>
          <div>
            <h2>Recommand List</h2>
            <Input>
              <input type="text" placeholder="Your recommand.." />
              <button>
                <iconify-icon icon="pixelarticons:arrow-right"></iconify-icon>
              </button>
            </Input>
          </div>
          <div>
            <h2>More</h2>
            <div>
              <h3>The Artist</h3>
              <h3>Recommand</h3>
              <h3>News</h3>
              <MailTo href="mailto:ghkt2535@naver.com">Contact</MailTo>
            </div>
          </div>
          <div>
            <h2>Listen & Follow</h2>
            <Icon>
              <a href="https://www.youtube.com/@choiyureee/videos">
                <iconify-icon icon="mdi:youtube"></iconify-icon>
              </a>
              <a href="https://www.instagram.com/_choiyuree/?hl=ko">
                <iconify-icon icon="mdi:instagram"></iconify-icon>
              </a>
              <a href="https://twitter.com/choiyr1025">
                <iconify-icon icon="mdi:twitter"></iconify-icon>
              </a>
              <a href="https://music.apple.com/us/artist/choi-yu-ree/1495022606">
                <iconify-icon icon="simple-icons:applemusic"></iconify-icon>
              </a>
              <a href="https://www.melon.com/artist/timeline.htm?artistId=2645970"></a>
            </Icon>
          </div>
        </Content>
      </Menu>
    </>
  );
}
