import React from "react";
import styles from "./EmptyState.module.css";

const EmptyState = () => {
  return (
    <div className={styles.emptyState}>
      <p className={styles.PartOne}>Unfortunately,</p>
      <p className={styles.PartTwo}>nothing has been added to favorites...</p>
    </div>
  );
};

export default EmptyState;
