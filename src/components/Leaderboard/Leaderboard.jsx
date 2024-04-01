import styles from "./Leaderboard.module.css";

import { Link } from "react-router-dom";
import { Button } from "../Button/Button";

import hardLevelImageUrl from "./images/hard_level_not_active.svg";
import hardActivedLevelImageUrl from "./images/hard_level_is_active.svg";
import superpowersImageUrl from "./images/superpowers_not_active.svg";
import superpowersActivedImageUrl from "./images/superpowers_is_active.svg";

export function Leaderboard({ winners }) {
  const imgHardLvl = hardLevelImageUrl;
  const imgActivedHardLvl = hardActivedLevelImageUrl;

  const imgPower = superpowersImageUrl;
  const imgActivedPower = superpowersActivedImageUrl;

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
          <h3 className={styles.winnerTitleAchievements}>Достижения</h3>
          <h3 className={styles.winnerTitleTime}>Время</h3>
        </div>
        {winners.map(winner => (
          <div className={styles.winnersBlock}>
            <div className={styles.winnerDataUserNumber}>#{winner.id}</div>
            <div className={styles.winnerDataUserName}>{winner.name}</div>
            <div className={styles.winnerDataUserAchievements}>
              {winner.achievements.includes(1) ? (
                <img className={styles.image} src={imgActivedHardLvl} alt={imgActivedHardLvl} />
              ) : (
                <img className={styles.image} src={imgHardLvl} alt={imgHardLvl} />
              )}
              {winner.achievements.includes(2) ? (
                <img className={styles.image} src={imgActivedPower} alt={imgActivedPower} />
              ) : (
                <img className={styles.image} src={imgPower} alt={imgPower} />
              )}
            </div>
            <div className={styles.winnerDataUserTime}>{timeWinner(winner.time)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
