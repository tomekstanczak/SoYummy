import styles from "./MainPageTitle.module.css";

const MainPageTitle = ({ title }) => {
  return (
    <div className={styles.titleContainer}>
      <h1>{title}</h1>
    </div>
  );
};

export default MainPageTitle;
