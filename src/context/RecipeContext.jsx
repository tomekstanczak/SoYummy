import { createContext, useState } from "react";
import axios from "axios";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipe, setRecipe] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  const fetchRecipe = async (recipeId) => {
    try {
      const response = await axios.get(
        `https://so-yummy-31fabc853d58.herokuapp.com/recipes/recipe/${recipeId}`
      );
      const data = response.data.data.recipe;
      setRecipe(data);
      setIsFavorite(data?.favorites?.includes("yourUserId") || false);
    } catch (error) {
      console.error("Error fetching recipe:", error);
    }
  };

  const fetchIngredientsList = async () => {
    try {
      const response = await axios.get(
        `https://so-yummy-31fabc853d58.herokuapp.com/ingredients/ingredients/list`
      );
      const data = response.data.data.ingredients;

      setIngredients(data);
    } catch (error) {
      console.error("Error fetching ingredients:", error);
    }
  };

  return (
    <RecipeContext.Provider
      value={{
        recipe,
        isFavorite,
        fetchRecipe,
        setIsFavorite,
        fetchIngredientsList,
        ingredients,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
