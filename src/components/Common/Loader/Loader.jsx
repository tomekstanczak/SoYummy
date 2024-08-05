// Komponent renderuje wskaźnik ładowania, gdy wykonywane jest żądanie na jednej ze stron

import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Loader;
