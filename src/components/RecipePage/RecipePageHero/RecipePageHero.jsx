// Komponent odbiera dane we właściwościach i renderuje:
// - MainPageTitle - uniwersalny komponent dla tytułu strony z nazwą potrawy;
// - Opis potrawy opisanej w przepisie;
// - Przycisk AddToFavorite - jeśli przepis nie znajduje się na liście własnych przepisów użytkownika;
// - Czas gotowania potrawy (jeśli wartość ta jest dostępna).
// Kliknięcie przycisku AddtoFavorite powinno spełnić żądanie i dodać przepis do listy ulubionych.
// Jeśli taki przepis znajduje się już na liście ulubionych, to zamiast przycisku AddtoFavorite powinien znajdować się przycisk RemoveFromFavorite, którego kliknięcie spowoduje usunięcie przepisu z listy ulubionych.

import clock from "../../../assets/icons/formatedIcons/clock.svg";

import styles from "./RecipePageHero.module.css";

const RecipePageHero = ({ recipe, isFavorite, toggleFavorite }) => {
  return (
    <div className={styles.recipePageHero}>
      <div className={styles.descriptionContainer}>
        <h1 className={styles.mainPageTitle}>{recipe.name}</h1>
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
      {recipe.cookingTime && (
        <p className={styles.cookingTime}>
          <img src={clock} alt="clock" />
          {recipe.cookingTime} min
        </p>
      )}
    </div>
  );
};

export default RecipePageHero;
