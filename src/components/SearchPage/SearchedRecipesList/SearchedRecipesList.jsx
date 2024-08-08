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
        <div key={recipe.id} className={styles.recipeCard}>
          <img src={recipe.image} alt={recipe.name} className={styles.image} />
          <h3 className={styles.name}>{recipe.name}</h3>
          <p className={styles.description}>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchedRecipesList;
