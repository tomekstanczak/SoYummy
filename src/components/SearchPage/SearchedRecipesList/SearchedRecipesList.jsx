import noResultsImg from "../../../assets/images/Recipe/searchNoResults.png";

import styles from "./SearchedRecipesList.module.css";

const SearchedRecipesList = ({ recipes }) => {
  if (!recipes) {
    return (
      <>
        <img
          className={styles.searchPageImg}
          src={noResultsImg}
          alt="vegetables"
        />
        <div className={styles.noResults}>Enter query</div>
      </>
    );
  } else if (recipes.length === 0) {
    return (
      <>
        <img
          className={styles.searchPageImg}
          src={noResultsImg}
          alt="vegetables"
        />
        <div className={styles.noResults}>
          Try looking for something else...
        </div>
      </>
    );
  }

  return (
    <div className={styles.recipesList}>
      {recipes.map((recipe) => (
        <div key={recipe._id} className={styles.recipeCard}>
          <img src={recipe.thumb} alt={recipe.title} className={styles.image} />
          <h3 className={styles.name}>{recipe.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default SearchedRecipesList;
