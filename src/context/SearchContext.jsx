import { createContext, useState, useContext } from "react";
import axios from "axios";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [searchError, setSearchError] = useState(null);

  const searchRecipesByTitle = async (title) => {
    try {
      const response = await axios.get(
        `https://so-yummy-31fabc853d58.herokuapp.com/recipes/search?keyword=${title}`
      );
      setRecipes(response.data.data.recipes);
      setSearchError(null);
    } catch (error) {
      setSearchError("Failed to fetch recipes by title. Please try again.");
      setRecipes([]);
    }
  };

  const searchRecipesByIngredient = async (ingredient) => {
    try {
      const response = await axios.get(
        `https://so-yummy-31fabc853d58.herokuapp.com/ingredients/ingredients?keyword=${ingredient}`
      );
      const ingredientData = response.data.data.ingredients;

      const recipeList = ingredientData.flatMap(
        (ingredient) => ingredient.recipes
      );
      setRecipes(recipeList);
      setSearchError(null);
    } catch (error) {
      setSearchError(
        "Failed to fetch recipes by ingredient. Please try again."
      );
      setRecipes([]);
    }
  };

  return (
    <SearchContext.Provider
      value={{
        recipes,
        searchError,
        searchRecipesByTitle,
        searchRecipesByIngredient,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  return useContext(SearchContext);
};
