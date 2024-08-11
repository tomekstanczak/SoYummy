import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RecipeContext } from "../../context/RecipeContext";
import RecipePageHero from "../../components/RecipePage/RecipePageHero/RecipePageHero";
import RecipeIngredientsList from "../../components/RecipePage/RecipeIngredientsList/RecipeIngredientsList";
import RecipePreparation from "../../components/RecipePage/RecipePreparation/RecipePreparation";
import styles from "./RecipePage.module.css";

const RecipePage = () => {
  const { recipeId } = useParams();
  const {
    recipe,
    isFavorite,
    fetchRecipe,
    setIsFavorite,
    fetchIngredientsList,
    ingredients: allIngredients,
    fetchIsFavorite,
  } = useContext(RecipeContext);

  useEffect(() => {
    fetchRecipe(recipeId);
    fetchIngredientsList();
  }, [recipeId]);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    fetchIsFavorite(recipeId);
  };

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className={styles.recipePage}>
      <RecipePageHero
        recipe={recipe}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
      />
      <RecipeIngredientsList
        ingredients={recipe.ingredients}
        allIngredients={allIngredients}
      />
      <RecipePreparation preparationSteps={recipe.instructions} />
    </div>
  );
};

export default RecipePage;
