import { Button } from "../Button/Button";
import styles from "./Leaderboard.module.css";

export function Leaderboard() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <title className={styles.title}>Лидерборд</title>
        <Button onClick={""}>Начать заново</Button>
      </div>

      <div className={styles.winnersBox}>
        <div className={styles.winnersBlock}>
          <h3 className={styles.winnerTitle}>Позиция</h3>
          <h3 className={styles.winnerTitle}>Пользователь</h3>
          <h3 className={styles.winnerTitle}>Время</h3>
        </div>
        <div className={styles.winnersBlock}>
          <div className={styles.winnerData}>{"number"}</div>
          <div className={styles.winnerData}>{"name"}</div>
          <div className={styles.winnerData}>{"time"}</div>
        </div>
      </div>
    </div>
  );
}
