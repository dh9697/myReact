import { useQuery } from "react-query";
import { purchaseGames } from "./api";
import { Navigate } from "react-router-dom";

export function Purchase({ list }) {
  const { data: purchaseList, isLoading: purchasing } = useQuery(
    "purchase",
    () => purchaseGames(list)
  );
  return (
    <>{purchasing ? <h1>구매처리중...</h1> : <Navigate to="/dashboard" />}</>
  );
}
