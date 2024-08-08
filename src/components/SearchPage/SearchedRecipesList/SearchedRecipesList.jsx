import styles from "./SearchedRecipesList.module.css";

const SearchedRecipesList = ({ recipes }) => {
  if (!recipes || recipes.length === 0) {
    return <div className={styles.noResults}>Need searching</div>;
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
