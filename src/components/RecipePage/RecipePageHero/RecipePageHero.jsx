import clock from "../../../assets/icons/formatedIcons/clock.svg";
import styles from "./RecipePageHero.module.css";

const RecipePageHero = ({ recipe, isFavorite, toggleFavorite }) => {
  return (
    <div className={styles.recipePageHero}>
      <div className={styles.descriptionContainer}>
        <h1 className={styles.mainPageTitle}>{recipe.title}</h1>{" "}
        {/* Zmieniono na recipe.title */}
        <p className={styles.description}>{recipe.description}</p>
      </div>

      {isFavorite ? (
        <button className={styles.addBtn} onClick={toggleFavorite}>
          Remove from favorite recipes
        </button>
      ) : (
        <button className={styles.addBtn} onClick={toggleFavorite}>
          Add to favorite recipes
        </button>
      )}
      {recipe.time && ( // Użyj recipe.time
        <p className={styles.cookingTime}>
          <img src={clock} alt="clock" />
          {recipe.time} min
        </p>
      )}
    </div>
  );
};

export default RecipePageHero;
