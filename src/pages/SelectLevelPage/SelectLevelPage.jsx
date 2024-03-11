import { Link } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";
import { useState } from "react";
import { gameModes } from "../../utils/game-modes";
import { Button } from "../../components/Button/Button";

export function SelectLevelPage() {
  const [simpleGame, setSimpleGame] = useState(false);

  const toggleSimpleGame = () => {
    setSimpleGame(state => !state);
  };

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Выбери сложность</h1>
        <div className={styles.mode}>
          <label className={styles.label}>
            <input type="checkbox" onChange={toggleSimpleGame} value={simpleGame} />
            <span className={styles.slider} />
          </label>
          <h2 className={styles.text}>Упрощенная игра (3 жизни)</h2>
        </div>
        <ul className={styles.levels}>
          <li className={styles.level}>
            <Link className={styles.levelLink} to={"/game/" + (simpleGame ? gameModes.SIMPLE : gameModes.HARD) + "/3"}>
              1
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to={"/game/" + (simpleGame ? gameModes.SIMPLE : gameModes.HARD) + "/6"}>
              2
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to={"/game/" + (simpleGame ? gameModes.SIMPLE : gameModes.HARD) + "/9"}>
              3
            </Link>
          </li>
        </ul>
        <Button onClick={""}>Играть</Button>
        <Link className={styles.boardLink} to={"/leaderboard"}>
          Перейти к лидерборду
        </Link>
      </div>
    </div>
  );
}
