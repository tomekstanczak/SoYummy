import NotFound from "../../../src/assets/images/404.png";

import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={styles.notFoundContainer}>
      <img className={styles.notFoundImg} src={NotFound} alt="" />
      <div className={styles.descriptionContainer}>
        <h2 className={styles.title}>We are sorry,</h2>
        <p className={styles.description}>
          but the page you were looking for can’t be found...
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
