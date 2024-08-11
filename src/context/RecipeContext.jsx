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

  const fetchIsFavorite = async (recipeId) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    try {
      const response = await axios.post(
        `https://so-yummy-31fabc853d58.herokuapp.com/favorite/favorite/add`,
        { recipeId }
      );

      console.log(response);
    } catch (e) {
      console.log(e);
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
        fetchIsFavorite,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
