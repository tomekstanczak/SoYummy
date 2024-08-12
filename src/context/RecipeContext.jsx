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

  const addToFavorites = async (recipeId) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    try {
      const response = await axios.post(
        `https://so-yummy-31fabc853d58.herokuapp.com/favorite/favorite/add`,
        { recipeId }
      );
      setIsFavorite(true);
      console.log("Recipe added to favorites:", response.data);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
  const removeFromFavorites = async (recipeId) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    try {
      const response = await axios.delete(
        `https://so-yummy-31fabc853d58.herokuapp.com/favorite/favorite/delete/${recipeId}`
      );
      setIsFavorite(false);
      console.log("Recipe removed from favorites:", response.data);
    } catch (error) {
      console.error("Error removing recipe from favorites:", error);
    }
  };

  const toggleFavorite = (recipeId) => {
    if (isFavorite) {
      removeFromFavorites(recipeId);
    } else {
      addToFavorites(recipeId);
    }
  };
  const addToShoppingList = async (ingredient) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    try {
      const response = await axios.post(
        `https://so-yummy-31fabc853d58.herokuapp.com/shopping-list/shopping-list/add`,
        {
          ttl: ingredient.ttl,
          desc: ingredient.desc || "",
          t: ingredient.t || "",
          thb: ingredient.thb || "",
        }
      );
      console.log("Ingredient added to shopping list:", response.data);
    } catch (error) {
      console.error("Error adding ingredient to shopping list:", error);
    }
  };

  const removeFromShoppingList = async (ingredientId) => {
    try {
      const response = await axios.delete(
        `https://so-yummy-31fabc853d58.herokuapp.com/shopping-list/shopping-list/delete/${ingredientId}`
      );
      console.log("Removed from shopping list:", response.data);
    } catch (error) {
      console.error("Error removing from shopping list:", error);
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
        addToFavorites,
        removeFromFavorites,
        toggleFavorite,
        addToShoppingList,
        removeFromShoppingList,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
