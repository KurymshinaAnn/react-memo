import { Link } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";
import { useState } from "react";

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
          <h2 className={styles.text}>Упрощенная игра</h2>
        </div>
        <ul className={styles.levels}>
          <li className={styles.level}>
            <Link className={styles.levelLink} to={"/game/3?simpleGame=" + simpleGame}>
              1
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to={"/game/6?simpleGame=" + simpleGame}>
              2
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to={"/game/9?simpleGame=" + simpleGame}>
              3
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
