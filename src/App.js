// component는 반드시 대문자로 시작
import { Tab } from "./components/20230911/Tab";
import { Session1 } from "./components/20230911/session1";
import { List } from "./components/20230911/List";
import { Avatar } from "./components/20230912/Avatar";
import { AvatarList } from "./components/20230912/AvatarList";
import { PropsTest } from "./components/20230912/PropsTest";
import { CounterState } from "./components/20230912/CounterState";

export default function App() {
  const score = { math: 80, english: 90, history: 100 };
  return (
    <>
      <CounterState />
      {/* <PropsTest firstName={"철수"} score={score} /> */}
      {/* <AvatarList /> */}
    </>
  );
}
