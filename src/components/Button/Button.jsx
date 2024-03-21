import styles from "./Button.module.css";

export function Button({ children, onClick, className = styles.button }) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}
