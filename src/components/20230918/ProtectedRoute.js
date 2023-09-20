import { Navigate } from "react-router-dom";
import { Login } from "./Login";
import { useContext } from "react";
import { GameContext } from "./GameShop";

export function ProtectedRoute({ children }) {
  const { user, setUser } = useContext(GameContext);
  // 로그인이 되었는지 확인하는 조건
  if (user.name && user.email) {
    return children;
  } else {
    // return <Login />;
    return <Navigate to="/login" />;
  }
}
