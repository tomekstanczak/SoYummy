import noResultsImg from "../../../assets/images/Recipe/searchNoResults.png";
import { useNavigate } from "react-router-dom";
import styles from "./SearchedRecipesList.module.css";

const SearchedRecipesList = ({ recipes }) => {
  const navigate = useNavigate();

  if (!recipes) {
    return (
      <div className={styles.recipesList}>
        <img
          className={styles.searchPageImg}
          src={noResultsImg}
          alt="vegetables"
        />
        <div className={styles.noResults}>Enter query</div>
      </div>
    );
  } else if (recipes.length === 0) {
    return (
      <div className={styles.recipesList}>
        <img
          className={styles.searchPageImg}
          src={noResultsImg}
          alt="vegetables"
        />
        <div className={styles.noResults}>
          Try looking for something else...
        </div>
      </div>
    );
  }

  return (
    <div className={styles.recipesList}>
      {recipes.map((recipe) => (
        <div
          key={recipe._id}
          onClick={() => navigate(`/recipe/${recipe._id}`)}
          className={styles.recipeCard}
        >
          <img src={recipe.thumb} alt={recipe.title} className={styles.image} />
          <h3 className={styles.name}>{recipe.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default SearchedRecipesList;
