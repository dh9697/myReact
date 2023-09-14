// Representational State Transfer(REST) API
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Card = styled.div`
  width: 500px;
  height: 300px;
  background: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
  color: white;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const Icon = styled.div`
  text-align: center;
  margin-top: 20px;
  img {
    width: 100%;
  }
`;
const Weather = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
  padding: 20px 20px 0 0;
`;
const Temp = styled.div`
  font-size: 5rem;
  i {
    font-size: 3.5rem;
  }
`;
const City = styled.div`
  font-size: 2.5rem;
  font-weight: 600;
`;
const Info = styled.div`
  font-size: 1.5rem;
  margin-top: 30px;
  font-weight: 500;
`;

export function OpenWeather() {
  const API_KEY = "b353ec7a9a2f1026b55dc52fc9d679bf";
  const [icon, setIcon] = useState(null);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  console.log("렌더링");

  /* useEffect() 후크
  1. 특정한 state의 변화에만 실행되는 코드를 내부에 정의할 수 있음.
       - 두번째 파라미터에 배열 형식으로 의존하는 state를 결정할 수 있음.
          ex) useEffect(() => {}, [temp, weather]);
  2. 컴포넌트가 최초 로딩될 때 딱 한번만 실행되는 코드를 정의할 수 있음.
     - 빈 배열[]을 사용하면 최초 로딩 시 딱 한번만 실행됨.
          ex) useEffect(() => {}, []);
  */
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(geoOK, geoError);
    console.log("useEffect");
  }, []);

  // navigator.geolocation.getCurrentPosition(geoOK, geoError);
  function geoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setIcon(data.weather[0].icon);
        setTemp(parseInt(data.main.temp));
        setCity(data.name);
        setWeather(data.weather[0].main);
      })
      .catch((error) => {
        console.log("요청이 실패했습니다.", error);
      });
  }
  function geoError() {
    alert("현재 위치 정보를 찾을 수 없습니다.");
  }
  return (
    <>
      <Container>
        <Card>
          <Icon>
            <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
          </Icon>
          <Weather>
            <Temp>
              {temp}
              <i className="ti ti-temperature-celsius"></i>
            </Temp>
            <City>{city}</City>
            <Info>{weather}</Info>
          </Weather>
        </Card>
      </Container>
    </>
  );
}
// return은 바로 옆에 ()가 있어야 값을 return
// https://tabler-icons.io/
