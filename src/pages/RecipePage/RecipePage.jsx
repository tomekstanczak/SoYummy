import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import RecipePageHero from "../../components/RecipePage/RecipePageHero/RecipePageHero";
import RecipeIngredientsList from "../../components/RecipePage/RecipeIngredientsList/RecipeIngredientsList";
import RecipePreparation from "../../components/RecipePage/RecipePreparation/RecipePreparation";

import styles from "./RecipePage.module.css";

const RecipePage = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(
          `https://so-yummy-31fabc853d58.herokuapp.com/recipes/recipe/${recipeId}`
        );
        const data = response.data.data.recipe;
        console.log("Fetched data:", data);
        setRecipe(data);
        setIsFavorite(data?.favorites?.includes("yourUserId") || false);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
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
      <RecipePreparation preparationSteps={recipe.instructions} />
    </div>
  );
};

export default RecipePage;
