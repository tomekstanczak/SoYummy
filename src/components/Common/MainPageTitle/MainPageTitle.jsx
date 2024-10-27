import styles from "./MainPageTitle.module.css";

const MainPageTitle = ({ title, isDark }) => {
  return (
    <div className={`${styles.titleContainer} ${isDark ? styles.dark : ""}`}>
      <h1>{title}</h1>
    </div>
  );
};

export default MainPageTitle;
