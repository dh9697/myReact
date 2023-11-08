// component는 반드시 대문자로 시작
import { Tab } from "./components/20230911/Tab";
import { Session1 } from "./components/20230911/session1";
import { List } from "./components/20230911/List";
import { Avatar } from "./components/20230912/Avatar";
import { AvatarList } from "./components/20230912/AvatarList";
import { PropsTest } from "./components/20230912/PropsTest";
import { CounterState } from "./components/20230912/CounterState";
import { Menu } from "./components/20230913/Menu";
import { Home } from "./components/20230913/Home";
import { createGlobalStyle } from "styled-components";
import { Button } from "./components/20230913/Button";
import { Gallery } from "./components/20230914/Gallery";
import { OpenWeather } from "./components/20230914/OpenWeather";
import { MyRef } from "./components/20230915/MyRef";
import { MyRouter } from "./components/20230915/MyRouter";
// import { GameShop } from "./components/20230918/GameShop";
import { UseContext } from "./components/20230919/UseContext";
import { SlideBox } from "./components/utils/SlideBox";
import { MyMotion1 } from "./components/20230922/MyMotion1";
import { Gesture } from "./components/20230922/Gesture";
import { MyMotion2 } from "./components/20230922/MyMotion2";
// import { GameShop } from "./components/GameShopFrontEnd/GameShop";
import { QueryClient, QueryClientProvider } from "react-query";
import { GameShop } from "./components/GameShopFrontEndT/GameShop";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Poppins, GmarketSansMedium ;
}
`;

const client = new QueryClient();

export default function App() {
  const score = { math: 80, english: 90, history: 100 };
  return (
    <>
      <QueryClientProvider client={client}>{<GameShop />}</QueryClientProvider>
      {/* <QueryClientProvider client={client}>{<GameShop />}</QueryClientProvider> */}
      {/* <MyMotion2 /> */}
      {/* <Gesture /> */}
      {/* <MyMotion1 /> */}
      {/* <SlideBox /> */}
      {/* <UseContext /> */}
      {/* <GameShop /> */}
      {/* <MyRouter /> */}
      {/* <MyRef /> */}
      {/* <OpenWeather cityName="seoul" /> */}
      {/* <Gallery /> */}
      <GlobalStyle />
      {/* <Button /> */}
      {/* <Home /> */}
      {/* <Menu /> */}
      {/* <CounterState /> */}
      {/* <PropsTest firstName={"철수"} score={score} /> */}
      {/* <AvatarList /> */}
    </>
  );
}
