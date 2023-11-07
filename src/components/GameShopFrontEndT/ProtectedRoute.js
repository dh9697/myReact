import { useContext } from "react";
import { GameContext } from "./GameShop";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }) {
  const { loginState } = useContext(GameContext);
  //로그인이 되었는지 확인하는 조건 필요!!
  if (loginState?.id) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
