import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { Products } from "./Products";
import { Dashboard } from "./Dashboard";
import { Login } from "./Login";
import { Other } from "./Other";
import { Error } from "./Error";
import { SingleProduct } from "./SingleProduct";

export function GameShop() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            {/* 홈페이지 기본 화면을 Home으로 하기 위해 index 사용 */}
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="products" element={<Products />}>
              <Route path=":id" element={<SingleProduct />} />
              {/* www.gameshop.com/products/여기 써있는 것이 id로 인식 */}
              {/* 단, /가 붙으면 id의 자식으로 판단하므로 error 
              ex) www.gameshop.com/products/1004 => id= 1004
              ex) www.gameshop.com/products/1004/12 => error
              */}
            </Route>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="login" element={<Login />} />
            <Route path="cart" element={<Other />} />
            <Route path="*" element={<Error />} />
          </Route>
          {/* Route 부모 밑에 있는 Route의 path는 상대경로여야함(/ 빼준다) */}
          {/* 부모한테 Outlet이 있어야함 */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
