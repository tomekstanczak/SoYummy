import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipe, setRecipe] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);

  useEffect(() => {
    fetchFavoriteRecipes(); // Ładowanie ulubionych przepisów przy starcie
  }, []);

  const fetchRecipe = async (recipeId) => {
    try {
      const response = await axios.get(
        `https://so-yummy-31fabc853d58.herokuapp.com/recipes/recipe/${recipeId}`
      );
      const data = response.data.data.recipe;
      setRecipe(data);
      const favoriteStatus = checkIfFavorite(data._id);
      setIsFavorite(favoriteStatus); // Ustawienie statusu ulubionego
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

  const fetchFavoriteRecipes = async () => {
    const token = localStorage.getItem("authToken");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    try {
      const response = await axios.get(
        `https://so-yummy-31fabc853d58.herokuapp.com/favorite/favorite/`
      );
      setFavoriteRecipes(response.data.data.favoriteRecipes);
    } catch (error) {
      console.error("Error fetching favorite recipes:", error);
    }
  };

  const checkIfFavorite = (recipeId) => {
    return favoriteRecipes.some((favorite) => favorite._id === recipeId);
  };

  const addToFavorites = async (recipeId) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    try {
      await axios.post(
        `https://so-yummy-31fabc853d58.herokuapp.com/favorite/favorite/add`,
        { recipeId }
      );
      setIsFavorite(true);
      await fetchFavoriteRecipes();
    } catch (error) {
      console.error("Error adding recipe to favorites:", error);
    }
  };

  const removeFromFavorites = async (recipeId) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    try {
      await axios.delete(
        `https://so-yummy-31fabc853d58.herokuapp.com/favorite/favorite/delete/${recipeId}`
      );
      setIsFavorite(false);
      await fetchFavoriteRecipes();
    } catch (error) {
      console.error("Error removing recipe from favorites:", error);
    }
  };

  const toggleFavorite = async (recipeId) => {
    if (isFavorite) {
      await removeFromFavorites(recipeId);
    } else {
      await addToFavorites(recipeId);
    }
  };

  const fetchShoppingList = async () => {
    const token = localStorage.getItem("authToken");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    try {
      const response = await axios.get(
        "https://so-yummy-31fabc853d58.herokuapp.com/shopping-list/shopping-list/"
      );
      setShoppingList(response.data.data.shoppingList);
    } catch (error) {
      console.error("Error fetching shopping list:", error);
    }
  };

  const addToShoppingList = async (ingredient) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    try {
      await axios.post(
        `https://so-yummy-31fabc853d58.herokuapp.com/shopping-list/shopping-list/add`,
        {
          ttl: ingredient.ttl,
          desc: ingredient.desc || "",
          t: ingredient.t || "",
          thb: ingredient.thb || "",
        }
      );
      await fetchShoppingList();
    } catch (error) {
      console.error("Error adding ingredient to shopping list:", error);
    }
  };

  const removeFromShoppingList = async (ingredientId) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    try {
      await axios.delete(
        `https://so-yummy-31fabc853d58.herokuapp.com/shopping-list/shopping-list/delete/${ingredientId}`
      );
      await fetchShoppingList();
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
        fetchIngredientsList,
        ingredients,
        fetchFavoriteRecipes,
        checkIfFavorite,
        toggleFavorite,
        fetchShoppingList,
        shoppingList,
        addToShoppingList,
        removeFromShoppingList,
        favoriteRecipes,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
