import { Link } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";

export function SelectLevelPage() {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Выбери сложность</h1>
        <div className={styles.mode}>
          <label className={styles.label}>
            <input type="checkbox" />
            <span className={styles.slider} />
          </label>
          <h2 className={styles.text}>Упрощенная игра</h2>
        </div>
        <ul className={styles.levels}>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/3">
              1
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/6">
              2
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/9">
              3
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
