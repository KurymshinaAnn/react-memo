import styles from "./EndGameModal.module.css";
import cn from "classnames";

import { Button } from "../Button/Button";

import deadImageUrl from "./images/dead.png";
import celebrationImageUrl from "./images/celebration.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { createLeaderboard } from "../../api/api";

export function EndGameModal({
  isWon,
  usedSuperpowers,
  isHard,
  level,
  gameDurationSeconds,
  gameDurationMinutes,
  onClick,
}) {
  const isWorthy = level === 9;

  const title = isWon ? (isWorthy ? "Вы попали на Лидерборд!" : "Вы победили!") : "Вы проиграли!";

  const imgSrc = isWon ? celebrationImageUrl : deadImageUrl;

  const imgAlt = isWon ? "celebration emodji" : "dead emodji";

  const btnWin = isWon ? "Играть снова" : "Начать сначала";

  const [name, setName] = useState();
  const [saved, setSaved] = useState(false);

  function onInput(e) {
    setName(e.target.value);
  }

  function getSecs() {
    return gameDurationMinutes * 60 + gameDurationSeconds;
  }

  function saveResult() {
    const achievements = [];
    if (isHard) {
      achievements.push(1);
    }
    if (usedSuperpowers.length === 0) {
      achievements.push(2);
    }
    createLeaderboard({ name, time: getSecs(), achievements }).then(() => {
      setSaved(true);
    });
  }

  return (
    <div className={styles.modal}>
      <img className={styles.image} src={imgSrc} alt={imgAlt} />
      <h2 className={styles.title}>{title}</h2>

      {isWorthy && isWon ? (
        <form className={styles.form}>
          <label>
            <input
              className={styles.input}
              onChange={onInput}
              value={name}
              type="text"
              placeholder="Имя пользователя"
            />
          </label>
        </form>
      ) : null}

      {isWorthy && isWon ? (
        <Button className={cn(styles.buttonSave, saved ? styles.buttonSave_notActive : null)} onClick={saveResult}>
          {saved ? "Результат сохранен" : "Сохранить результат"}
        </Button>
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
