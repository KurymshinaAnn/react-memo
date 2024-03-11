import styles from "./Counter.module.css";

import cn from "classnames";

export function Counter({ maxAttempts, attempts }) {
  return (
    <div className={styles.counterBox}>
      <h2 className={styles.counterText}>Количество попыток</h2>
      <div className={styles.counterBlock}>
        {[...Array(maxAttempts)].map((item, index) => (
          <div className={cn(styles.counter, index + 1 > attempts ? styles.counter_failed : null)}></div>
        ))}
      </div>
    </div>
  );
}
