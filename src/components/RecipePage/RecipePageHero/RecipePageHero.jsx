import { useEffect } from "react";
import clock from "../../../assets/icons/formatedIcons/clock.svg";
import styles from "./RecipePageHero.module.css";

const RecipePageHero = ({
  recipe,
  isFavorite,
  toggleFavorite,
  checkIfFavorite,
}) => {
  useEffect(() => {
    if (recipe) {
      setIsFavorite(checkIfFavorite(recipe._id));
    }
  }, [recipe, checkIfFavorite, setIsFavorite]);

  return (
    <div className={styles.recipePageHero}>
      <div className={styles.descriptionContainer}>
        <h1 className={styles.mainPageTitle}>{recipe.title}</h1>
        <p className={styles.description}>{recipe.description}</p>
      </div>

      <button
        className={styles.addBtn}
        onClick={() => toggleFavorite(recipe._id)}
      >
        {isFavorite
          ? "Remove from favorite recipes"
          : "Add to favorite recipes"}
      </button>

      {recipe.time && (
        <p className={styles.cookingTime}>
          <img src={clock} alt="clock" />
          {recipe.time} min
        </p>
      )}
    </div>
  );
};

export default RecipePageHero;
