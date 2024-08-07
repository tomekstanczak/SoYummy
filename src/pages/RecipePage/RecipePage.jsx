import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipePageHero from "../../components/RecipePage/RecipePageHero/RecipePageHero";
import RecipeIngredientsList from "../../components/RecipePage/RecipeIngredientsList/RecipeIngredientsList";
import RecipePreparation from "../../components/RecipePage/RecipePreparation/RecipePreparation";

import recipeData from "../../../public/dummyRecipe.json";

import styles from "./RecipePage.module.css";

const RecipePage = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchRecipe = async () => {
      const data = recipeData.recipes.find(
        (recipe) => recipe.recipeId === recipeId
      );
      console.log("Fetched data:", data);
      setRecipe(data);
      setIsFavorite(data?.isFavorite);
    };

    console.log("recipeId:", recipeId);
    fetchRecipe();
  }, [recipeId]);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const toggleIngredient = (ingredient) => {
    console.log("Toggled ingredient:", ingredient);
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
        toggleIngredient={toggleIngredient}
      />
      <RecipePreparation preparationSteps={recipe.preparationSteps} />
    </div>
  );
};

export default RecipePage;
