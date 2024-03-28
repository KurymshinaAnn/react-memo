import { Link, useNavigate } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";
import { useState } from "react";
import { gameModes } from "../../utils/game-modes";
import { Button } from "../../components/Button/Button";

export function SelectLevelPage() {
  const [simpleGame, setSimpleGame] = useState(false);
  const [level, setLevel] = useState(0);
  const navigate = useNavigate();

  const onLevelSelected = e => {
    const newLevel = e.target.getAttribute("data-level");
    setLevel(parseInt(newLevel));
  };

  const onGameStart = () => {
    navigate("/game/" + (simpleGame ? gameModes.SIMPLE : gameModes.HARD) + "/" + level);
  };

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
            <a className={styles.levelLink} data-level={3} onClick={onLevelSelected}>
              1
            </a>
          </li>
          <li className={styles.level}>
            <a className={styles.levelLink} data-level={6} onClick={onLevelSelected}>
              2
            </a>
          </li>
          <li className={styles.level}>
            <a className={styles.levelLink} data-level={9} onClick={onLevelSelected}>
              3
            </a>
          </li>
        </ul>
        <Button onClick={onGameStart}>Играть</Button>
        <Link className={styles.boardLink} to={"/leaderboard"}>
          Перейти к лидерборду
        </Link>
      </div>
    </div>
  );
}
