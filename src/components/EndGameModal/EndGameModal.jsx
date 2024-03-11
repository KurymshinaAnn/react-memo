import styles from "./EndGameModal.module.css";

import { Button } from "../Button/Button";

import deadImageUrl from "./images/dead.png";
import celebrationImageUrl from "./images/celebration.png";
import { Link } from "react-router-dom";

export function EndGameModal({ isWon, isWorthy, gameDurationSeconds, gameDurationMinutes, onClick }) {
  const title = isWon ? (isWorthy ? "Вы попали на Лидерборд!" : "Вы победили!") : "Вы проиграли!";

  const imgSrc = isWon ? celebrationImageUrl : deadImageUrl;

  const imgAlt = isWon ? "celebration emodji" : "dead emodji";

  const btnWin = isWon ? "Играть снова" : "Начать сначала";

  return (
    <div className={styles.modal}>
      <img className={styles.image} src={imgSrc} alt={imgAlt} />
      <h2 className={styles.title}>{title}</h2>
      {isWorthy && isWon ? (
        <form>
          <label>
            <input className={styles.input} type="text" placeholder="Имя пользователя" />
          </label>
        </form>
      ) : null}
      <p className={styles.description}>Затраченное время:</p>
      <div className={styles.time}>
        {gameDurationMinutes.toString().padStart("2", "0")}.{gameDurationSeconds.toString().padStart("2", "0")}
      </div>

      <Button onClick={onClick}>{btnWin}</Button>
      {isWorthy && isWon ? (
        <Link className={styles.boardLink} to={"/leaderboard"}>
          Перейти к лидерборду
        </Link>
      ) : null}
    </div>
  );
}
