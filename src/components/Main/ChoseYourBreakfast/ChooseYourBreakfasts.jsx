import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeContext";
import styles from "./ChooseYourBreakfast.module.css";
import arrowRight from "../../../assets/icons/formatedIcons/arrow-right.svg";

const ChooseYourBreakfast = () => {
  const { isDark } = useContext(ThemeContext);

  const navigate = useNavigate();

  const handleSeeRecipes = () => {
    navigate("/categories?category=Breakfast");
  };

  return (
    <div className={`${styles.chooseContainer} ${isDark ? styles.dark : ""}`}>
      <p className={`${styles.chooseDescription} ${isDark ? styles.dark : ""}`}>
        <span className={styles.chooseDescriptionSpan}>
          Delicious and healthy
        </span>{" "}
        way to enjoy a variety of fresh ingredients in one satisfying meal
      </p>
      <div className={styles.seeRecipiesBox}>
        <button
          className={`${styles.chooseArrowBtn} ${isDark ? styles.dark : ""}`}
          onClick={handleSeeRecipes}
        >
          See recipes
        </button>
        <svg
          className={`${styles.chooseArrowBtn} ${isDark ? styles.dark : ""}`}
        >
          <use href={`${arrowRight}#arrow-right`}></use>
        </svg>
      </div>
    </div>
  );
};

export default ChooseYourBreakfast;
