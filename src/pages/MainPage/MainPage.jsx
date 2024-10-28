import { useContext } from "react";
import ChooseYourBreakfast from "../../components/Main/ChoseYourBreakfast/ChooseYourBreakfasts";
import Search from "../../components/Main/Search/Search";
import PreviewCategories from "../../components/Main/PreviewCategories/PreviewCategories";
import { ThemeContext } from "../../context/ThemeContext";

import spinach from "../../assets/images/spinach.png";

import styles from "./MainPage.module.css";

const MainPage = () => {
  const { isDark, setHeaderTextColor } = useContext(ThemeContext);

  setHeaderTextColor("black");

  return (
    <>
      <div
        className={`${styles.mainPageContainer} ${
          isDark ? styles.dark : styles.light
        }`}
      >
        <ChooseYourBreakfast />
        <Search />
        <PreviewCategories />
      </div>

      <img className={styles.spinachImg} src={spinach} alt="leafs of spinach" />
      <div className={styles.squareBackground}></div>
    </>
  );
};

export default MainPage;
