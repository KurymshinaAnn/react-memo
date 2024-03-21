import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import styles from "./Leaderboard.module.css";

export function Leaderboard({ winners }) {
  const timeWinner = secs => {
    const minutes = Math.trunc(secs / 60);
    const seconds = secs % 60;
    return minutes.toString().padStart("2", "0") + ":" + seconds.toString().padStart("2", "0");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Лидерборд</h1>
        <Button>
          <Link className={styles.linkPlay} to={"/"}>
            Начать игру
          </Link>
        </Button>
      </div>
      <div className={styles.winnersBox}>
        <div className={styles.winnersBlock}>
          <h3 className={styles.winnerTitleNumber}>Позиция</h3>
          <h3 className={styles.winnerTitleName}>Пользователь</h3>
          <h3 className={styles.winnerTitleTime}>Время</h3>
        </div>
        {winners.map(winner => (
          <div className={styles.winnersBlock}>
            <div className={styles.winnerDataUserNumber}>#{winner.id}</div>
            <div className={styles.winnerDataUserName}>{winner.name}</div>
            <div className={styles.winnerDataUserTime}>{timeWinner(winner.time)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
