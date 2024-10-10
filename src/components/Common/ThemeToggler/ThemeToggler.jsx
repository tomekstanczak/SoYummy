import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import styles from "./ThemeToggler.module.css";

const ThemeToggler = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <button className={styles.toggleContainer}>
      <input
        type="checkbox"
        className={styles.toggleInput}
        checked={isDark}
        name="toggle"
        onChange={toggleTheme}
      />
      <label htmlFor="toggle" className={styles.toggleLabel}></label>
    </button>
  );
};

export default ThemeToggler;
