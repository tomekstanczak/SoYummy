// Komponent СhooseYourBreakfast zawiera przycisk See recipes, który powinien przekierowywać użytkownika na stronę CategoriesPage z aktywną kategorią Breakfast.
import { useNavigate } from "react-router-dom";

import styles from "./ChooseYourBreakfast.module.css";

import arrowRight from "../../../assets/icons/formatedIcons/arrow-right.svg";

const ChooseYourBreakfast = () => {
  const navigate = useNavigate();

  const handleSeeRecipes = () => {
    navigate("/categories/Breakfast");
  };

  return (
    <div className={styles.chooseContainer}>
      <p className={styles.chooseDescription}>
        <span className={styles.chooseDescriptionSpan}>
          Delicious and healthy
        </span>{" "}
        way to enjoy a variety of fresh ingredients in one satisfying meal
      </p>

      <button className={styles.chooseArrowBtn} onClick={handleSeeRecipes}>
        See recipes
        <img src={arrowRight} alt="arrow aimed to right" />
      </button>
    </div>
  );
};

export default ChooseYourBreakfast;
