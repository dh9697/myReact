import "./session1.css";
import wave from "./session1_image/wave.jpg";
import scenery from "./session1_image/scenery.jpg";
import sunset from "./session1_image/sunset.jpg";
import pinni from "./session1_image/pinni.jpg";
import styled, { keyframes } from "styled-components";

const gradient = keyframes`
  0% {
    color: black;
  }
  50% {
    color: darkblue;
    opacity: 0.5;
  }
  100% {
    color: black;
}
`;
const BigBox1 = styled.div`
  text-align: center;
  font-size: 2.5rem;
  font-family: "Black Ops One", cursive;
  margin-bottom: 20px;
  animation: ${gradient} 1000ms infinite linear;
`;
const BigBox2 = styled.div`
  width: 80%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  .b1 img {
    width: 100%;
  }
  .b2 {
    width: 100%;
    height: 100%;
    font-size: 0.7rem;
    padding: 0.5rem;
  }
`;
const BigBox3 = styled.div`
  width: 80%;
  height: 400px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  gap: 0.5rem;
  margin-top: 20px;
  .smallbox1,
  .smallbox2,
  .smallbox3 {
    width: 100%;
    img {
      width: 100%;
      max-width: 100%;
      height: 250px;
      object-fit: cover;
    }
  }
`;

export function Session1() {
  return (
    <>
      <BigBox1>Hello world</BigBox1>
      <BigBox2>
        <div className="b1">
          <img src={wave} alt="wave" />
        </div>
        <div className="b2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit unde fugit impedit repellendus mollitia quisquam,
            doloribus facilis consequatur cumque deleniti! Omnis voluptates
            ipsum praesentium nihil similique iure dolorem fugit quasi.
          </p>
        </div>
      </BigBox2>
      <BigBox3>
        <div className="smallbox1">
          <img src={scenery} alt="scenery" />
        </div>
        <div className="smallbox2">
          <img src={sunset} alt="sunset" />
        </div>
        <div className="smallbox3">
          <img src={pinni} alt="pinni" />
        </div>
      </BigBox3>
    </>
  );
}
