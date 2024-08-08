// Przełącznik motywu ZADANIE DODATKOWE!!!
// Blok zmienia motyw z jasnego na ciemny i odwrotnie.
// Wybrany motyw jest zapisywany w pamięci i stosowany, gdy użytkownik wchodzi na stronę aplikacji.

import styles from "./ThemeToggler.module.css";

const ThemeToggler = () => {
  return (
    <>
      <button className={styles.toggleContainer}>
        <input type="checkbox" className={styles.toggleInput} />
        <label className={styles.toggleLabel}></label>
      </button>
    </>
  );
};

export default ThemeToggler;
