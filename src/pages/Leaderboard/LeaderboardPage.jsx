import { useEffect } from "react";
import { useState } from "react";
import { getList } from "../../api/api";

import { Leaderboard } from "../../components/Leaderboard/Leaderboard";

export function LeaderboardPage() {
  const [winners, setWinners] = useState([]);

  useEffect(() => {
    getList()
      .then(data => {
        console.log(data);
        setWinners(data.leaders);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Leaderboard winners={winners}></Leaderboard>
    </>
  );
}
