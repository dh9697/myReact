import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { Products } from "./Products";
import { Dashboard } from "./Dashboard";
import { Login } from "./Login";
import { Other } from "./Other";
import { Error } from "./Error";
import { SingleProduct } from "./SingleProduct";
import { ProductWrapper } from "./ProductWrapper";
import { createContext, useState } from "react";
import games from "./db/Data";
import { ProtectedRoute } from "./ProtectedRoute";

export const GameContext = createContext();
const defaultCheckList = games.map((game) => {
  return { id: game.id, checked: false };
});

export function GameShop() {
  const [checkList, setCheckList] = useState(defaultCheckList);
  // console.log(checkList);
  const [user, setUser] = useState({});
  return (
    <>
      <GameContext.Provider value={{ checkList, setCheckList, user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              {/* 홈페이지 기본 화면을 Home으로 하기 위해 index 사용 */}
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="products" element={<ProductWrapper />}>
                {/* 보여주는 것 없이 감싸는 용도로 Products 페이지를 띄워주고 singleproduct가 나올 때 products 없어짐  */}
                <Route index element={<Products />} />
                <Route path=":id" element={<SingleProduct />} />
                {/* www.gameshop.com/products/여기 써있는 것이 id로 인식 */}
                {/* 단, /가 붙으면 id의 자식으로 판단하므로 error 
              ex) www.gameshop.com/products/1004 => id= 1004
              ex) www.gameshop.com/products/1004/12 => error
              */}
              </Route>
              <Route
                path="dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              ></Route>
              <Route path="login" element={<Login />} />
              <Route path="cart" element={<Other />} />
              <Route path="*" element={<Error />} />
            </Route>
            {/* Route 부모 밑에 있는 Route의 path는 상대경로여야함(/ 빼준다) */}
            {/* 부모한테 Outlet이 있어야함 */}
          </Routes>
        </BrowserRouter>
      </GameContext.Provider>
    </>
  );
}
