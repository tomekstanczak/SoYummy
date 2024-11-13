import { createContext, useState, useContext } from "react";
import axios from "axios";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [searchError, setSearchError] = useState(null);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    recipesPerPage: 10,
  });

  const searchRecipesByTitle = async (title, currentPage, recipesPerPage) => {
    try {
      const response = await axios.get(
        `https://soyummybe.onrender.com/recipes/search?keyword=${title}`
      );
      setRecipes(response.data.data.recipes);
      setSearchError(null);
      setPagination({ currentPage, recipesPerPage });
    } catch (error) {
      setSearchError("Failed to fetch recipes by title. Please try again.");
      setRecipes([]);
    }
  };

  const searchRecipesByIngredient = async (
    ingredient,
    currentPage,
    recipesPerPage
  ) => {
    try {
      const response = await axios.get(
        `https://soyummybe.onrender.com/ingredients/ingredients?keyword=${ingredient}`
      );
      const recipeList = response.data.data.recipes;

      setRecipes(recipeList);
      setSearchError(null);
      setPagination({ currentPage, recipesPerPage });
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
        pagination,
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
